// Trees — LCA binary lifting

package com.dsa.examples.trees;

/**
 * Lowest common ancestor on a rooted tree.
 * Technique: Binary lifting
 * Invariant: up[k][v] is 2^k-th ancestor of v.
 * query: Time O(log n); Space O(n log n).
 */
public class LCABinaryLifting {

    private final int[][] up;
    private final int[] depth;

    public LCABinaryLifting(int[] parent) {
        int n = parent.length;
        if (n == 0) {
            up = new int[0][0];
            depth = new int[0];
            return;
        }
        depth = new int[n];
        for (int v = 0; v < n; v++) {
            int p = parent[v];
            if (p != v && p >= 0 && p < n) {
                depth[v] = depth[p] + 1;
            }
        }
        int log = Math.max(1, Integer.toBinaryString(max(depth)).length());
        up = new int[log][n];
        for (int v = 0; v < n; v++) {
            up[0][v] = v;
        }
        for (int v = 0; v < n; v++) {
            int p = parent[v];
            if (p != v && p >= 0 && p < n) {
                up[0][v] = p;
            }
        }
        for (int k = 1; k < log; k++) {
            for (int v = 0; v < n; v++) {
                up[k][v] = up[k - 1][up[k - 1][v]];
            }
        }
    }

    private static int max(int[] arr) {
        int m = 0;
        for (int x : arr) {
            m = Math.max(m, x);
        }
        return m;
    }

    public int query(int u, int v) {
        if (up.length == 0) {
            throw new IndexOutOfBoundsException();
        }
        if (depth[u] < depth[v]) {
            int t = u;
            u = v;
            v = t;
        }
        int diff = depth[u] - depth[v];
        int bit = 0;
        while (diff > 0) {
            if ((diff & 1) != 0) {
                u = up[bit][u];
            }
            diff >>= 1;
            bit++;
        }
        if (u == v) {
            return u;
        }
        for (int k = up.length - 1; k >= 0; k--) {
            if (up[k][u] != up[k][v]) {
                u = up[k][u];
                v = up[k][v];
            }
        }
        return up[0][u];
    }
}
