function minCoins(coins, amount) {
  if (amount < 0) throw new Error('amount must be non-negative');
  if (amount === 0) return 0;
  if (!coins.length) return -1;
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let a = 1; a <= amount; a += 1) {
    for (const c of coins) {
      if (c <= 0) throw new Error('coin must be positive');
      if (c <= a) dp[a] = Math.min(dp[a], dp[a - c] + 1);
    }
  }
  return dp[amount] <= amount ? dp[amount] : -1;
}

module.exports = { minCoins };
