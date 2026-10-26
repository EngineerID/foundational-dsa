// Graphs — Network delay time

/**
 * Time until all nodes receive a signal from source, or -1 if any node is unreachable.
 * Technique: Dijkstra single-source shortest paths
 * Invariant: Answer is the maximum shortest-path distance from source.
 * networkDelay: Time O((V+E) log V); Space O(V).
 */

const { Graph } = require('./graph');
const { shortestPaths, INF } = require('./dijkstra');

function networkDelay(n, times, source) {
  if (n <= 0) return 0;
  const g = new Graph(n, true, true);
  if (times) {
    for (const [u, v, w] of times) {
      g.addEdge(u, v, w);
    }
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
