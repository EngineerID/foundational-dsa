package com.dsa.examples.graphs;

import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;

class TarjanSCCTest {

    @Test
    void stronglyConnectedComponents() {
        Graph g = new Graph(5, true, false);
        g.addEdge(0, 1);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(1, 3);
        g.addEdge(3, 4);
        List<List<Integer>> comps = TarjanSCC.stronglyConnectedComponents(g);
        assertEquals(3, comps.size());
        Set<Set<Integer>> normalized = new HashSet<>();
        for (List<Integer> c : comps) {
            normalized.add(new HashSet<>(c));
        }
        assertEquals(Set.of(0, 1, 2), findComp(normalized, 0));
        assertEquals(Set.of(3), findComp(normalized, 3));
        assertEquals(Set.of(4), findComp(normalized, 4));
    }

    private static Set<Integer> findComp(Set<Set<Integer>> comps, int v) {
        for (Set<Integer> c : comps) {
            if (c.contains(v)) {
                return c;
            }
        }
        return Set.of();
    }
}
