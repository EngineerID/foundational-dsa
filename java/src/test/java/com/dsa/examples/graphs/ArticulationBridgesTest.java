package com.dsa.examples.graphs;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class ArticulationBridgesTest {

    @Test
    void find() {
        Graph g = new Graph(5, false, false);
        g.addEdge(0, 1);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(1, 3);
        g.addEdge(3, 4);
        ArticulationBridges.Result r = ArticulationBridges.find(g);
        assertTrue(r.articulationPoints().contains(1));
        assertTrue(r.articulationPoints().contains(3));
        assertEquals(2, r.bridges().size());
    }
}
