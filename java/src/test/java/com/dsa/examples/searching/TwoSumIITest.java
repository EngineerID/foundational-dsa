package com.dsa.examples.searching;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class TwoSumIITest {

    @Test
    void twoSumSorted() {
        assertArrayEquals(new int[] {1, 2}, TwoSumII.twoSumSorted(new int[] {2, 7, 11, 15}, 9));
        assertThrows(IllegalArgumentException.class, () -> TwoSumII.twoSumSorted(new int[] {}, 0));
    }
}
