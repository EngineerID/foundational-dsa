// Dynamic Programming — TSP bitmask

package com.dsa.examples.dp;

/**
 * Minimum Hamiltonian cycle from city 0 (small n).
 * minCost: Time O(n^2 2^n); Space O(n 2^n).
 */
public final class TSPBitmask {

    private static final long INF = 1_000_000_000_000L;

    private TSPBitmask() {
    }

    public static long minCost(int[][] dist) {
        int n = dist.length;
        if (n <= 1) {
            return 0;
        }
        int size = 1 << n;
        long[][] dp = new long[size][n];
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < n; j++) {
                dp[i][j] = INF;
            }
        }
        dp[1][0] = 0;
        for (int mask = 0; mask < size; mask++) {
            if ((mask & 1) == 0) {
                continue;
            }
            for (int u = 0; u < n; u++) {
                if (dp[mask][u] >= INF) {
                    continue;
                }
                if (((mask >> u) & 1) == 0) {
                    continue;
                }
                for (int v = 0; v < n; v++) {
                    if ((mask & (1 << v)) != 0) {
                        continue;
                    }
                    int nmask = mask | (1 << v);
                    long nd = dp[mask][u] + dist[u][v];
                    if (nd < dp[nmask][v]) {
                        dp[nmask][v] = nd;
                    }
                }
            }
        }
        int full = size - 1;
        long best = INF;
        for (int u = 1; u < n; u++) {
            if (dp[full][u] < INF) {
                best = Math.min(best, dp[full][u] + dist[u][0]);
            }
        }
        return best < INF ? best : -1;
    }
}
