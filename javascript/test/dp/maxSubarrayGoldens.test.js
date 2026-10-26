const fs = require('fs');
const path = require('path');
const { maxSubarray } = require('../../src/dp/maxSubarray');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/maximum-subarray-goldens.json'), 'utf8'),
);

describe('maximum subarray shared goldens', () => {
  for (const case_ of goldens) {
    test(JSON.stringify(case_.nums), () => {
      if (case_.expectError) {
        expect(() => maxSubarray(case_.nums)).toThrow();
        return;
      }
      expect(maxSubarray(case_.nums)).toBe(case_.expected);
    });
  }
});
