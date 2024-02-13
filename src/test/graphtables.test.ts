import * as assert from 'assert';

import { parse } from '../graphtables';
import {
	VIRTUAL_ID_COLUMN_NAME,
	BLOCK_RANGE_COLUMN_NAME,
	ID_FIELD_NAME
} from '../graphtables/graph';
import {
	EnumType,
	ReferenceType,
	ScalarType,
	TextSearchType,
	TypeKind
} from '../graphtables/layout';
import { DBType } from '../graphtables/db';

suite('basic', () => {
	const simple_schema = `
    type SomeComplexTableErc20Name  @entity {
        "Some description about a string field"
        id: ID!,
        nullableField:Boolean,
        booleanField:Boolean!,
        bigIntField:BigInt!,
        bytesField:Bytes!,
        bigDecimalField:BigDecimal!,
        intField:Int!,
        int8Field:Int8!,
        stringField:String!
    }
`;

	const layout = parse(simple_schema);

	test('single table parsed', () => assert.strictEqual(layout.tables.size, 1));

	const table = layout.tables.get('some_complex_table_erc20_name');

	test('table name is snake case', () => assert.notStrictEqual(table, undefined));
	test('column count is 11', () => assert.strictEqual(table!.columns.size, 11));

	suite('vid pk column', () => {
		const column = table!.columns.get(VIRTUAL_ID_COLUMN_NAME);
		test('is defined', () => assert.notStrictEqual(column, undefined));
		test('is primary key', () => assert.strictEqual(column!.isPrimary, true));
		test('type is `ScalarType`', () => assert.strictEqual(column!.type.kind, TypeKind.Scalar));
		test('db type is `bigserial`', () =>
			assert.strictEqual((column?.type as ScalarType).dbType, DBType.BigSerial));
		test('is not nullable', () => assert.strictEqual(column?.nullable, false));
	});

	suite('block range column', () => {
		const column = table!.columns.get(BLOCK_RANGE_COLUMN_NAME);
		test('is defined', () => assert.notStrictEqual(column, undefined));
		test('is not primary key', () => assert.strictEqual(column!.isPrimary, false));
		test('type is `ScalarType`', () => assert.strictEqual(column!.type.kind, TypeKind.Scalar));
		test('db type is `int4range`', () =>
			assert.strictEqual((column?.type as ScalarType).dbType, DBType.Int4Range));
		test('is not nullable', () => assert.strictEqual(column!.nullable, false));
	});

	suite('id column', () => {
		const column = table!.columns.get(ID_FIELD_NAME);
		test('is defined', () => assert.notStrictEqual(column, undefined));
		test('is not primary key', () => assert.strictEqual(column!.isPrimary, false));
		test('type is `ScalarType`', () => assert.strictEqual(column!.type.kind, TypeKind.Scalar));
		test('db type is `Text`', () =>
			assert.strictEqual((column!.type as ScalarType).dbType, DBType.Text));
		test('is not nullable', () => assert.strictEqual(column!.nullable, false));
	});

	suite('nullable column', () => {
		const column = table!.columns.get('nullable_field');
		test('is defined', () => assert.notStrictEqual(column, undefined));
		test('is nullable', () => assert.strictEqual(column?.nullable, true));
	});

	const scalar_columns: { name: string; expected: DBType }[] = [
		{ name: 'boolean_field', expected: DBType.Boolean },
		{ name: 'big_int_field', expected: DBType.Numeric },
		{ name: 'bytes_field', expected: DBType.Bytea },
		{ name: 'big_decimal_field', expected: DBType.Numeric },
		{ name: 'int_field', expected: DBType.Integer },
		{ name: 'int8_field', expected: DBType.Int8 },
		{ name: 'string_field', expected: DBType.Text }
	];

	scalar_columns.forEach((config) => {
		suite(config.name, () => {
			const column = table!.columns.get(config.name);
			test('is defined', () => assert.notStrictEqual(column, undefined));
			test('type is `ScalarType`', () => assert.strictEqual(column!.type.kind, TypeKind.Scalar));
			test('db type is correct', () =>
				assert.strictEqual((column!.type as ScalarType).dbType, config.expected));
		});
	});
});

