// Graphs — Prim MST

const { PriorityQueue } = require('../heaps/priorityQueue');

const INF = Math.floor(Number.MAX_SAFE_INTEGER / 4);

function totalWeight(graph) {
  const n = graph.vertices();
  const inMst = new Array(n).fill(false);
  const key = new Array(n).fill(INF);
  key[0] = 0;
  let total = 0;
  const pq = new PriorityQueue((a, b) => a.key - b.key);
  pq.insert({ vertex: 0, key: 0 });
  while (!pq.isEmpty()) {
    const vk = pq.extractMin();
    const u = vk.vertex;
    if (inMst[u]) {
      continue;
    }
    inMst[u] = true;
    total += vk.key;
    for (const edge of graph.neighbors(u)) {
      const v = edge.to;
      if (!inMst[v] && edge.weight < key[v]) {
        key[v] = edge.weight;
        pq.insert({ vertex: v, key: key[v] });
      }
    }
  }
  return total;
}

module.exports = { totalWeight };
