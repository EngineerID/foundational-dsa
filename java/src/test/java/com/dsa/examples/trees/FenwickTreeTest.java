package com.dsa.examples.trees;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class FenwickTreeTest {

    @Test
    void prefixAndRange() {
        FenwickTree ft = new FenwickTree(5);
        int[] values = {1, 2, 3, 4, 5};
        for (int i = 0; i < values.length; i++) {
            ft.add(i, values[i]);
        }
        assertEquals(15, ft.prefixSum(4));
        assertEquals(9, ft.rangeSum(1, 3));
    }

    @Test
    void invalid() {
        assertThrows(IllegalArgumentException.class, () -> new FenwickTree(-1));
        FenwickTree ft = new FenwickTree(2);
        assertThrows(IndexOutOfBoundsException.class, () -> ft.add(2, 1));
    }
}
