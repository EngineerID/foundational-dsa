const { mergeIntervals } = require('../../src/sorting/mergeIntervals');

describe('merge intervals', () => {
  test('sort and merge overlaps', () => {
    expect(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([[1, 6], [8, 10], [15, 18]]);
    expect(mergeIntervals([])).toEqual([]);
  });
});
