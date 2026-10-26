// Practice — BFS unweighted shortest distances

const { distances } = require('../graphs/bfs');
const { Graph } = require('../graphs/graph');

function bfsDistances(n, edges, source) {
  const g = new Graph(n, false, false);
  for (const [u, v] of edges) {
    g.addEdge(u, v);
  }
  return distances(g, source);
}

module.exports = { bfsDistances };
