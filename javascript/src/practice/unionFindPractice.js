// Practice — Union–find connectivity

const { UnionFind } = require('../unionfind/unionFind');

function connected(n, unions, a, b) {
  const uf = new UnionFind(n);
  for (const [u, v] of unions) {
    uf.union(u, v);
  }
  return uf.connected(a, b);
}

module.exports = { connected };
