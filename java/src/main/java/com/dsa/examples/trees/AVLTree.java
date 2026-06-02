// Trees — AVL Tree (balanced BST)

package com.dsa.examples.trees;

/**
 * AVL tree with height balancing via rotations.
 * insert/delete/search O(log n) guaranteed.
 */
public class AVLTree<K extends Comparable<K>, V> extends BST<K, V> {

    /**
     * Inserts a key-value pair and rebalances.
     * Time: O(log n); Space: O(1).
     */
    @Override
    public void insert(K key, V value) {
        root = insert(root, key, value);
    }

    private BSTNode<K, V> insert(BSTNode<K, V> node, K key, V value) {
        if (node == null) {
            return new BSTNode<>(key, value);
        }
        int cmp = key.compareTo(node.key);
        if (cmp < 0) {
            node.left = insert(node.left, key, value);
            node.left.parent = node;
        } else if (cmp > 0) {
            node.right = insert(node.right, key, value);
            node.right.parent = node;
        } else {
            node.value = value;
            return node;
        }
        return rebalance(node);
    }

    /**
     * Deletes a key and rebalances.
     * Time: O(log n); Space: O(1).
     */
    @Override
    public void delete(K key) {
        root = delete(root, key);
    }

    private BSTNode<K, V> delete(BSTNode<K, V> node, K key) {
        if (node == null) {
            return null;
        }
        int cmp = key.compareTo(node.key);
        if (cmp < 0) {
            node.left = delete(node.left, key);
            if (node.left != null) {
                node.left.parent = node;
            }
        } else if (cmp > 0) {
            node.right = delete(node.right, key);
            if (node.right != null) {
                node.right.parent = node;
            }
        } else {
            if (node.left == null || node.right == null) {
                BSTNode<K, V> temp = node.left != null ? node.left : node.right;
                if (temp != null) {
                    temp.parent = node.parent;
                }
                return temp;
            }
            BSTNode<K, V> succ = node.right;
            while (succ.left != null) {
                succ = succ.left;
            }
            node.key = succ.key;
            node.value = succ.value;
            node.right = delete(node.right, succ.key);
            if (node.right != null) {
                node.right.parent = node;
            }
        }
        return rebalance(node);
    }

    private int height(BSTNode<K, V> node) {
        if (node == null) {
            return -1;
        }
        return 1 + Math.max(height(node.left), height(node.right));
    }

    private int balanceFactor(BSTNode<K, V> node) {
        return height(node.left) - height(node.right);
    }

    private BSTNode<K, V> rebalance(BSTNode<K, V> node) {
        int bf = balanceFactor(node);
        if (bf > 1) {
            if (balanceFactor(node.left) < 0) {
                node.left = rotateLeft(node.left);
            }
            return rotateRight(node);
        }
        if (bf < -1) {
            if (balanceFactor(node.right) > 0) {
                node.right = rotateRight(node.right);
            }
            return rotateLeft(node);
        }
        return node;
    }

    private BSTNode<K, V> rotateRight(BSTNode<K, V> y) {
        BSTNode<K, V> x = y.left;
        BSTNode<K, V> t2 = x.right;
        x.right = y;
        y.left = t2;
        x.parent = y.parent;
        y.parent = x;
        if (t2 != null) {
            t2.parent = y;
        }
        return x;
    }

    private BSTNode<K, V> rotateLeft(BSTNode<K, V> x) {
        BSTNode<K, V> y = x.right;
        BSTNode<K, V> t2 = y.left;
        y.left = x;
        x.right = t2;
        y.parent = x.parent;
        x.parent = y;
        if (t2 != null) {
            t2.parent = x;
        }
        return y;
    }
}
