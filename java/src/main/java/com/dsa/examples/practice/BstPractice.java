// Practice — Binary search tree

package com.dsa.examples.practice;

import com.dsa.examples.trees.BST;

import java.util.List;

public final class BstPractice {

    private final BST<Integer, String> tree = new BST<>();

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
