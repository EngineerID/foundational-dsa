package com.dsa.examples.dp;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class Knapsack01Test {

    @Test
    void maxValue() {
        assertEquals(22, Knapsack01.maxValue(new int[] {1, 2, 3}, new int[] {6, 10, 12}, 5));
    }

    @Test
    void invalid() {
        assertThrows(IllegalArgumentException.class,
                () -> Knapsack01.maxValue(new int[] {1}, new int[] {1, 2}, 3));
    }
}
