// Graphs — Articulation points and bridges

/**
 * Articulation points and bridges in an undirected graph.
 * Technique: Tarjan DFS lowlink
 * Invariant: Bridge when low[v] > disc[u].
 * find: Time O(V+E); Space O(V).
 */

function find(graph) {
  const n = graph.vertices();
  let time = 0;
  const disc = new Array(n).fill(-1);
  const low = new Array(n).fill(-1);
  const parent = new Array(n).fill(-1);
  const ap = new Set();
  const bridges = [];

  function dfs(u) {
    disc[u] = low[u] = time;
    time += 1;
    let children = 0;
    for (const e of graph.neighbors(u)) {
      const v = e.to;
      if (disc[v] === -1) {
        children += 1;
        parent[v] = u;
        dfs(v);
        low[u] = Math.min(low[u], low[v]);
        if (low[v] > disc[u]) bridges.push([Math.min(u, v), Math.max(u, v)]);
        if (parent[u] === -1 && children > 1) ap.add(u);
        if (parent[u] !== -1 && low[v] >= disc[u]) ap.add(u);
      } else if (v !== parent[u]) {
        low[u] = Math.min(low[u], disc[v]);
      }
    }
  }

  for (let v = 0; v < n; v += 1) {
    if (disc[v] === -1) dfs(v);
  }
  return {
    articulationPoints: [...ap].sort((a, b) => a - b),
    bridges,
  };
}

module.exports = { find };
