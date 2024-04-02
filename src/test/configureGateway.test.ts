import * as assert from 'assert';

import { searchSubgraph } from '../service';
import { GatewayProvider } from '../providers/gateway';

test('`Uniswap` search should error when no API key is set', async () => {
  try {
    await searchSubgraph('Uniswap');
    assert.fail('Expected an error to be thrown');
  } catch (error) {
    assert.ok(error instanceof Error);
  }
});

GatewayProvider.setApiKey('mock');

test('`Uniswap` search should return at least 1 result after API key is set', async () => {
  const result = await searchSubgraph('Uniswap');
  assert.ok(result.length > 0);
});
