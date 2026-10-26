// Practice — Topological sort (Kahn)

const { Graph } = require('../graphs/graph');
const { kahn } = require('../graphs/topologicalSort');

function topologicalOrder(n, edges) {
  const g = new Graph(n, true, false);
  for (const [u, v] of edges) {
    g.addEdge(u, v);
  }
  return kahn(g);
}

module.exports = { topologicalOrder };
