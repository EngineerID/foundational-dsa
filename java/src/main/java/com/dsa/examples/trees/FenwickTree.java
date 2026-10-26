// Trees — Fenwick Tree (Binary Indexed Tree)

package com.dsa.examples.trees;

/**
 * Prefix sums and range sums with point updates.
 * Technique: Fenwick tree (binary indexed tree)
 * Invariant: BIT stores cumulative deltas for responsible ranges.
 * add/prefixSum/rangeSum: Time O(log n); Space O(n).
 */
public class FenwickTree {

    private final int n;
    private final int[] bit;

    /**
     * Creates a tree for {@code n} elements (all zero).
     * Time: O(n); Space: O(n).
     */
    public FenwickTree(int n) {
        if (n < 0) {
            throw new IllegalArgumentException("n must be non-negative");
        }
        this.n = n;
        this.bit = new int[n + 1];
    }

    /**
     * Adds {@code delta} at {@code index}.
     * Time: O(log n); Space: O(1).
     */
    public void add(int index, int delta) {
        if (index < 0 || index >= n) {
            throw new IndexOutOfBoundsException(String.valueOf(index));
        }
        int i = index + 1;
        while (i <= n) {
            bit[i] += delta;
            i += i & -i;
        }
    }

    /**
     * Sum of {@code [0..index]} inclusive.
     * Time: O(log n); Space: O(1).
     */
    public int prefixSum(int index) {
        if (n == 0) {
            return 0;
        }
        if (index < 0 || index >= n) {
            throw new IndexOutOfBoundsException(String.valueOf(index));
        }
        int i = index + 1;
        int total = 0;
        while (i > 0) {
            total += bit[i];
            i -= i & -i;
        }
        return total;
    }

    /**
     * Inclusive range sum.
     * Time: O(log n); Space: O(1).
     */
    public int rangeSum(int left, int right) {
        if (left > right) {
            throw new IndexOutOfBoundsException(left + ", " + right);
        }
        if (right < 0 || left >= n) {
            throw new IndexOutOfBoundsException(left + ", " + right);
        }
        int leftSum = left > 0 ? prefixSum(left - 1) : 0;
        return prefixSum(right) - leftSum;
    }
}
