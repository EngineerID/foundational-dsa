package com.dsa.examples.unionfind;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UnionFindTest {

    @Test
    void unionAndFind() {
        UnionFind uf = new UnionFind(5);
        assertEquals(5, uf.countComponents());
        uf.union(0, 1);
        uf.union(2, 3);
        assertTrue(uf.connected(0, 1));
        assertFalse(uf.connected(0, 2));
        uf.union(1, 2);
        assertTrue(uf.connected(0, 3));
        assertEquals(2, uf.countComponents());
    }

    @Test
    void singleElement() {
        UnionFind uf = new UnionFind(1);
        assertTrue(uf.connected(0, 0));
    }
}
