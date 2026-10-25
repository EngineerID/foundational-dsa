package com.dsa.examples.graphs;

import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;

class KosarajuTest {

    @Test
    void stronglyConnectedComponents() {
        Graph g = new Graph(4, true, false);
        g.addEdge(0, 1);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(2, 3);
        List<List<Integer>> comps = Kosaraju.stronglyConnectedComponents(g);
        assertEquals(2, comps.size());
        int inLarge = 0;
        for (List<Integer> c : comps) {
            if (new HashSet<>(c).equals(Set.of(0, 1, 2))) {
                inLarge++;
            }
        }
        assertEquals(1, inLarge);
    }
}
