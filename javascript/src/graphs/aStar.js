// Graphs — A* shortest path

/**
 * Shortest path length with nonnegative weights (heuristic h=0).
 * Technique: A* search
 * Invariant: Best-first expansion by path cost.
 * shortestPathLength: Time O(E log V); Space O(V).
 */

const { PriorityQueue } = require('../heaps/priorityQueue');

const INF = 1e18;

function shortestPathLength(graph, source, goal) {
  const n = graph.vertices();
  if (source < 0 || goal < 0 || source >= n || goal >= n) {
    throw new RangeError(String(source));
  }
  const dist = new Array(n).fill(INF);
  dist[source] = 0;
  const pq = new PriorityQueue((a, b) => {
    if (a[0] !== b[0]) return a[0] < b[0] ? -1 : 1;
    return a[1] - b[1];
  });
  pq.insert([0, source]);
  while (!pq.isEmpty()) {
    const [f, u] = pq.extractMin();
    if (u === goal) return dist[u];
    if (f > dist[u]) continue;
    for (const e of graph.neighbors(u)) {
      const nd = dist[u] + e.weight;
      if (nd < dist[e.to]) {
        dist[e.to] = nd;
        pq.insert([nd, e.to]);
      }
    }
  }
  return dist[goal] >= INF ? -1 : dist[goal];
}

module.exports = { shortestPathLength, INF };
