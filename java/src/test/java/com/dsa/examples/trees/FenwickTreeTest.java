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

    @Test
    void emptySingleDuplicateLarge() {
        FenwickTree empty = new FenwickTree(0);
        assertEquals(0, empty.prefixSum(0));
        FenwickTree single = new FenwickTree(1);
        single.add(0, 4);
        assertEquals(4, single.prefixSum(0));
        FenwickTree dup = new FenwickTree(2);
        dup.add(0, 1);
        dup.add(0, 2);
        assertEquals(3, dup.prefixSum(0));
        FenwickTree large = new FenwickTree(200);
        for (int i = 0; i < 200; i++) {
            large.add(i, 1);
        }
        assertEquals(200, large.prefixSum(199));
    }
}
