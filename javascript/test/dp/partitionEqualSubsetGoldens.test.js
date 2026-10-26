const fs = require('fs');
const path = require('path');
const { canPartition } = require('../../src/dp/partitionEqualSubset');

const goldens = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../../../tools/partition-equal-subset-goldens.json'),
    'utf8',
  ),
);

describe('partition equal subset shared goldens', () => {
  for (const case_ of goldens) {
    test('can partition', () => {
      expect(canPartition(case_.nums)).toBe(case_.expected);
    });
  }
});
