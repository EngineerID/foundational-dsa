const fs = require('fs');
const path = require('path');
const { twoSumSorted } = require('../../src/searching/twoSumII');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/two-sum-ii-goldens.json'), 'utf8'),
);

describe('two sum II shared goldens', () => {
  for (const case_ of goldens) {
    test(JSON.stringify({ nums: case_.nums, target: case_.target }), () => {
      if (case_.expectError) {
        expect(() => twoSumSorted(case_.nums, case_.target)).toThrow();
        return;
      }
      expect(twoSumSorted(case_.nums, case_.target)).toEqual(case_.expected);
    });
  }
});
