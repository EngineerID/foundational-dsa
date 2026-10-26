// Practice — Fenwick tree prefix sums

package com.dsa.examples.practice;

import com.dsa.examples.trees.FenwickTree;

public final class FenwickTreePractice {

    private final FenwickTree tree;

    public FenwickTreePractice(int n) {
        tree = new FenwickTree(n);
    }

    public void add(int index, int delta) {
        tree.add(index, delta);
    }

    public int prefixSum(int index) {
        return tree.prefixSum(index);
    }

    public int rangeSum(int left, int right) {
        return tree.rangeSum(left, right);
    }
}
