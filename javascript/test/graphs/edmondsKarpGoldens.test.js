const fs = require('fs');
const path = require('path');
const { maxFlow } = require('../../src/graphs/edmondsKarp');

const goldens = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../tools/edmonds-karp-goldens.json'), 'utf8'));

describe('edmonds-karp shared goldens', () => {
  for (const case_ of goldens) {
    test('max flow', () => {
      expect(maxFlow(case_.n, case_.edges, case_.source, case_.sink)).toBe(case_.maxFlow);
    });
  }
});