suite('enum', () => {
	const enum_schema = `
    enum SomeComplexNamedErc20 {
        A
        B
        C
    }

    type SomeEnumTable @entity {
        id: ID!,
        enumField:SomeComplexNamedErc20!
    }
`;

	const expected_enum_name = 'some_complex_named_erc20';
	const expected_table_name = 'some_enum_table';

	const layout = parse(enum_schema);

	test('is parsed', () => assert.strictEqual(layout.enums.size, 1));
	test('name is `some_complex_named_erc20`', () =>
		assert.strictEqual(layout.enums.has(expected_enum_name), true));

	const enum_column = layout.tables.get(expected_table_name)!.columns.get('enum_field')!;

	test('column type is `EnumType`', () => assert.strictEqual(enum_column.type.kind, TypeKind.Enum));
	test('column enum name is `some_complex_named_erc20`', () =>
		assert.strictEqual((enum_column.type as EnumType).name, expected_enum_name));
});

suite('relation', () => {
	const relation_schema = `
    type SomeRelationParentTable @entity {
        id: ID!,
        children: [SomeRelationChildTable!]! @derivedFrom(field: "parentField")
    }

    type SomeRelationChildTable @entity {
        id: ID!,
        parentField: SomeRelationParentTable!
    }
`;

	const layout = parse(relation_schema);
	const expected_parent_table_name = 'some_relation_parent_table';
	const expected_child_table_name = 'some_relation_child_table';

	test('tables are parsed', () => assert.strictEqual(layout.tables.size, 2));

	const relations = layout.tables.get(expected_parent_table_name)!.relations.get(ID_FIELD_NAME)!;

	test('parent to child is parsed', () => assert.strictEqual(relations.length, 1));
	test('parent to child name is `children`', () =>
		assert.strictEqual(relations[0].name, 'children'));
	test('parent to child table name is `some_relation_child_table`', () =>
		assert.strictEqual(relations[0].table, expected_child_table_name));
	test('parent to child column name is `parent_field`', () =>
		assert.strictEqual(relations[0].column, 'parent_field'));

	const ref_type = layout.tables.get(expected_child_table_name)!.columns.get('parent_field')!.type;

	test('child to parent column type is `ReferenceType`', () =>
		assert.strictEqual(ref_type.kind, TypeKind.Reference));
	test('child to parent column reference table is `some_relation_parent_table`', () =>
		assert.deepEqual((ref_type as ReferenceType).tables, [expected_parent_table_name]));
	test('child to parent column reference column name is `id`', () =>
		assert.strictEqual((ref_type as ReferenceType).column, ID_FIELD_NAME));
	test('child to parent column reference db type is `Text`', () =>
		assert.strictEqual((ref_type as ReferenceType).dbType, DBType.Text));
});

// suite('fulltext', () => {

//     const fulltext_schema = `
//     type SomeFulltextTable @entity {
//         id: ID!,
//         symbol: String!,
//         name: String!,
//     }

//     type _Schema_
//         @fulltext(
//             name: "FulltextField"
//             language: tr
//             algorithm: rank
//             include: [
//             {
//                 entity: "SomeFulltextTable"
//                 fields: [{ name: "symbol" }, { name: "name" }, { name: "id" }]
//             }
//             ]
//         )
// `;

//     const layout = parse(fulltext_schema);

//     const fulltext_column = layout.tables.get("some_full_text_table")!.columns.get("fulltext_field");

//     test('column is defined', () => assert.notStrictEqual(fulltext_column,undefined));
//     test('column type is `TextSearchType`', () => assert.strictEqual(fulltext_column!.type.kind,TypeKind.TextSearch));
//     test('column db type is `tSVector`', () => assert.strictEqual((fulltext_column!.type as TextSearchType).dbType,DBType.TextSearch));
//     test('column full text language is `tr`', () => assert.strictEqual((fulltext_column!.type as TextSearchType).language,'tr'));
//     test('column full text algorithm is `rank`', () => assert.strictEqual((fulltext_column!.type as TextSearchType).algorithm,'rank'));
//     test('column full text columns are `symbol`, `name` and `id`', () => assert.strictEqual((fulltext_column!.type as TextSearchType).columns,['symbol', 'name', 'id']));

// });

// describe.each(["schema.graphql", "schema2.graphql", "schema3.graphql"])('real world parse %s', (schema_file) => {
//     test('table count greater 0', () => {
//         const graphql_schema = readFileSync(path.join(__dirname, "samples/" + schema_file), "utf8");
//         const layout = parseLayout(graphql_schema);
//         assert.strictEqual(layout.tables.length).greaterThan(0);
//     });
// });
