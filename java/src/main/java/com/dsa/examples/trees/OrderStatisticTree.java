// Trees — Order-Statistic Tree

package com.dsa.examples.trees;

/**
 * BST augmented with subtree sizes for rank and select.
 * Technique: Order-statistic tree augmentation
 * Invariant: size field equals 1 + left.size + right.size.
 * rank/select/insert/delete: Time O(log n); Space O(n).
 */
public class OrderStatisticTree<K extends Comparable<K>, V> {

    private BSTNode<K, V> root;

    /**
     * Inserts a key-value pair.
     * Time: O(h); Space: O(1).
     */
    public void insert(K key, V value) {
        root = insert(root, key, value);
    }

    /**
     * Returns the k-th smallest key (1-based).
     * Time: O(h); Space: O(1).
     */
    public K select(int k) {
        if (k < 1 || k > size(root)) {
            throw new IllegalArgumentException("k out of range");
        }
        return select(root, k);
    }

    /**
     * Returns the rank of {@code key} (1-based count of keys less than or equal).
     * Time: O(h); Space: O(1).
     */
    public int rank(K key) {
        return rank(root, key);
    }

    private BSTNode<K, V> insert(BSTNode<K, V> node, K key, V value) {
        if (node == null) {
            return new BSTNode<>(key, value);
        }
        int cmp = key.compareTo(node.key);
        if (cmp < 0) {
            node.left = insert(node.left, key, value);
        } else if (cmp > 0) {
            node.right = insert(node.right, key, value);
        } else {
            node.value = value;
        }
        node.subtreeSize = size(node.left) + size(node.right) + 1;
        return node;
    }

    private K select(BSTNode<K, V> node, int k) {
        int leftSize = size(node.left);
        if (k <= leftSize) {
            return select(node.left, k);
        }
        if (k == leftSize + 1) {
            return node.key;
        }
        return select(node.right, k - leftSize - 1);
    }

    private int rank(BSTNode<K, V> node, K key) {
        if (node == null) {
            return 0;
        }
        int cmp = key.compareTo(node.key);
        if (cmp < 0) {
            return rank(node.left, key);
        }
        if (cmp > 0) {
            return size(node.left) + 1 + rank(node.right, key);
        }
        return size(node.left) + 1;
    }

    private int size(BSTNode<K, V> node) {
        return node == null ? 0 : node.subtreeSize;
    }
}
