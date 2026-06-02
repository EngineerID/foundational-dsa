// Trees — Trie (prefix tree)

package com.dsa.examples.trees;

/**
 * Prefix tree for string keys with prefix search.
 * Technique: Trie (R-way tree)
 * Invariant: Path characters spell prefix to node.
 * insert/search/startsWith: Time O(L) key length; Space O(total chars).
 */
public class Trie {

    private static class Node {
        boolean end;
        Node[] children = new Node[26];
    }

    private final Node root = new Node();

    /**
     * Inserts a word.
     * Time: O(L); Space: O(L).
     */
    public void insert(String word) {
        Node cur = root;
        for (char c : word.toCharArray()) {
            int idx = c - 'a';
            if (cur.children[idx] == null) {
                cur.children[idx] = new Node();
            }
            cur = cur.children[idx];
        }
        cur.end = true;
    }

    /**
     * Returns true if the word exists.
     * Time: O(L); Space: O(1).
     */
    public boolean search(String word) {
        Node node = traverse(word, false);
        return node != null && node.end;
    }

    /**
     * Returns true if any word has the given prefix.
     * Time: O(L); Space: O(1).
     */
    public boolean startsWith(String prefix) {
        return traverse(prefix, true) != null;
    }

    private Node traverse(String s, boolean prefixOnly) {
        Node cur = root;
        for (char c : s.toCharArray()) {
            int idx = c - 'a';
            if (idx < 0 || idx >= 26) {
                return null;
            }
            if (cur.children[idx] == null) {
                return null;
            }
            cur = cur.children[idx];
        }
        return cur;
    }
}
