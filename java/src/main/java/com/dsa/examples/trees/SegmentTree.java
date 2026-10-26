// Trees — Segment Tree (range sum)

package com.dsa.examples.trees;

/**
 * Range aggregate queries with point updates on an array.
 * Technique: Segment tree
 * Invariant: Each node covers a disjoint index interval; parent stores sum of children.
 * update/rangeSum: Time O(log n); Space O(n).
 */
public class SegmentTree {

    private final int n;
    private final int[] tree;

    /**
     * Builds from initial values.
     * Time: O(n); Space: O(n).
     */
    public SegmentTree(int[] arr) {
        if (arr == null) {
            arr = new int[0];
        }
        this.n = arr.length;
        this.tree = new int[n == 0 ? 1 : 4 * n];
        if (n > 0) {
            build(arr, 1, 0, n - 1);
        }
    }

    /**
     * Sets {@code arr[index]} to {@code value}.
     * Time: O(log n); Space: O(1).
     */
    public void update(int index, int value) {
        if (index < 0 || index >= n) {
            throw new IndexOutOfBoundsException(String.valueOf(index));
        }
        update(1, 0, n - 1, index, value);
    }

    /**
     * Inclusive range sum on {@code [left, right]}.
     * Time: O(log n); Space: O(1).
     */
    public int rangeSum(int left, int right) {
        if (n == 0) {
            return 0;
        }
        if (left < 0 || right >= n || left > right) {
            throw new IndexOutOfBoundsException(left + ", " + right);
        }
        return query(1, 0, n - 1, left, right);
    }

    private void build(int[] arr, int node, int start, int end) {
        if (start == end) {
            tree[node] = arr[start];
            return;
        }
        int mid = (start + end) / 2;
        build(arr, node * 2, start, mid);
        build(arr, node * 2 + 1, mid + 1, end);
        tree[node] = tree[node * 2] + tree[node * 2 + 1];
    }

    private void update(int node, int start, int end, int idx, int value) {
        if (start == end) {
            tree[node] = value;
            return;
        }
        int mid = (start + end) / 2;
        if (idx <= mid) {
            update(node * 2, start, mid, idx, value);
        } else {
            update(node * 2 + 1, mid + 1, end, idx, value);
        }
        tree[node] = tree[node * 2] + tree[node * 2 + 1];
    }

    private int query(int node, int start, int end, int left, int right) {
        if (right < start || end < left) {
            return 0;
        }
        if (left <= start && end <= right) {
            return tree[node];
        }
        int mid = (start + end) / 2;
        return query(node * 2, start, mid, left, right)
                + query(node * 2 + 1, mid + 1, end, left, right);
    }
}
