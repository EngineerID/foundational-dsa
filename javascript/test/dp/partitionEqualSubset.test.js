const { canPartition } = require('../../src/dp/partitionEqualSubset');

describe('partition equal subset', () => {
  test('can partition', () => {
    expect(canPartition([1, 5, 11, 5])).toBe(true);
    expect(canPartition([1, 2, 3, 5])).toBe(false);
  });
});
