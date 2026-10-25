package com.dsa.examples.trees;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

class TreapTest {

    @Test
    void searchAndInsert() {
        Treap t = new Treap(42L);
        t.insert(10, 1);
        t.insert(5, 2);
        assertEquals(2, t.search(5));
        assertNull(t.search(99));
        t.insert(5, 9);
        assertEquals(9, t.search(5));
    }
}
