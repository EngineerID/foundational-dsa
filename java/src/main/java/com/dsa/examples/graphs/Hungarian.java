// Graphs — Hungarian algorithm

package com.dsa.examples.graphs;

/**
 * Minimum-cost assignment on a square cost matrix.
 * Technique: Hungarian algorithm
 * Invariant: Dual variables maintain reduced-cost optimality.
 * minCost: Time O(n³); Space O(n²).
 */
public final class Hungarian {

    private Hungarian() {
    }

    public static int minCost(int[][] cost) {
        int n = cost.length;
        if (n == 0) {
            return 0;
        }
        int[] u = new int[n + 1];
        int[] v = new int[n + 1];
        int[] p = new int[n + 1];
        int[] way = new int[n + 1];
        for (int i = 1; i <= n; i++) {
            p[0] = i;
            int j0 = 0;
            double[] minv = new double[n + 1];
            boolean[] used = new boolean[n + 1];
            for (int j = 0; j <= n; j++) {
                minv[j] = Double.POSITIVE_INFINITY;
            }
            while (true) {
                used[j0] = true;
                int i0 = p[j0];
                double delta = Double.POSITIVE_INFINITY;
                int j1 = 0;
                for (int j = 1; j <= n; j++) {
                    if (!used[j]) {
                        double cur = cost[i0 - 1][j - 1] - u[i0] - v[j];
                        if (cur < minv[j]) {
                            minv[j] = cur;
                            way[j] = j0;
                        }
                        if (minv[j] < delta) {
                            delta = minv[j];
                            j1 = j;
                        }
                    }
                }
                for (int j = 0; j <= n; j++) {
                    if (used[j]) {
                        u[p[j]] += (int) delta;
                        v[j] -= (int) delta;
                    } else {
                        minv[j] -= delta;
                    }
                }
                j0 = j1;
                if (p[j0] == 0) {
                    break;
                }
            }
            while (true) {
                int j1 = way[j0];
                p[j0] = p[j1];
                j0 = j1;
                if (j0 == 0) {
                    break;
                }
            }
        }
        return -v[0];
    }
}
