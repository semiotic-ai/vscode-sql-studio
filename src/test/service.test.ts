import * as assert from 'assert';
import { searchSubgraph, searchSubgraphById } from '../service';

test('`Uniswap` search should return at least 1 result', async () => {
  const result = await searchSubgraph('Uniswap');
  assert.ok(result.length > 0);
});

test('`Substreams Uniswap V3` search with id return at least 1 result', async () => {
  const result = await searchSubgraphById('HMwbgUHTSUByt1wn939V7ZmtkLmZzSwDrQF8g735Ke7b');
  assert.ok(result !== undefined);
  assert.strictEqual(result?.displayName, 'Uniswap V3 Ethereum');
});
