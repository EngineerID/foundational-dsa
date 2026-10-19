// Dynamic Programming — Rod cutting

/**
 * Maximum revenue cutting a rod of given length.
 * Technique: Unbounded knapsack DP
 * Invariant: dp[l] is best revenue for length l.
 * maxProfit: Time O(n·length); Space O(length).
 */

function maxProfit(prices, length) {
  if (length < 0) throw new Error('length must be non-negative');
  if (length === 0) return 0;
  if (!prices.length) return 0;
  const dp = new Array(length + 1).fill(0);
  for (let l = 1; l <= length; l += 1) {
    let best = 0;
    for (let i = 0; i < prices.length; i += 1) {
      const seg = i + 1;
      if (seg <= l) best = Math.max(best, prices[i] + dp[l - seg]);
    }
    dp[l] = best;
  }
  return dp[length];
}

module.exports = { maxProfit };
