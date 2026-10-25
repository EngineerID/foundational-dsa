package com.dsa.examples.dp;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class RodCuttingTest {

    @Test
    void maxProfit() {
        assertEquals(0, RodCutting.maxProfit(new int[] {1, 5, 8}, 0));
        assertEquals(10, RodCutting.maxProfit(new int[] {2, 5, 7, 8, 10}, 4));
    }
}
