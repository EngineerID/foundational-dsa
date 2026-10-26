// Practice — Topological sort (Kahn)

package com.dsa.examples.practice;

import com.dsa.examples.graphs.Graph;
import com.dsa.examples.graphs.TopologicalSort;

import java.util.List;

public final class TopologicalSortPractice {

    private TopologicalSortPractice() {
    }

    /** Directed edges `[u, v]`; empty list if a cycle exists. */
    public static List<Integer> order(int n, int[][] edges) {
        Graph g = new Graph(n, true, false);
        for (int[] e : edges) {
            g.addEdge(e[0], e[1]);
        }
        return TopologicalSort.kahn(g);
    }
}
