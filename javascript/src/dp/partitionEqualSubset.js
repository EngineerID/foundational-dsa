// Dynamic Programming — Partition equal subset sum

/**
 * Partition array into two equal-sum subsets.
 * Technique: Subset-sum DP
 * Invariant: dp[s] reachable with elements processed.
 * canPartition: Time O(n·sum); Space O(sum).
 */

function canPartition(nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  if (total % 2 !== 0) return false;
  const target = total / 2;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;
  for (const x of nums) {
    if (x < 0) throw new Error('negative value');
    for (let s = target; s >= x; s -= 1) dp[s] = dp[s] || dp[s - x];
  }
  return dp[target];
}

module.exports = { canPartition };
