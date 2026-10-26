// Practice — Treap insert and search

package com.dsa.examples.practice;

import com.dsa.examples.trees.Treap;

public final class TreapPractice {

    private final Treap treap;

    public TreapPractice(long seed) {
        treap = new Treap(seed);
    }

    public void insert(int key, int value) {
        treap.insert(key, value);
    }

    public Integer search(int key) {
        return treap.search(key);
    }
}
