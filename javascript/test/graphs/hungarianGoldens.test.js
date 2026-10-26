const fs = require('fs');
const path = require('path');
const { minCost } = require('../../src/graphs/hungarian');

const goldens = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../tools/hungarian-goldens.json'), 'utf8'));

describe('hungarian shared goldens', () => {
  for (const case_ of goldens) {
    test('min cost', () => {
      expect(minCost(case_.cost)).toBe(case_.minCost);
    });
  }
});
