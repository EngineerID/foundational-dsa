const fs = require('fs');
const path = require('path');
const { minCost } = require('../../src/dp/tspBitmask');

const goldens = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../tools/tsp-bitmask-goldens.json'), 'utf8'));

describe('tsp bitmask shared goldens', () => {
  for (const case_ of goldens) {
    test('tour', () => {
      expect(minCost(case_.dist)).toBe(case_.expected);
    });
  }
});
