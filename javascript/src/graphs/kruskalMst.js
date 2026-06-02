// Graphs — Kruskal MST

const { UnionFind } = require('../unionfind/unionFind');

function mst(graph) {
  const edges = [...graph.allEdges()].sort((a, b) => a[2] - b[2]);
  const uf = new UnionFind(graph.vertices());
  const result = [];
  for (const [u, v, w] of edges) {
    if (!uf.connected(u, v)) {
      uf.union(u, v);
      result.push({ from: u, to: v, weight: w });
    }
  }
  return result;
}

function totalWeight(graph) {
  return mst(graph).reduce((sum, e) => sum + e.weight, 0);
}

module.exports = { mst, totalWeight };
