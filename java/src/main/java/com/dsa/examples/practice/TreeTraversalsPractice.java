// Practice — BST traversal key orders

package com.dsa.examples.practice;

import com.dsa.examples.trees.BST;
import com.dsa.examples.trees.TreeTraversals;

import java.util.List;

public final class TreeTraversalsPractice {

    private final BST<Integer, String> tree = new BST<>();

    public void insert(int key, String value) {
        tree.insert(key, value);
    }

    public List<Integer> inOrder() {
        return TreeTraversals.inOrderRecursive(tree.getRoot());
    }

    public List<Integer> preOrder() {
        return TreeTraversals.preOrderRecursive(tree.getRoot());
    }

    public List<Integer> postOrder() {
        return TreeTraversals.postOrderRecursive(tree.getRoot());
    }
}
