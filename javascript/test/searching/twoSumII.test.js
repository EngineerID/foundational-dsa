const { twoSumSorted } = require('../../src/searching/twoSumII');

describe('two sum II', () => {
  test('two pointers on sorted array', () => {
    expect(twoSumSorted([2, 7, 11, 15], 9)).toEqual([1, 2]);
    expect(() => twoSumSorted([], 0)).toThrow();
  });
});
