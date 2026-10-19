const { sample } = require('../../src/searching/reservoirSampling');

describe('reservoir sampling', () => {
  test('sample size k', () => {
    expect(sample([1, 2, 3, 4, 5], 3, 0)).toHaveLength(3);
    expect(sample([1, 2], 5, 0)).toEqual([1, 2]);
    expect(sample([], 3, 0)).toEqual([]);
  });

  test('invalid k', () => {
    expect(() => sample([1], -1, 0)).toThrow('k must be non-negative');
  });
});
