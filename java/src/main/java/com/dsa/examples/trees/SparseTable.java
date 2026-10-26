// Trees — Sparse table RMQ

package com.dsa.examples.trees;

/**
 * Static range minimum queries on an array.
 * Technique: Sparse table
 * Invariant: st[k][i] is min on length-2^k interval at i.
 * query: Time O(1); Space O(n log n).
 */
public class SparseTable {

    private final int[][] st;

    public SparseTable(int[] arr) {
        int n = arr.length;
        if (n == 0) {
            st = new int[0][0];
            return;
        }
        int log = (int) (Math.log(n) / Math.log(2)) + 1;
        st = new int[log][];
        st[0] = arr.clone();
        for (int k = 1; k < log; k++) {
            int half = 1 << (k - 1);
            int span = 1 << k;
            int limit = n - span + 1;
            int[] row = new int[limit];
            for (int i = 0; i < limit; i++) {
                row[i] = Math.min(st[k - 1][i], st[k - 1][i + half]);
            }
            st[k] = row;
        }
    }

    public int query(int left, int right) {
        if (left > right) {
            throw new IllegalArgumentException("invalid range");
        }
        int length = right - left + 1;
        int k = (int) (Math.log(length) / Math.log(2));
        return Math.min(st[k][left], st[k][right - (1 << k) + 1]);
    }
}
