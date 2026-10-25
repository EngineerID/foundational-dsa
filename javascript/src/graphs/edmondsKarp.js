// Graphs — Edmonds-Karp max flow

/**
 * Maximum s-t flow in a capacitated network.
 * Technique: Edmonds-Karp
 * Invariant: BFS augmenting paths until saturated.
 * maxFlow: Time O(VE²); Space O(V²).
 */

function maxFlow(n, edges, source, sink) {
  if (source < 0 || sink < 0 || source >= n || sink >= n) {
    throw new RangeError('vertex out of range');
  }
  const cap = Array.from({ length: n }, () => new Array(n).fill(0));
  for (const [u, v, c] of edges) {
    if (c < 0) throw new Error('negative capacity');
    cap[u][v] += c;
  }
  let flow = 0;
  while (true) {
    const parent = new Array(n).fill(-1);
    parent[source] = source;
    const q = [source];
    for (let qi = 0; qi < q.length && parent[sink] === -1; qi += 1) {
      const u = q[qi];
      for (let v = 0; v < n; v += 1) {
        if (parent[v] === -1 && cap[u][v] > 0) {
          parent[v] = u;
          q.push(v);
        }
      }
    }
    if (parent[sink] === -1) break;
    let add = 10 ** 18;
    for (let v = sink; v !== source; v = parent[v]) {
      add = Math.min(add, cap[parent[v]][v]);
    }
    for (let v = sink; v !== source; v = parent[v]) {
      const u = parent[v];
      cap[u][v] -= add;
      cap[v][u] += add;
    }
    flow += add;
  }
  return flow;
}

module.exports = { maxFlow };
