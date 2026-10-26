// Practice — Coin change

/** @param {number[]} coins @param {number} amount */
function coinChange(coins, amount) {
  if (amount === 0) {
    return 0;
  }
  const dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let a = 1; a <= amount; a += 1) {
    for (const c of coins) {
      if (c <= a) {
        dp[a] = Math.min(dp[a], dp[a - c] + 1);
      }
    }
  }
  return dp[amount] <= amount ? dp[amount] : -1;
}

module.exports = { coinChange };
