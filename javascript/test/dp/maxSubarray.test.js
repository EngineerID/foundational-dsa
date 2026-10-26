const { maxSubarray } = require('../../src/dp/maxSubarray');

describe('maximum subarray', () => {
  test('kadane', () => {
    expect(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(maxSubarray([-2, -1])).toBe(-1);
    expect(() => maxSubarray([])).toThrow();
  });
});
