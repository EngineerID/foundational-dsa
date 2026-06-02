// Graphs — Topological Sort

/**
 * Linear ordering of a DAG respecting all edges.
 * Technique: Kahn topological sort (BFS in-degree)
 * Invariant: Output order: for each edge u->v, pos[u] < pos[v].
 * sort: Time O(V+E); Space O(V).
 */

const { Queue } = require('../linear/queue');

function kahn(graph) {
  const n = graph.vertices();
  const indegree = new Array(n).fill(0);
  for (let u = 0; u < n; u++) {
    for (const edge of graph.neighbors(u)) {
      indegree[edge.to] += 1;
    }
  }
  const q = new Queue();
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) {
      q.enqueue(i);
    }
  }
  const order = [];
  while (!q.isEmpty()) {
    const u = q.dequeue();
    order.push(u);
    for (const edge of graph.neighbors(u)) {
      indegree[edge.to] -= 1;
      if (indegree[edge.to] === 0) {
        q.enqueue(edge.to);
      }
    }
  }
  return order.length === n ? order : [];
}

module.exports = { kahn };
