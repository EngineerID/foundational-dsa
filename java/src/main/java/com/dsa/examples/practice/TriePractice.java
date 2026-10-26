// Practice — Trie insert / search / prefix

package com.dsa.examples.practice;

import com.dsa.examples.trees.Trie;

public final class TriePractice {

    private final Trie trie = new Trie();

    public void insert(String word) {
        trie.insert(word);
    }

    public boolean search(String word) {
        return trie.search(word);
    }

    public boolean startsWith(String prefix) {
        return trie.startsWith(prefix);
    }
}
