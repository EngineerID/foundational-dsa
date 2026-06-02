// Trees — Traversals (recursive + iterative)

package com.dsa.examples.trees;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.function.Function;

/**
 * In-order, pre-order, post-order, and level-order tree walks.
 * Technique: DFS and BFS traversals
 * Invariant: In-order visits left, node, right.
 * Each traversal: Time O(n); Space O(h) stack or O(w) queue.
 */
public final class TreeTraversals {

    private TreeTraversals() {
    }

    /**
     * In-order recursive.
     * Time: O(n); Space: O(h).
     */
    public static <K extends Comparable<K>, V> List<K> inOrderRecursive(BSTNode<K, V> root) {
        List<K> out = new ArrayList<>();
        inOrderRec(root, out);
        return out;
    }

    /**
     * Pre-order recursive.
     * Time: O(n); Space: O(h).
     */
    public static <K extends Comparable<K>, V> List<K> preOrderRecursive(BSTNode<K, V> root) {
        List<K> out = new ArrayList<>();
        preOrderRec(root, out);
        return out;
    }

    /**
     * Post-order recursive.
     * Time: O(n); Space: O(h).
     */
    public static <K extends Comparable<K>, V> List<K> postOrderRecursive(BSTNode<K, V> root) {
        List<K> out = new ArrayList<>();
        postOrderRec(root, out);
        return out;
    }

    /**
     * In-order iterative.
     * Time: O(n); Space: O(h).
     */
    public static <K extends Comparable<K>, V> List<K> inOrderIterative(BSTNode<K, V> root) {
        List<K> out = new ArrayList<>();
        Deque<BSTNode<K, V>> stack = new ArrayDeque<>();
        BSTNode<K, V> cur = root;
        while (cur != null || !stack.isEmpty()) {
            while (cur != null) {
                stack.push(cur);
                cur = cur.left;
            }
            cur = stack.pop();
            out.add(cur.key);
            cur = cur.right;
        }
        return out;
    }

    /**
     * Pre-order iterative.
     * Time: O(n); Space: O(h).
     */
    public static <K extends Comparable<K>, V> List<K> preOrderIterative(BSTNode<K, V> root) {
        List<K> out = new ArrayList<>();
        if (root == null) {
            return out;
        }
        Deque<BSTNode<K, V>> stack = new ArrayDeque<>();
        stack.push(root);
        while (!stack.isEmpty()) {
            BSTNode<K, V> node = stack.pop();
            out.add(node.key);
            if (node.right != null) {
                stack.push(node.right);
            }
            if (node.left != null) {
                stack.push(node.left);
            }
        }
        return out;
    }

    /**
     * Post-order iterative.
     * Time: O(n); Space: O(h).
     */
    public static <K extends Comparable<K>, V> List<K> postOrderIterative(BSTNode<K, V> root) {
        List<K> out = new ArrayList<>();
        if (root == null) {
            return out;
        }
        Deque<BSTNode<K, V>> stack = new ArrayDeque<>();
        Deque<BSTNode<K, V>> outStack = new ArrayDeque<>();
        stack.push(root);
        while (!stack.isEmpty()) {
            BSTNode<K, V> node = stack.pop();
            outStack.push(node);
            if (node.left != null) {
                stack.push(node.left);
            }
            if (node.right != null) {
                stack.push(node.right);
            }
        }
        while (!outStack.isEmpty()) {
            out.add(outStack.pop().key);
        }
        return out;
    }

    /**
     * Level-order (BFS).
     * Time: O(n); Space: O(w) width.
     */
    public static <K extends Comparable<K>, V> List<K> levelOrder(BSTNode<K, V> root) {
        List<K> out = new ArrayList<>();
        if (root == null) {
            return out;
        }
        Queue<BSTNode<K, V>> q = new LinkedList<>();
        q.add(root);
        while (!q.isEmpty()) {
            BSTNode<K, V> node = q.poll();
            out.add(node.key);
            if (node.left != null) {
                q.add(node.left);
            }
            if (node.right != null) {
                q.add(node.right);
            }
        }
        return out;
    }

    private static <K extends Comparable<K>, V> void inOrderRec(BSTNode<K, V> node, List<K> out) {
        if (node == null) {
            return;
        }
        inOrderRec(node.left, out);
        out.add(node.key);
        inOrderRec(node.right, out);
    }

    private static <K extends Comparable<K>, V> void preOrderRec(BSTNode<K, V> node, List<K> out) {
        if (node == null) {
            return;
        }
        out.add(node.key);
        preOrderRec(node.left, out);
        preOrderRec(node.right, out);
    }

    private static <K extends Comparable<K>, V> void postOrderRec(BSTNode<K, V> node, List<K> out) {
        if (node == null) {
            return;
        }
        postOrderRec(node.left, out);
        postOrderRec(node.right, out);
        out.add(node.key);
    }
}
