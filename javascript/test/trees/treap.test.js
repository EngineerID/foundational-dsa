const { Treap } = require('../../src/trees/treap');

describe('Treap', () => {
  test('insert and search', () => {
    const t = new Treap(1);
    t.insert(3, 30);
    t.insert(1, 10);
    expect(t.search(3)).toBe(30);
    expect(t.search(1)).toBe(10);
  });
});
