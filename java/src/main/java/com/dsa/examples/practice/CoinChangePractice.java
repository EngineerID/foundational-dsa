// Practice — Coin change (fewest coins)

package com.dsa.examples.practice;

public final class CoinChangePractice {

    private CoinChangePractice() {
    }

    public static int minCoins(int[] coins, int amount) {
        if (amount == 0) {
            return 0;
        }
        int[] dp = new int[amount + 1];
        for (int i = 1; i <= amount; i++) {
            dp[i] = amount + 1;
        }
        dp[0] = 0;
        for (int a = 1; a <= amount; a++) {
            for (int c : coins) {
                if (c <= a) {
                    dp[a] = Math.min(dp[a], dp[a - c] + 1);
                }
            }
        }
        return dp[amount] <= amount ? dp[amount] : -1;
    }
}
