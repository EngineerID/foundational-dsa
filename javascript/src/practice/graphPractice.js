const { Graph } = require('../graphs/graph');

function buildGraph(n, directed, weighted, edges) {
  const g = new Graph(n, directed, weighted);
  for (const e of edges) {
    if (e.length === 2) {
      g.addEdge(e[0], e[1]);
    } else {
      g.addEdge(e[0], e[1], e[2]);
    }
  }
  return g;
}

module.exports = { buildGraph };
