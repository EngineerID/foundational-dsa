// Trees — Binary Search Tree

package com.dsa.examples.trees;

import java.util.ArrayList;
import java.util.List;

/**
 * Binary search tree.
 * insert/delete/search/successor O(h); traversals O(n).
 */
public class BST<K extends Comparable<K>, V> {

    protected BSTNode<K, V> root;

    /**
     * Inserts or updates key-value pair.
     * Time: O(h); Space: O(1).
     */
    public void insert(K key, V value) {
        if (root == null) {
            root = new BSTNode<>(key, value);
            return;
        }
        BSTNode<K, V> cur = root;
        while (true) {
            int cmp = key.compareTo(cur.key);
            if (cmp == 0) {
                cur.value = value;
                return;
            }
            if (cmp < 0) {
                if (cur.left == null) {
                    cur.left = new BSTNode<>(key, value);
                    cur.left.parent = cur;
                    return;
                }
                cur = cur.left;
            } else {
                if (cur.right == null) {
                    cur.right = new BSTNode<>(key, value);
                    cur.right.parent = cur;
                    return;
                }
                cur = cur.right;
            }
        }
    }

    /**
     * Searches for a key; returns value or null.
     * Time: O(h); Space: O(1).
     */
    public V search(K key) {
        BSTNode<K, V> node = findNode(key);
        return node == null ? null : node.value;
    }

    /**
     * Deletes a key if present.
     * Time: O(h); Space: O(1).
     */
    public void delete(K key) {
        BSTNode<K, V> node = findNode(key);
        if (node == null) {
            return;
        }
        if (node.left != null && node.right != null) {
            BSTNode<K, V> succ = node.right;
            while (succ.left != null) {
                succ = succ.left;
            }
            node.key = succ.key;
            node.value = succ.value;
            node = succ;
        }
        BSTNode<K, V> child = node.left != null ? node.left : node.right;
        if (node.parent == null) {
            root = child;
        } else if (node == node.parent.left) {
            node.parent.left = child;
        } else {
            node.parent.right = child;
        }
        if (child != null) {
            child.parent = node.parent;
        }
    }

    /**
     * Returns the successor key, or null.
     * Time: O(h); Space: O(1).
     */
    public K successor(K key) {
        BSTNode<K, V> node = findNode(key);
        if (node == null) {
            return null;
        }
        if (node.right != null) {
            node = node.right;
            while (node.left != null) {
                node = node.left;
            }
            return node.key;
        }
        BSTNode<K, V> p = node.parent;
        while (p != null && node == p.right) {
            node = p;
            p = p.parent;
        }
        return p == null ? null : p.key;
    }

    /**
     * Returns the predecessor key, or null.
     * Time: O(h); Space: O(1).
     */
    public K predecessor(K key) {
        BSTNode<K, V> node = findNode(key);
        if (node == null) {
            return null;
        }
        if (node.left != null) {
            node = node.left;
            while (node.right != null) {
                node = node.right;
            }
            return node.key;
        }
        BSTNode<K, V> p = node.parent;
        while (p != null && node == p.left) {
            node = p;
            p = p.parent;
        }
        return p == null ? null : p.key;
    }

    /**
     * In-order traversal keys.
     * Time: O(n); Space: O(h).
     */
    public List<K> inOrder() {
        List<K> out = new ArrayList<>();
        inOrder(root, out);
        return out;
    }

    protected BSTNode<K, V> findNode(K key) {
        BSTNode<K, V> cur = root;
        while (cur != null) {
            int cmp = key.compareTo(cur.key);
            if (cmp == 0) {
                return cur;
            }
            cur = cmp < 0 ? cur.left : cur.right;
        }
        return null;
    }

    private void inOrder(BSTNode<K, V> node, List<K> out) {
        if (node == null) {
            return;
        }
        inOrder(node.left, out);
        out.add(node.key);
        inOrder(node.right, out);
    }

    public BSTNode<K, V> getRoot() {
        return root;
    }
}
