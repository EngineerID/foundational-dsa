const fs = require('fs');
const path = require('path');
const { maxProfit } = require('../../src/dp/rodCutting');

const goldens = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../tools/rod-cutting-goldens.json'), 'utf8'));

describe('rod cutting shared goldens', () => {
  for (const case_ of goldens) {
    test('profit', () => {
      expect(maxProfit(case_.prices, case_.length)).toBe(case_.expected);
    });
  }
});
