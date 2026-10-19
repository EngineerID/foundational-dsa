const { RedBlackTree } = require('../../src/trees/redBlackTree');

describe('RedBlackTree', () => {
  test('insert and search', () => {
    const t = new RedBlackTree();
    t.insert(5, 50);
    t.insert(3, 30);
    t.insert(7, 70);
    expect(t.search(5)).toBe(50);
    expect(t.search(3)).toBe(30);
    expect(t.search(9)).toBeNull();
  });
});
