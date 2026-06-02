// Graphs — Breadth-First Search

const { Queue } = require('../linear/queue');

function distances(graph, source) {
  const n = graph.vertices();
  const dist = new Array(n).fill(-1);
  const visited = new Array(n).fill(false);
  const q = new Queue();
  dist[source] = 0;
  visited[source] = true;
  q.enqueue(source);
  while (!q.isEmpty()) {
    const u = q.dequeue();
    for (const edge of graph.neighbors(u)) {
      const v = edge.to;
      if (!visited[v]) {
        visited[v] = true;
        dist[v] = dist[u] + 1;
        q.enqueue(v);
      }
    }
  }
  return dist;
}

module.exports = { distances };
