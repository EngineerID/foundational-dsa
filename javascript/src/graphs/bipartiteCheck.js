// Graphs — Bipartite check

/**
 * Test whether an undirected graph is 2-colorable.
 * Technique: BFS coloring
 * Invariant: Bipartite iff no odd cycle.
 * isBipartite: Time O(V+E); Space O(V).
 */

function isBipartite(graph) {
  const n = graph.vertices();
  const color = new Array(n).fill(-1);
  for (let start = 0; start < n; start += 1) {
    if (color[start] !== -1) continue;
    color[start] = 0;
    const q = [start];
    for (let qi = 0; qi < q.length; qi += 1) {
      const u = q[qi];
      for (const e of graph.neighbors(u)) {
        const v = e.to;
        if (color[v] === -1) {
          color[v] = 1 - color[u];
          q.push(v);
        } else if (color[v] === color[u]) return false;
      }
    }
  }
  return true;
}

module.exports = { isBipartite };
