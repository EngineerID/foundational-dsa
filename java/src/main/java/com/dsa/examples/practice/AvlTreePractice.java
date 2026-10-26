// Practice — AVL tree insert/search

package com.dsa.examples.practice;

import com.dsa.examples.trees.AVLTree;

import java.util.List;

public final class AvlTreePractice {

    private final AVLTree<Integer, String> tree = new AVLTree<>();

    public void insert(int key, String value) {
        tree.insert(key, value);
    }

    public List<Integer> inOrderKeys() {
        return tree.inOrder();
    }

    public String search(int key) {
        return tree.search(key);
    }
}
