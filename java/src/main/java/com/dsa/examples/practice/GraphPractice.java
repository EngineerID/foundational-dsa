// Practice — Adjacency-list graph builder

package com.dsa.examples.practice;

import com.dsa.examples.graphs.Graph;

public final class GraphPractice {

    private GraphPractice() {
    }

    public static Graph build(int n, boolean directed, boolean weighted, int[][] edges) {
        Graph g = new Graph(n, directed, weighted);
        for (int[] e : edges) {
            if (e.length == 2) {
                g.addEdge(e[0], e[1]);
            } else {
                g.addEdge(e[0], e[1], e[2]);
            }
        }
        return g;
    }
}
