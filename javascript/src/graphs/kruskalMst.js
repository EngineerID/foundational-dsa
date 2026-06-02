// Graphs — Kruskal MST

/**
 * Minimum spanning tree via sorted edges and union-find.
 * Technique: Kruskal's MST
 * Invariant: Selected edges form forest until connected; greedy safe for MST.
 * mstWeight: Time O(E log E); Space O(V).
 */

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
