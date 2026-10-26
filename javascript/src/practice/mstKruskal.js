// Practice — MST total weight (Kruskal)

const { Graph } = require('../graphs/graph');
const { totalWeight } = require('../graphs/kruskalMst');

/** @param {number} n @param {number[][]} edges [u,v,w] */
function mstTotalWeight(n, edges) {
  const g = new Graph(n, false, true);
  for (const [u, v, w] of edges) {
    g.addEdge(u, v, w);
  }
  return totalWeight(g);
}

module.exports = { mstTotalWeight };
