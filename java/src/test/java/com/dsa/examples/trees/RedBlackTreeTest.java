package com.dsa.examples.trees;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

class RedBlackTreeTest {

    @Test
    void searchAndInsert() {
        RedBlackTree tree = new RedBlackTree();
        assertNull(tree.search(1));
        tree.insert(5, 50);
        tree.insert(3, 30);
        tree.insert(7, 70);
        assertEquals(30, tree.search(3));
        tree.insert(3, 33);
        assertEquals(33, tree.search(3));
    }
}
