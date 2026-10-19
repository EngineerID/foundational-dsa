package com.dsa.examples.trees;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class LCABinaryLiftingTest {

    @Test
    void query() {
        int[] parent = {0, 0, 1, 1, 2};
        LCABinaryLifting lca = new LCABinaryLifting(parent);
        assertEquals(1, lca.query(2, 3));
        assertEquals(1, lca.query(4, 3));
        assertThrows(IndexOutOfBoundsException.class, () -> new LCABinaryLifting(new int[0]).query(0, 0));
    }
}
