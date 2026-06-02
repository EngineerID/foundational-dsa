// Trees — B-Tree

package com.dsa.examples.trees;

import java.util.ArrayList;
import java.util.List;

/**
 * B-tree with minimum degree t (each node has at most 2t-1 keys).
 * search/insert O(log n).
 */
public class BTree {

    private final int minDegree;
    private Node root;

    private static class Node {
        boolean leaf;
        List<Integer> keys = new ArrayList<>();
        List<Node> children = new ArrayList<>();
    }

    /**
     * Creates a B-tree with minimum degree {@code t} (t >= 2).
     * Time: O(1); Space: O(1).
     */
    public BTree(int t) {
        if (t < 2) {
            throw new IllegalArgumentException("t must be >= 2");
        }
        this.minDegree = t;
        root = new Node();
        root.leaf = true;
    }

    /**
     * Searches for a key.
     * Time: O(log n); Space: O(1).
     */
    public boolean search(int key) {
        return search(root, key);
    }

    /**
     * Inserts a key.
     * Time: O(log n); Space: O(1).
     */
    public void insert(int key) {
        Node r = root;
        if (r.keys.size() == 2 * minDegree - 1) {
            Node newRoot = new Node();
            newRoot.leaf = false;
            newRoot.children.add(root);
            splitChild(newRoot, 0);
            root = newRoot;
        }
        insertNonFull(root, key);
    }

    private boolean search(Node node, int key) {
        int i = 0;
        while (i < node.keys.size() && key > node.keys.get(i)) {
            i++;
        }
        if (i < node.keys.size() && key == node.keys.get(i)) {
            return true;
        }
        if (node.leaf) {
            return false;
        }
        return search(node.children.get(i), key);
    }

    private void insertNonFull(Node node, int key) {
        int i = node.keys.size() - 1;
        if (node.leaf) {
            node.keys.add(key);
            while (i >= 0 && key < node.keys.get(i)) {
                node.keys.set(i + 1, node.keys.get(i));
                i--;
            }
            node.keys.set(i + 1, key);
        } else {
            while (i >= 0 && key < node.keys.get(i)) {
                i--;
            }
            i++;
            if (node.children.get(i).keys.size() == 2 * minDegree - 1) {
                splitChild(node, i);
                if (key > node.keys.get(i)) {
                    i++;
                }
            }
            insertNonFull(node.children.get(i), key);
        }
    }

    private void splitChild(Node parent, int index) {
        Node full = parent.children.get(index);
        Node newNode = new Node();
        newNode.leaf = full.leaf;
        int t = minDegree;
        for (int j = 0; j < t - 1; j++) {
            newNode.keys.add(full.keys.get(j + t));
        }
        if (!full.leaf) {
            for (int j = 0; j < t; j++) {
                newNode.children.add(full.children.get(j + t));
            }
            full.children.subList(t, full.children.size()).clear();
        }
        int mid = full.keys.get(t - 1);
        full.keys.subList(t - 1, full.keys.size()).clear();
        parent.keys.add(index, mid);
        parent.children.add(index + 1, newNode);
    }
}
