// Trees — Interval Tree

package com.dsa.examples.trees;

import java.util.ArrayList;
import java.util.List;

/**
 * Interval tree (augmented BST by low endpoint, stores maxEnd).
 * overlapSearch O(log n + k) typical.
 */
public class IntervalTree {

    private static class INode {
        Interval interval;
        int maxEnd;
        INode left;
        INode right;

        INode(Interval interval) {
            this.interval = interval;
            this.maxEnd = interval.high();
        }
    }

    private INode root;

    /**
     * Inserts an interval.
     * Time: O(h); Space: O(1).
     */
    public void insert(Interval interval) {
        root = insert(root, interval);
    }

    /**
     * Returns all intervals overlapping {@code query}.
     * Time: O(log n + k); Space: O(k).
     */
    public List<Interval> overlapSearch(Interval query) {
        List<Interval> result = new ArrayList<>();
        search(root, query, result);
        return result;
    }

    private INode insert(INode node, Interval interval) {
        if (node == null) {
            return new INode(interval);
        }
        if (interval.low() < node.interval.low()) {
            node.left = insert(node.left, interval);
        } else {
            node.right = insert(node.right, interval);
        }
        node.maxEnd = Math.max(node.maxEnd, interval.high());
        if (node.left != null) {
            node.maxEnd = Math.max(node.maxEnd, node.left.maxEnd);
        }
        if (node.right != null) {
            node.maxEnd = Math.max(node.maxEnd, node.right.maxEnd);
        }
        return node;
    }

    private void search(INode node, Interval query, List<Interval> result) {
        if (node == null || node.maxEnd < query.low()) {
            return;
        }
        if (node.left != null) {
            search(node.left, query, result);
        }
        if (node.interval.overlaps(query)) {
            result.add(node.interval);
        }
        if (node.right != null && node.interval.low() <= query.high()) {
            search(node.right, query, result);
        }
    }
}
