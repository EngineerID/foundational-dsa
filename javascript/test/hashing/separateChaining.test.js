const { HashTableChaining } = require('../../src/hashing/separateChaining');

describe('HashTableChaining', () => {
  test('put get remove', () => {
    const ht = new HashTableChaining();
    ht.put('a', 1);
    ht.put('b', 2);
    expect(ht.get('a')).toBe(1);
    expect(ht.remove('a')).toBe(true);
    expect(ht.get('a')).toBeNull();
    expect(ht.remove('missing')).toBe(false);
  });

  test('update existing key', () => {
    const ht = new HashTableChaining();
    ht.put(1, 'one');
    ht.put(1, 'updated');
    expect(ht.get(1)).toBe('updated');
    expect(ht.size()).toBe(1);
  });

  test('resize many inserts', () => {
    const ht = new HashTableChaining();
    for (let i = 0; i < 20; i++) {
      ht.put(i, `v${i}`);
    }
    expect(ht.size()).toBe(20);
    expect(ht.get(10)).toBe('v10');
  });
});
