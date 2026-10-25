const { LRUCache } = require('../../src/linear/lruCache');

describe('LRUCache', () => {
  test('get and put', () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1);
    cache.put(3, 3);
    expect(cache.get(2)).toBe(-1);
    expect(cache.get(3)).toBe(3);
  });

  test('invalid capacity', () => {
    expect(() => new LRUCache(0)).toThrow('capacity must be positive');
  });
});
