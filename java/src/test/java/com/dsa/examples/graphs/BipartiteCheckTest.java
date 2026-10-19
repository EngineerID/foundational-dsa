package com.dsa.examples.graphs;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class BipartiteCheckTest {

    @Test
    void isBipartite() {
        Graph ok = new Graph(4, false, false);
        ok.addEdge(0, 1);
        ok.addEdge(1, 2);
        ok.addEdge(2, 3);
        ok.addEdge(3, 0);
        assertTrue(BipartiteCheck.isBipartite(ok));

        Graph odd = new Graph(3, false, false);
        odd.addEdge(0, 1);
        odd.addEdge(1, 2);
        odd.addEdge(2, 0);
        assertFalse(BipartiteCheck.isBipartite(odd));
    }
}
