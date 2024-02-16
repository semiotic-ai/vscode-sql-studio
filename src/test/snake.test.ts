import * as assert from 'assert';
import { snakeCase } from '../graphtables/snake';

test('lowerUpper,2727', () => {
	assert.strictEqual(snakeCase('lowerUpperF2727'), 'lower_upper_2727');
});
test('feeGrowthGlobal0X128', () => {
	assert.strictEqual(snakeCase('feeGrowthGlobal0X128'), 'fee_growth_global_0x128');
});
