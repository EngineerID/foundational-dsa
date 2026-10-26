// Practice — Bellman-Ford shortest paths

package com.dsa.examples.practice;

import com.dsa.examples.graphs.BellmanFord;
import com.dsa.examples.graphs.Graph;

public final class BellmanFordPractice {

    private BellmanFordPractice() {
    }

    public static BellmanFord.Result shortestPaths(int n, int[][] edges, int source) {
        Graph g = new Graph(n, true, true);
        for (int[] e : edges) {
            g.addEdge(e[0], e[1], e[2]);
        }
        return BellmanFord.shortestPaths(g, source);
    }
}
