package com.dsa.examples.graphs;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class NumberOfIslandsTest {

    @Test
    void numIslands() {
        char[][] grid = {
            {'1', '1', '0'},
            {'0', '1', '0'},
            {'0', '0', '1'},
        };
        assertEquals(2, NumberOfIslands.numIslands(grid));
        assertEquals('1', grid[0][0]);
    }
}
