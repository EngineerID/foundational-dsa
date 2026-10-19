// Graphs — Hungarian algorithm (assignment)

/**
 * Minimum-cost assignment on a square cost matrix.
 * Technique: Hungarian algorithm
 * Invariant: Dual variables maintain reduced-cost optimality.
 * minCost: Time O(n³); Space O(n²).
 */

function minCost(cost) {
  const n = cost.length;
  if (n === 0) return 0;
  const u = new Array(n + 1).fill(0);
  const v = new Array(n + 1).fill(0);
  const p = new Array(n + 1).fill(0);
  const way = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i += 1) {
    p[0] = i;
    let j0 = 0;
    const minv = new Array(n + 1).fill(Infinity);
    const used = new Array(n + 1).fill(false);
    while (true) {
      used[j0] = true;
      const i0 = p[j0];
      let delta = Infinity;
      let j1 = 0;
      for (let j = 1; j <= n; j += 1) {
        if (!used[j]) {
          const cur = cost[i0 - 1][j - 1] - u[i0] - v[j];
          if (cur < minv[j]) {
            minv[j] = cur;
            way[j] = j0;
          }
          if (minv[j] < delta) {
            delta = minv[j];
            j1 = j;
          }
        }
      }
      for (let j = 0; j <= n; j += 1) {
        if (used[j]) {
          u[p[j]] += delta;
          v[j] -= delta;
        } else {
          minv[j] -= delta;
        }
      }
      j0 = j1;
      if (p[j0] === 0) break;
    }
    while (true) {
      const j1 = way[j0];
      p[j0] = p[j1];
      j0 = j1;
      if (j0 === 0) break;
    }
  }
  return -v[0];
}

module.exports = { minCost };
