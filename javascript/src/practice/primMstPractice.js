const { totalWeight } = require('../graphs/primMst');
const { Graph } = require('../graphs/graph');

function mstTotalWeight(n, edges) {
  const g = new Graph(n, false, true);
  for (const [u, v, w] of edges) {
    g.addEdge(u, v, w);
  }
  return totalWeight(g);
}

module.exports = { mstTotalWeight };
