// Practice — Red-black tree insert/search

package com.dsa.examples.practice;

import com.dsa.examples.trees.RedBlackTree;

public final class RedBlackTreePractice {

    private final RedBlackTree tree = new RedBlackTree();

    public void insert(int key, int value) {
        tree.insert(key, value);
    }

    public Integer search(int key) {
        return tree.search(key);
    }
}
