package com.dsa.examples.searching;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class QuickSelectTest {

    @Test
    void kthSmallestTypical() {
        int[] arr = {7, 10, 4, 3, 20, 15};
        assertEquals(7, QuickSelect.kthSmallest(arr, 3));
    }

    @Test
    void minAndMax() {
        int[] arr = {5, 1, 4, 2, 3};
        assertEquals(1, QuickSelect.kthSmallest(arr, 1));
        assertEquals(5, QuickSelect.kthSmallest(arr, 5));
    }

    @Test
    void singleElement() {
        assertEquals(9, QuickSelect.kthSmallest(new int[]{9}, 1));
    }

    @Test
    void duplicates() {
        assertEquals(2, QuickSelect.kthSmallest(new int[]{2, 2, 2, 1}, 2));
    }

    @Test
    void invalidK() {
        assertThrows(IllegalArgumentException.class, () -> QuickSelect.kthSmallest(new int[]{1}, 0));
        assertThrows(IllegalArgumentException.class, () -> QuickSelect.kthSmallest(new int[]{}, 1));
    }
}
