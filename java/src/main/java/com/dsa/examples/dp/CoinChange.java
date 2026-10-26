// Dynamic Programming — Coin Change (fewest coins)

package com.dsa.examples.dp;

/**
 * Minimum coins to make an amount (unbounded supply).
 * Technique: Coin change DP
 * Invariant: dp[a] is min coins for amount a.
 * minCoins: Time O(n·amount); Space O(amount).
 */
public final class CoinChange {

    private CoinChange() {
    }

    /**
     * Fewest coins to sum to {@code amount}, or -1 if impossible.
     * Time: O(n·amount); Space: O(amount).
     */
    public static int minCoins(int[] coins, int amount) {
        if (amount < 0) {
            throw new IllegalArgumentException("amount must be non-negative");
        }
        if (amount == 0) {
            return 0;
        }
        if (coins == null || coins.length == 0) {
            return -1;
        }
        int[] dp = new int[amount + 1];
        for (int a = 1; a <= amount; a++) {
            dp[a] = amount + 1;
        }
        dp[0] = 0;
        for (int a = 1; a <= amount; a++) {
            for (int c : coins) {
                if (c <= 0) {
                    throw new IllegalArgumentException("coin must be positive");
                }
                if (c <= a && dp[a - c] + 1 < dp[a]) {
                    dp[a] = dp[a - c] + 1;
                }
            }
        }
        return dp[amount] <= amount ? dp[amount] : -1;
    }
}
