// Dynamic Programming — 0/1 Knapsack

package com.dsa.examples.dp;

/**
 * 0/1 knapsack maximum value for a weight capacity.
 * Technique: 1D knapsack DP
 * Invariant: dp[w] is best value using capacity w.
 * maxValue: Time O(n·W); Space O(W).
 */
public final class Knapsack01 {

    private Knapsack01() {
    }

    /**
     * Returns max achievable value (0 if impossible).
     * Time: O(n·W); Space: O(W).
     */
    public static int maxValue(int[] weights, int[] values, int capacity) {
        if (capacity < 0) {
            throw new IllegalArgumentException("capacity must be non-negative");
        }
        if (weights == null || values == null || weights.length != values.length) {
            throw new IllegalArgumentException("weights and values length mismatch");
        }
        int[] dp = new int[capacity + 1];
        for (int i = 0; i < weights.length; i++) {
            int w = weights[i];
            int v = values[i];
            if (w < 0 || v < 0) {
                throw new IllegalArgumentException("negative weight or value");
            }
            for (int c = capacity; c >= w; c--) {
                dp[c] = Math.max(dp[c], dp[c - w] + v);
            }
        }
        return dp[capacity];
    }
}
