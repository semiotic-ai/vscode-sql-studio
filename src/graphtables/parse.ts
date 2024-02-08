import { snakeCase } from 'change-case';
import {
	parse as parseDocument,
	Kind,
	type ObjectTypeDefinitionNode,
	// type InterfaceTypeDefinitionNode, // FIXME: Unused type. Can we remove this?
	type EnumTypeDefinitionNode,
	type DocumentNode,
	type TypeDefinitionNode,
	type FieldDefinitionNode,
	type TypeNode,
	type NamedTypeNode,
	type ListTypeNode,
	type ConstDirectiveNode,
	type ConstValueNode,
	type ConstObjectValueNode
} from 'graphql';

import {
	type Column,
	TypeKind,
	type ScalarType,
	type EnumType,
	type ReferenceType,
	type ListType,
	type Relation,
	type Table,
	type Layout
} from './layout';
import { DBType, type IdType } from './db';
import {
	DERIVED_FROM_DIRECTIVE_NAME,
	FULLTEXT_DIRECTIVE_NAME,
	ID_FIELD_NAME,
	SCHEMA_TYPE_NAME,
	isDerivedField,
	isImmutableEntity
} from './graph';

const PrimaryKeyColumn: Column = {
	name: 'vid',
	type: { kind: TypeKind.Scalar, dbType: DBType.BigSerial },
	isPrimary: true,
	nullable: false
};

const BlockRangeColumn: Column = {
	name: 'block_range',
	type: { kind: TypeKind.Scalar, dbType: DBType.Int4Range },
	isPrimary: false,
	nullable: false
};

const BlockColumn: Column = {
	name: 'block$',
	type: { kind: TypeKind.Scalar, dbType: DBType.Integer },
	isPrimary: false,
	nullable: false
};

interface Schema {
	objects: { [key: string]: ObjectTypeDefinitionNode };
	enums: { [key: string]: EnumTypeDefinitionNode };
	fulltext: { [key: string]: Column[] };
}

function parseDBType(fieldType: NamedTypeNode): DBType | undefined {
	switch (fieldType.name.value) {
		case 'ID':
			return DBType.Text;
		case 'Boolean':
			return DBType.Boolean;
		case 'BigInt':
			return DBType.Numeric;
		case 'Bytes':
			return DBType.Bytea;
		case 'BigDecimal':
			return DBType.Numeric;
		case 'Int':
			return DBType.Integer;
		case 'Int8':
			return DBType.Int8;
		case 'String':
			return DBType.Text;
		default:
			return undefined;
	}
}

function parseIDType(fieldType: TypeNode): IdType {
	if (fieldType.kind !== Kind.NON_NULL_TYPE)
		throw new Error(`ID field must be a non-nullable type.`);

	fieldType = fieldType.type;

	if (fieldType.kind !== Kind.NAMED_TYPE)
		throw new Error(`ID field must be ID, Bytes, Int8 or String type.`);

	switch (fieldType.name.value) {
		case 'ID':
			return DBType.Text;
		case 'Bytes':
			return DBType.Bytea;
		case 'Int8':
			return DBType.Int8;
		case 'String':
			return DBType.Text;
		default:
			throw new Error(`ID field must be ID, Bytes, Int8 or String type.`);
	}
}

function parseScalarType(fieldType: NamedTypeNode): ScalarType | undefined {
	const dbType = parseDBType(fieldType);
	return dbType !== undefined ? { kind: TypeKind.Scalar, dbType } : undefined;
}

function parseEnumType(fieldType: NamedTypeNode, schema: Schema): EnumType | undefined {
	if (Object.prototype.hasOwnProperty.call(schema.enums, fieldType.name.value)) {
		return { kind: TypeKind.Enum, name: snakeCase(fieldType.name.value) };
	}

	return undefined;
}

function parseReferenceType(fieldType: NamedTypeNode, schema: Schema): ReferenceType | undefined {
	if (Object.prototype.hasOwnProperty.call(schema.objects, fieldType.name.value)) {
		const target = schema.objects[fieldType.name.value];
		const id_field_type = target.fields?.find((field) => field.name.value === ID_FIELD_NAME)?.type;

		if (id_field_type === undefined) {
			throw new Error(
				`Reference entity ${fieldType.name.value} must have a ${ID_FIELD_NAME} field`
			);
		}

		const table = snakeCase(fieldType.name.value);

		const dbType = parseIDType(id_field_type);

		return { kind: TypeKind.Reference, table, column: ID_FIELD_NAME, dbType };
	}

	return undefined;
}

