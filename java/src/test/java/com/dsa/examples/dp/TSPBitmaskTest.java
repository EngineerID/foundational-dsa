package com.dsa.examples.dp;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class TSPBitmaskTest {

    @Test
    void minCost() {
        assertEquals(0, TSPBitmask.minCost(new int[][] {{0}}));
        int[][] dist = {
            {0, 10, 15, 20},
            {10, 0, 35, 25},
            {15, 35, 0, 30},
            {20, 25, 30, 0},
        };
        assertEquals(80, TSPBitmask.minCost(dist));
    }
}
