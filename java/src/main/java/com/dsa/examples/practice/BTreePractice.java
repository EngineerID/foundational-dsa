// Practice — B-tree insert and search

package com.dsa.examples.practice;

import com.dsa.examples.trees.BTree;

public final class BTreePractice {

    private final BTree tree;

    public BTreePractice(int t) {
        tree = new BTree(t);
    }

    public void insert(int key) {
        tree.insert(key);
    }

    public boolean search(int key) {
        return tree.search(key);
    }
}
