// Dynamic Programming — Matrix chain

package com.dsa.examples.dp;

/**
 * Minimum scalar multiplications for a matrix product chain.
 * minMultiplications: Time O(n^3); Space O(n^2).
 */
public final class MatrixChain {

    private MatrixChain() {
    }

    public static long minMultiplications(int[] dimensions) {
        int n = dimensions.length - 1;
        if (n <= 0) {
            return 0;
        }
        long[][] dp = new long[n][n];
        for (int length = 2; length <= n; length++) {
            for (int i = 0; i <= n - length; i++) {
                int j = i + length - 1;
                long best = Long.MAX_VALUE / 4;
                for (int k = i; k < j; k++) {
                    long cost = dp[i][k] + dp[k + 1][j]
                            + (long) dimensions[i] * dimensions[k + 1] * dimensions[j + 1];
                    best = Math.min(best, cost);
                }
                dp[i][j] = best;
            }
        }
        return dp[0][n - 1];
    }
}
