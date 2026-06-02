package com.dsa.examples.trees;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class TreesTest {

    @Test
    void bstOperations() {
        BST<Integer, String> bst = new BST<>();
        bst.insert(5, "five");
        bst.insert(2, "two");
        bst.insert(8, "eight");
        assertEquals("five", bst.search(5));
        assertEquals(List.of(2, 5, 8), bst.inOrder());
        assertEquals(Integer.valueOf(8), bst.successor(5));
        bst.delete(5);
        assertNull(bst.search(5));
    }

    @Test
    void traversals() {
        BST<Integer, String> bst = new BST<>();
        bst.insert(4, "");
        bst.insert(2, "");
        bst.insert(6, "");
        var root = bst.getRoot();
        assertEquals(List.of(2, 4, 6), TreeTraversals.inOrderRecursive(root));
        assertEquals(List.of(4, 2, 6), TreeTraversals.preOrderRecursive(root));
        assertEquals(List.of(2, 4, 6), TreeTraversals.inOrderIterative(root));
        assertEquals(List.of(4, 2, 6), TreeTraversals.levelOrder(root));
    }

    @Test
    void avlTree() {
        AVLTree<Integer, String> avl = new AVLTree<>();
        for (int i = 1; i <= 10; i++) {
            avl.insert(i, "");
        }
        assertEquals(10, avl.inOrder().size());
    }

    @Test
    void orderStatistic() {
        OrderStatisticTree<Integer, String> ost = new OrderStatisticTree<>();
        ost.insert(5, "");
        ost.insert(1, "");
        ost.insert(3, "");
        assertEquals(3, ost.select(2));
        assertEquals(2, ost.rank(3));
    }

    @Test
    void intervalTreeAndTrie() {
        IntervalTree tree = new IntervalTree();
        tree.insert(new Interval(15, 20));
        tree.insert(new Interval(10, 12));
        assertTrue(tree.overlapSearch(new Interval(21, 22)).isEmpty());
        assertEquals(1, tree.overlapSearch(new Interval(11, 11)).size());

        Trie trie = new Trie();
        trie.insert("cat");
        assertTrue(trie.search("cat"));
        assertTrue(trie.startsWith("ca"));
        assertFalse(trie.search("ca"));
    }

    @Test
    void bTree() {
        BTree btree = new BTree(3);
        for (int i = 1; i <= 20; i++) {
            btree.insert(i);
        }
        assertTrue(btree.search(10));
        assertFalse(btree.search(21));
    }
}
