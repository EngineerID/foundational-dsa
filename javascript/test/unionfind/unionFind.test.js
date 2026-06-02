const { UnionFind } = require('../../src/unionfind/unionFind');

describe('UnionFind', () => {
  test('initial components', () => {
    const uf = new UnionFind(5);
    expect(uf.countComponents()).toBe(5);
    expect(uf.connected(0, 1)).toBe(false);
  });

  test('union and connected', () => {
    const uf = new UnionFind(5);
    uf.union(0, 1);
    uf.union(2, 3);
    expect(uf.connected(0, 1)).toBe(true);
    expect(uf.countComponents()).toBe(3);
    uf.union(1, 2);
    expect(uf.connected(0, 3)).toBe(true);
  });

  test('redundant union', () => {
    const uf = new UnionFind(3);
    uf.union(0, 1);
    uf.union(0, 1);
    expect(uf.countComponents()).toBe(2);
  });
});
