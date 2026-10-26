// Practice — Segment tree range sum

package com.dsa.examples.practice;

import com.dsa.examples.trees.SegmentTree;

public final class SegmentTreePractice {

    private final SegmentTree tree;

    public SegmentTreePractice(int[] initial) {
        tree = new SegmentTree(initial);
    }

    public int rangeSum(int left, int right) {
        return tree.rangeSum(left, right);
    }

    public void update(int index, int value) {
        tree.update(index, value);
    }
}
