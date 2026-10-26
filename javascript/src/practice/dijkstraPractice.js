// Practice — Dijkstra shortest paths

const { shortestPaths } = require('../graphs/dijkstra');
const { Graph } = require('../graphs/graph');

function shortestDistances(n, edges, source) {
  const g = new Graph(n, true, true);
  for (const [u, v, w] of edges) {
    g.addEdge(u, v, w);
  }
  return shortestPaths(g, source);
}

module.exports = { shortestDistances };
