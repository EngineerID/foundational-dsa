// Dynamic Programming — TSP (bitmask)

/**
 * Minimum Hamiltonian cycle from city 0 (small n).
 * Technique: Bitmask DP
 * Invariant: dp[mask][i] is min cost ending at i.
 * minCost: Time O(n²2^n); Space O(n2^n).
 */

const INF = 10 ** 15;

function minCost(dist) {
  const n = dist.length;
  if (n <= 1) return 0;
  const size = 1 << n;
  const dp = Array.from({ length: size }, () => new Array(n).fill(INF));
  dp[1][0] = 0;
  for (let mask = 0; mask < size; mask += 1) {
    if (!(mask & 1)) continue;
    for (let u = 0; u < n; u += 1) {
      if (dp[mask][u] >= INF) continue;
      if (!((mask >> u) & 1)) continue;
      for (let v = 0; v < n; v += 1) {
        if (mask & (1 << v)) continue;
        const nmask = mask | (1 << v);
        const nd = dp[mask][u] + dist[u][v];
        if (nd < dp[nmask][v]) dp[nmask][v] = nd;
      }
    }
  }
  const full = size - 1;
  let best = INF;
  for (let u = 1; u < n; u += 1) {
    if (dp[full][u] < INF) best = Math.min(best, dp[full][u] + dist[u][0]);
  }
  return best < INF ? best : -1;
}

module.exports = { minCost };
