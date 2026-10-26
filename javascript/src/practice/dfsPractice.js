// Practice — DFS discovery and finish times

const { traverseRecursive } = require('../graphs/dfs');
const { Graph } = require('../graphs/graph');

function traverse(n, edges, source, directed) {
  const g = new Graph(n, directed, false);
  for (const [u, v] of edges) {
    g.addEdge(u, v);
  }
  const r = traverseRecursive(g, source);
  return { discovery: r.discovery, finish: r.finish };
}

module.exports = { traverse };
