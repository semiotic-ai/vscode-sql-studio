import * as assert from 'assert';
import { searchSubgraph, searchSubgraphById } from '../service';
import { GatewayProvider } from '../providers/gateway';

GatewayProvider.setApiKey('mock');

test('`Uniswap` search should return at least 1 result', async () => {
  const result = await searchSubgraph('Uniswap');
  assert.ok(result.length > 0);
});

test('`Substreams Uniswap V3` search with id return at least 1 result', async () => {
  const result = await searchSubgraphById('HUZDsRpEVP2AvzDCyzDHtdc64dyDxx8FQjzsmqSg4H3B');
  assert.ok(result !== undefined);
  assert.strictEqual(result?.displayName, 'Substreams Uniswap v3 Ethereum');
});
