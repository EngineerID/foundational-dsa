const { BTree } = require('../../src/trees/bTree');

describe('BTree', () => {
  test('insert and search', () => {
    const btree = new BTree(3);
    for (let i = 1; i <= 20; i += 1) {
      btree.insert(i);
    }
    expect(btree.search(10)).toBe(true);
    expect(btree.search(21)).toBe(false);
  });

  test('invalid degree', () => {
    expect(() => new BTree(1)).toThrow('t must be >= 2');
  });

  test('single key', () => {
    const btree = new BTree(2);
    btree.insert(42);
    expect(btree.search(42)).toBe(true);
    expect(btree.search(41)).toBe(false);
  });

  test('duplicate insert', () => {
    const btree = new BTree(3);
    btree.insert(5);
    btree.insert(5);
    expect(btree.search(5)).toBe(true);
  });
});
