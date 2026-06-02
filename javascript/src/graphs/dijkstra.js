// Graphs — Dijkstra's Algorithm

const { IndexedMinHeap } = require('../heaps/indexedMinHeap');

const INF = Math.floor(Number.MAX_SAFE_INTEGER / 4);

function shortestPaths(graph, source) {
  const n = graph.vertices();
  const dist = new Array(n).fill(INF);
  dist[source] = 0;
  const heap = new IndexedMinHeap(n);
  heap.insert(source, 0);
  while (!heap.isEmpty()) {
    const u = heap.extractMin();
    for (const edge of graph.neighbors(u)) {
      const v = edge.to;
      const nd = dist[u] + edge.weight;
      if (nd < dist[v]) {
        dist[v] = nd;
        heap.insert(v, nd);
      }
    }
  }
  return dist;
}

module.exports = { shortestPaths, INF };
