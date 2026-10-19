// Graphs — Tarjan SCC

/**
 * Strongly connected components in a directed graph.
 * Technique: Tarjan SCC
 * Invariant: Lowlink identifies SCC roots on DFS stack.
 * stronglyConnectedComponents: Time O(V+E); Space O(V).
 */

function stronglyConnectedComponents(graph) {
  const n = graph.vertices();
  let index = 0;
  const stack = [];
  const onStack = new Array(n).fill(false);
  const ids = new Array(n).fill(-1);
  const low = new Array(n).fill(-1);
  const result = [];

  function dfs(v) {
    ids[v] = low[v] = index;
    index += 1;
    stack.push(v);
    onStack[v] = true;
    for (const e of graph.neighbors(v)) {
      const w = e.to;
      if (ids[w] === -1) {
        dfs(w);
        low[v] = Math.min(low[v], low[w]);
      } else if (onStack[w]) {
        low[v] = Math.min(low[v], ids[w]);
      }
    }
    if (low[v] === ids[v]) {
      const comp = [];
      while (true) {
        const w = stack.pop();
        onStack[w] = false;
        comp.push(w);
        if (w === v) break;
      }
      result.push(comp);
    }
  }

  for (let v = 0; v < n; v += 1) {
    if (ids[v] === -1) dfs(v);
  }
  return result;
}

module.exports = { stronglyConnectedComponents };
