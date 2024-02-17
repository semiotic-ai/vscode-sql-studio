import * as assert from 'assert';
import { snakeCase } from '../graphtables/snake';

test('lowerUpper', () => assert.strictEqual(snakeCase('lowerUpper'), 'lower_upper'));
test('lowerUpperLower', () =>
	assert.strictEqual(snakeCase('lowerUpperLower'), 'lower_upper_lower'));
test('lower0Upper', () => assert.strictEqual(snakeCase('lower0Upper'), 'lower_0_upper'));
test('lowerUpper0', () => assert.strictEqual(snakeCase('lowerUpper0'), 'lower_upper_0'));
test('feeGrowthGlobal0X128', () =>
	assert.strictEqual(snakeCase('feeGrowthGlobal0X128'), 'fee_growth_global_0x128'));
test('feeGrowthGlobal0X128Free', () =>
	assert.strictEqual(snakeCase('feeGrowthGlobal0X128Free'), 'fee_growth_global_0x128_free'));
test('feeGrowthGlobal0X128free', () =>
	assert.strictEqual(snakeCase('feeGrowthGlobal0X128free'), 'fee_growth_global_0x12_8free')); // This is a bug in the graph-node snake case library
test('feeGrowthGlobal0X128,Free', () =>
	assert.strictEqual(snakeCase('feeGrowthGlobal0X128,Free'), 'fee_growth_global_0x128_free'));