function parseNamedType(
	fieldType: NamedTypeNode,
	schema: Schema
): ScalarType | EnumType | ReferenceType {
	const type =
		parseScalarType(fieldType) ||
		parseReferenceType(fieldType, schema) ||
		parseEnumType(fieldType, schema);

	if (type !== undefined) return type;

	throw new Error(`Item type of the list must be a scalar or enum type.`);
}

function parseListType(fieldType: ListTypeNode, schema: Schema): ListType {
	const nullable = fieldType.type.kind !== Kind.NON_NULL_TYPE;
	const item_type = nullable ? fieldType.type : fieldType.type.type;

	if (item_type.kind !== Kind.NAMED_TYPE) {
		throw new Error(`Item type of the list must be a known/named type.`);
	}

	const itemType = parseNamedType(item_type, schema);

	return { kind: TypeKind.List, itemType };
}

function parseColumn(field: FieldDefinitionNode, schema: Schema): Column {
	const name = snakeCase(field.name.value);
	const description = field.description?.value;

	if (name === ID_FIELD_NAME) {
		const dbType = parseIDType(field.type);
		return {
			name,
			type: { kind: TypeKind.Scalar, dbType },
			nullable: false,
			description,
			isPrimary: false
		};
	}

	const nullable = field.type.kind !== Kind.NON_NULL_TYPE;
	const fieldType = nullable ? field.type : field.type.type;

	const type =
		fieldType.kind === Kind.LIST_TYPE
			? parseListType(fieldType, schema)
			: parseNamedType(fieldType, schema);

	return { name, type, isPrimary: false, nullable, description };
}

function parseRelation(field: FieldDefinitionNode): Relation {
	const name = snakeCase(field.name.value);

	const type = field.type.kind !== Kind.NON_NULL_TYPE ? field.type : field.type.type;

	if (type.kind !== Kind.LIST_TYPE) throw new Error(`Relation field must be a list type.`);

	if (type.type.kind !== Kind.NON_NULL_TYPE)
		throw new Error(`Relation field must be a list of non-nullable type.`);

	if (type.type.type.kind !== Kind.NAMED_TYPE)
		throw new Error(`Relation field must be a list of non-nullable known/named type.`);

	const table_type = type.type.type;

	const table = snakeCase(table_type.name.value);

	const derivedFrom = field.directives?.find(
		(dir) => dir.name.value === DERIVED_FROM_DIRECTIVE_NAME
	);

	if (derivedFrom === undefined)
		throw new Error(`Relation field must have a derivedFrom directive.`);

	const column = snakeCase(parseOjectField(derivedFrom, 'field', Kind.STRING));

	return { name, table, column };
}

function parseTable(table: ObjectTypeDefinitionNode, schema: Schema): Table {
	const name = snakeCase(table.name.value);

	const blockColumn = isImmutableEntity(table) ? BlockColumn : BlockRangeColumn;

	const columns = [PrimaryKeyColumn, blockColumn]
		.concat(
			table.fields
				?.filter((field) => !isDerivedField(field))
				.map((field) => parseColumn(field, schema)) || []
		)
		.concat(schema.fulltext[name] || []);

	const id_field_relations =
		table.fields?.filter((field) => isDerivedField(field)).map(parseRelation) || [];

	const relations: { [key: string]: Relation[] } = {};

	relations[ID_FIELD_NAME] = id_field_relations;

	return {
		name,
		columns,
		relations
	};
}

function getDefinitions<T extends TypeDefinitionNode>(
	document: DocumentNode,
	kind: Kind
): { [key: string]: T } {
	return document.definitions
		.filter((def) => def.kind === kind)
		.map((def) => def as T)
		.reduce((acc: { [key: string]: T }, def: T) => {
			acc[def.name.value] = def;
			return acc;
		}, {});
}

