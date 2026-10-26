const { topKFrequent } = require('../../src/heaps/topKFrequentElements');

describe('top k frequent elements', () => {
  test('min heap of size k', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
    expect(() => topKFrequent([], 1)).toThrow();
  });
});
