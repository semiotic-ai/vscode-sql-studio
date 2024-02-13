import { parse } from '../graphtables';
import { ScalarType, TypeKind } from '../graphtables/layout';
import { BLOCK_RANGE_COLUMN_NAME, ID_FIELD_NAME, VIRTUAL_ID_COLUMN_NAME } from '../graphtables/graph';

import assert = require('assert');
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

	test('single table parsed', () => assert(layout.tables.size === 1));

	const table = layout.tables.get('some_complex_table_erc20_name');

	test('table name is snake case', () => assert(table !== undefined));
	test('column count is 11', () => assert(table!.columns.size === 11));

	describe('vid pk column', () => {
		const column = table!.columns.get(VIRTUAL_ID_COLUMN_NAME);
		test('is defined', () => assert(column !== undefined));
		test('is primary key', () => assert(column!.isPrimary));
		test('type is `ScalarType`', () => assert(column?.type.kind === TypeKind.Scalar));
		test('db type is `bigserial`', () =>
			assert((column?.type as ScalarType).dbType === DBType.BigSerial));
		test('is not nullable', () => assert(column?.nullable === false));
	});

	describe('block range column', () => {
		const column = table!.columns.get(BLOCK_RANGE_COLUMN_NAME);
		test('is defined', () => assert(column !== undefined));
		test('is not primary key', () => assert(column!.isPrimary === false));
		test('type is `ScalarType`', () => assert(column?.type.kind === TypeKind.Scalar));
		test('db type is `int4range`', () =>
			assert((column?.type as ScalarType).dbType === DBType.Int4Range));
		test('is not nullable', () => assert(column?.nullable === false));
	});

	describe('id column', () => {
		const column = table!.columns.get(ID_FIELD_NAME);
		test('is defined', () => assert(column !== undefined));
		test('is not primary key', () => assert(column!.isPrimary === false));
		test('type is `ScalarType`', () => assert(column!.type.kind === TypeKind.Scalar));
		test('db type is `Text`', () => assert((column?.type as ScalarType).dbType === DBType.Text));
		test('is not nullable', () => assert(column?.nullable === false));
	});

	describe('nullable column', () => {
		const column = table!.columns.get('nullable_field');
		test('is defined', () => assert(column !== undefined));
		test('is nullable', () => assert(column?.nullable === true));
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


    // it


	// describe.apply()


    // .each(scalar_columns)('scalar $name column', ({ name, expected }) => {
	// 	const column = table.columns.filter((c) => c.name === name).at(0);

	// 	test('is defined', () => expect(column).toBeDefined());
	// 	test('type is `ScalarType`', () => expect(column?.type.kind).toBe(TypeKind.Scalar));
	// 	test(`db type is ${expected}`, () =>
	// 		expect((column?.type as ScalarType).dbType).toBe(expected));
	// });
});
