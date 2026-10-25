package com.dsa.examples.graphs;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class HungarianTest {

    @Test
    void minCost() {
        assertEquals(0, Hungarian.minCost(new int[0][0]));
        int[][] cost = {
            {4, 1, 3},
            {2, 0, 5},
            {3, 2, 2},
        };
        assertEquals(5, Hungarian.minCost(cost));
    }
}
