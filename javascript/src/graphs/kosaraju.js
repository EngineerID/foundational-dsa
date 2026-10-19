// Graphs — Kosaraju SCC

/**
 * Strongly connected components via two-pass DFS.
 * Technique: Kosaraju
 * Invariant: Finish order on G, DFS on transpose yields SCCs.
 * stronglyConnectedComponents: Time O(V+E); Space O(V).
 */

function stronglyConnectedComponents(graph) {
  const n = graph.vertices();
  const visited = new Array(n).fill(false);
  const order = [];

  function dfs1(v) {
    visited[v] = true;
    for (const e of graph.neighbors(v)) {
      if (!visited[e.to]) dfs1(e.to);
    }
    order.push(v);
  }

  for (let v = 0; v < n; v += 1) {
    if (!visited[v]) dfs1(v);
  }

  const rev = Array.from({ length: n }, () => []);
  for (let u = 0; u < n; u += 1) {
    for (const e of graph.neighbors(u)) rev[e.to].push(u);
  }

  visited.fill(false);
  const comps = [];

  function dfs2(v, comp) {
    visited[v] = true;
    comp.push(v);
    for (const w of rev[v]) {
      if (!visited[w]) dfs2(w, comp);
    }
  }

  for (let i = order.length - 1; i >= 0; i -= 1) {
    const v = order[i];
    if (!visited[v]) {
      const c = [];
      dfs2(v, c);
      comps.push(c);
    }
  }
  return comps;
}

module.exports = { stronglyConnectedComponents };
