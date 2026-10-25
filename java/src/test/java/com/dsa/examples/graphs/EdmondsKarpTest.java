package com.dsa.examples.graphs;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class EdmondsKarpTest {

    @Test
    void maxFlow() {
        int[][] edges = {{0, 1, 3}, {1, 2, 2}, {0, 2, 1}};
        assertEquals(3, EdmondsKarp.maxFlow(3, edges, 0, 2));
        assertEquals(2, EdmondsKarp.maxFlow(3, List.of(new int[] {0, 1, 3}, new int[] {1, 2, 2}), 0, 2));
        assertThrows(IndexOutOfBoundsException.class, () -> EdmondsKarp.maxFlow(2, edges, 5, 1));
    }
}
