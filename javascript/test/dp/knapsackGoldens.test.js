const fs = require('fs');
const path = require('path');
const { maxValue } = require('../../src/dp/knapsack');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/knapsack-goldens.json'), 'utf8'),
);

describe('knapsack shared goldens', () => {
  for (const { weights, values, capacity, expected } of goldens) {
    test(`capacity ${capacity}`, () => {
      expect(maxValue(weights, values, capacity)).toBe(expected);
    });
  }
});
