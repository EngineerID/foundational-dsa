// Dynamic Programming — Matrix chain multiplication

/**
 * Minimum scalar multiplications for a matrix product chain.
 * Technique: Matrix-chain DP
 * Invariant: dp[i][j] is optimal cost for subchain i..j.
 * minMultiplications: Time O(n³); Space O(n²).
 */

function minMultiplications(dimensions) {
  const n = dimensions.length - 1;
  if (n <= 0) return 0;
  const dp = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let length = 2; length <= n; length += 1) {
    for (let i = 0; i <= n - length; i += 1) {
      const j = i + length - 1;
      let best = Infinity;
      for (let k = i; k < j; k += 1) {
        const cost = dp[i][k] + dp[k + 1][j] + dimensions[i] * dimensions[k + 1] * dimensions[j + 1];
        best = Math.min(best, cost);
      }
      dp[i][j] = best;
    }
  }
  return dp[0][n - 1];
}

module.exports = { minMultiplications };
