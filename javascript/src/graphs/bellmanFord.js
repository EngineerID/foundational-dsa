// Graphs — Bellman-Ford

/**
 * Single-source shortest paths with negative edges; detect negative cycles.
 * Technique: Bellman-Ford relaxation
 * Invariant: After i passes, shortest paths using <= i edges are correct.
 * shortestPaths: Time O(VE); Space O(V).
 */

const INF = Math.floor(Number.MAX_SAFE_INTEGER / 4);

function shortestPaths(graph, source) {
  const n = graph.vertices();
  const dist = new Array(n).fill(INF);
  dist[source] = 0;
  const edges = graph.allEdges();
  for (let i = 0; i < n - 1; i++) {
    for (const [u, v, w] of edges) {
      if (dist[u] !== INF && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
      }
    }
  }
  for (const [u, v, w] of edges) {
    if (dist[u] !== INF && dist[u] + w < dist[v]) {
      return { distances: dist, hasNegativeCycle: true };
    }
  }
  return { distances: dist, hasNegativeCycle: false };
}

module.exports = { shortestPaths, INF };
