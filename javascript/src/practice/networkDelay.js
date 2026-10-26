// Practice — Network delay time (Dijkstra)

const { Graph } = require('../graphs/graph');
const { shortestPaths, INF } = require('../graphs/dijkstra');

function networkDelay(n, times, source) {
  const g = new Graph(n, true, true);
  for (const [u, v, w] of times) {
    g.addEdge(u, v, w);
  }
  const dist = shortestPaths(g, source);
  let best = 0;
  for (const d of dist) {
    if (d >= INF) return -1;
    best = Math.max(best, d);
  }
  return best;
}

module.exports = { networkDelay };
