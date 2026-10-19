// Trees — Treap

package com.dsa.examples.trees;

import java.util.Random;

/**
 * Randomized BST via heap priorities on keys.
 * search/insert: Time O(log n) expected; Space O(n).
 */
public class Treap {

    private static final class Node {
        int key;
        int value;
        int prio;
        Node left;
        Node right;

        Node(int key, int value, int prio) {
            this.key = key;
            this.value = value;
            this.prio = prio;
        }
    }

    private final Random rng;
    private Node root;

    public Treap() {
        this(1);
    }

    public Treap(long seed) {
        rng = new Random(seed);
    }

    public Integer search(int key) {
        Node cur = root;
        while (cur != null) {
            if (key == cur.key) {
                return cur.value;
            }
            cur = key < cur.key ? cur.left : cur.right;
        }
        return null;
    }

    public void insert(int key, int value) {
        root = insert(root, key, value);
    }

    private Node insert(Node node, int key, int value) {
        if (node == null) {
            return new Node(key, value, rng.nextInt(1 << 30));
        }
        if (key == node.key) {
            node.value = value;
            return node;
        }
        if (key < node.key) {
            node.left = insert(node.left, key, value);
            if (node.left != null && node.left.prio > node.prio) {
                return rotateRight(node);
            }
        } else {
            node.right = insert(node.right, key, value);
            if (node.right != null && node.right.prio > node.prio) {
                return rotateLeft(node);
            }
        }
        return node;
    }

    private Node rotateLeft(Node x) {
        Node y = x.right;
        x.right = y.left;
        y.left = x;
        return y;
    }

    private Node rotateRight(Node x) {
        Node y = x.left;
        x.left = y.right;
        y.right = x;
        return y;
    }
}
