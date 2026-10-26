const fs = require('fs');
const path = require('path');
const { LCABinaryLifting } = require('../../src/trees/lcaBinaryLifting');

const goldens = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../tools/lca-binary-lifting-goldens.json'), 'utf8'));

describe('lca binary lifting shared goldens', () => {
  for (const case_ of goldens) {
    test('queries', () => {
      const lca = new LCABinaryLifting(case_.parent);
      for (const [u, v, expected] of case_.queries) expect(lca.query(u, v)).toBe(expected);
    });
  }
});
