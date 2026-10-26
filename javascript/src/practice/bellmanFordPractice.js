const { shortestPaths } = require('../graphs/bellmanFord');
const { Graph } = require('../graphs/graph');

function bellmanFordResult(n, edges, source) {
  const g = new Graph(n, true, true);
  for (const [u, v, w] of edges) {
    g.addEdge(u, v, w);
  }
  return shortestPaths(g, source);
}

module.exports = { bellmanFordResult };
