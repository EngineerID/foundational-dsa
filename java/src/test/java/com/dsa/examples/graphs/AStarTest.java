package com.dsa.examples.graphs;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class AStarTest {

    @Test
    void shortestPathLength() {
        Graph g = new Graph(4, true, true);
        g.addEdge(0, 1, 1);
        g.addEdge(1, 2, 2);
        g.addEdge(0, 2, 4);
        assertEquals(3, AStar.shortestPathLength(g, 0, 2));
        assertEquals(-1, AStar.shortestPathLength(g, 2, 0));
        assertThrows(IndexOutOfBoundsException.class, () -> AStar.shortestPathLength(g, 99, 0));
    }
}
