const { BloomFilter } = require('../../src/hashing/bloomFilter');

describe('BloomFilter', () => {
  test('member and absent', () => {
    const bf = new BloomFilter(100, 0.01);
    bf.add('hello');
    expect(bf.mightContain('hello')).toBe(true);
    expect(bf.mightContain('missing')).toBe(false);
  });

  test('no false negative after many adds', () => {
    const bf = new BloomFilter(50, 0.05);
    const words = Array.from({ length: 30 }, (_, i) => `item${i}`);
    for (const w of words) {
      bf.add(w);
    }
    for (const w of words) {
      expect(bf.mightContain(w)).toBe(true);
    }
  });

  test('empty filter rejects unknown', () => {
    const bf = new BloomFilter(16, 0.1);
    expect(bf.mightContain('anything')).toBe(false);
  });
});
