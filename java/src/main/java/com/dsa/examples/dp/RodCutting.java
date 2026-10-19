// Dynamic Programming — Rod cutting

package com.dsa.examples.dp;

/**
 * Maximum revenue cutting a rod of given length.
 * maxProfit: Time O(n·length); Space O(length).
 */
public final class RodCutting {

    private RodCutting() {
    }

    public static int maxProfit(int[] prices, int length) {
        if (length < 0) {
            throw new IllegalArgumentException("length must be non-negative");
        }
        if (length == 0) {
            return 0;
        }
        if (prices.length == 0) {
            return 0;
        }
        int[] dp = new int[length + 1];
        for (int l = 1; l <= length; l++) {
            int best = 0;
            for (int i = 0; i < prices.length; i++) {
                int seg = i + 1;
                if (seg <= l) {
                    best = Math.max(best, prices[i] + dp[l - seg]);
                }
            }
            dp[l] = best;
        }
        return dp[length];
    }
}
