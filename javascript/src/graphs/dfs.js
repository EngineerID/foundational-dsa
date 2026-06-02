// Graphs — Depth-First Search

/**
 * Depth-first traversal, cycle detection, and connectivity.
 * Technique: DFS
 * Invariant: Recursive/stack visit marks discovered nodes until backtrack.
 * traverse/hasCycle: Time O(V+E); Space O(V).
 */

const { Stack } = require('../linear/stack');

function traverseRecursive(graph, source) {
  const n = graph.vertices();
  const disc = new Array(n).fill(-1);
  const fin = new Array(n).fill(-1);
  const time = { value: 0 };

  function dfs(u) {
    disc[u] = time.value++;
    for (const edge of graph.neighbors(u)) {
      const v = edge.to;
      if (disc[v] === -1) {
        dfs(v);
      }
    }
    fin[u] = time.value++;
  }

  dfs(source);
  return { discovery: disc, finish: fin };
}

function traverseIterative(graph, source) {
  const n = graph.vertices();
  const disc = new Array(n).fill(-1);
  const fin = new Array(n).fill(-1);
  const done = new Array(n).fill(false);
  const stack = new Stack();
  let time = 0;
  stack.push([source, 0]);
  disc[source] = time++;
  while (!stack.isEmpty()) {
    const frame = stack.peek();
    const u = frame[0];
    const idx = frame[1];
    const neighbors = graph.neighbors(u);
    if (idx < neighbors.length) {
      frame[1] = idx + 1;
      const v = neighbors[idx].to;
      if (disc[v] === -1) {
        disc[v] = time++;
        stack.push([v, 0]);
      }
    } else {
      stack.pop();
      if (!done[u]) {
        fin[u] = time++;
        done[u] = true;
      }
    }
  }
  return { discovery: disc, finish: fin };
}

module.exports = { traverseRecursive, traverseIterative };