export function parseEnum(enum_type: EnumTypeDefinitionNode): { name: string; values: string[] } {
	const name = snakeCase(enum_type.name.value);
	const values = enum_type.values?.map((value) => value.name.value) || [];
	return { name, values };
}

function parseOjectField(
	obj: ConstDirectiveNode | ConstObjectValueNode,
	name: string,
	kind: Kind.ENUM | Kind.STRING
): string {
	let field: ConstValueNode | undefined = undefined;

	if (obj.kind === Kind.DIRECTIVE)
		field = obj.arguments?.find((arg) => arg.name.value === name)?.value;
	else if (obj.kind === Kind.OBJECT)
		field = obj.fields?.find((field) => field.name.value === name)?.value;

	if (field === undefined)
		throw new Error(`Argument ${name} is required for full text search column.`);

	if (field.kind === kind) return field.value;
	else throw new Error(`Argument ${name} must be a ${kind} for full text search column.`);
}

function parseFullTextDirective(directive: ConstDirectiveNode): { table: string; column: Column } {
	const column_name = snakeCase(parseOjectField(directive, 'name', Kind.STRING));
	const language = parseOjectField(directive, 'language', Kind.ENUM);
	const algorithm = parseOjectField(directive, 'algorithm', Kind.ENUM);

	const include = directive.arguments?.find((arg) => arg.name.value === 'include')?.value;
	if (include === undefined || include.kind !== Kind.LIST || include.values.length !== 1) {
		throw new Error(
			`Argument include must be an array with single entity for full text search column.`
		);
	}

	const item = include.values.at(0);
	if (item === undefined || item.kind !== Kind.OBJECT) {
		throw new Error(
			`Argument include must be an array with single entity for full text search column.`
		);
	}

	const table_name = snakeCase(parseOjectField(item, 'entity', Kind.STRING));

	const fields = item.fields?.find((field) => field.name.value === 'fields')?.value;

	if (fields === undefined || fields.kind !== Kind.LIST) {
		throw new Error(`Argument include must be a list of strings for full text search column.`);
	}

	const columns = fields.values.map((value) => {
		if (value.kind !== Kind.OBJECT) {
			throw new Error(`Argument include must be a list of strings for full text search column.`);
		}
		return snakeCase(parseOjectField(value, 'name', Kind.STRING));
	});

	return {
		table: table_name,
		column: {
			name: column_name,
			type: { kind: TypeKind.TextSearch, dbType: DBType.TextSearch, language, algorithm, columns },
			isPrimary: false,
			nullable: true
		}
	};
}

function getFullTexts(document: DocumentNode): { [key: string]: Column[] } {
	const result =
		document.definitions
			.filter((def) => def.kind === Kind.OBJECT_TYPE_DEFINITION)
			.map((def) => def as ObjectTypeDefinitionNode)
			.find((def) => def.name.value == SCHEMA_TYPE_NAME)
			?.directives?.filter((dir) => dir.name.value === FULLTEXT_DIRECTIVE_NAME)
			.map(parseFullTextDirective)
			.reduce((acc: { [key: string]: Column[] }, value) => {
				const columns = acc[value.table] || [];
				columns.push(value.column);
				acc[value.table] = columns;
				return acc;
			}, {}) || {};
	return result;
}

/**
 * Parses GraphQL schema into a database layout
 * @param raw string containing valid GraphQL schema
 * @returns database layout
 */
export function parse(raw: string): Layout {
	const document = parseDocument(raw);

	//Hashmaps to easily access schema objects
	const schema: Schema = {
		objects: getDefinitions(document, Kind.OBJECT_TYPE_DEFINITION),
		enums: getDefinitions(document, Kind.ENUM_TYPE_DEFINITION),
		fulltext: getFullTexts(document)
	};

	// Parse graphql enum objects into database enums
	const enums = Object.values(schema.enums)
		.map(parseEnum)
		.reduce((acc: { [key: string]: string[] }, enum_def) => {
			acc[enum_def.name] = enum_def.values;
			return acc;
		}, {});

	// Parse graphql object types into database tables excluding POI and Schema table.
	const tables = Object.values(schema.objects)
		.filter((def) => def.name.value !== SCHEMA_TYPE_NAME)
		.map((def) => parseTable(def, schema));

	return {
		tables,
		enums
	};
}
