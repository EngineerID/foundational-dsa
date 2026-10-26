// Practice — Dijkstra shortest paths

package com.dsa.examples.practice;

import com.dsa.examples.graphs.Dijkstra;
import com.dsa.examples.graphs.Graph;

public final class DijkstraPractice {

    private DijkstraPractice() {
    }

    /** Directed weighted edges `[u, v, w]`; returns distance from source to each vertex. */
    public static int[] shortestDistances(int n, int[][] edges, int source) {
        Graph g = new Graph(n, true, true);
        for (int[] e : edges) {
            g.addEdge(e[0], e[1], e[2]);
        }
        return Dijkstra.shortestPaths(g, source);
    }
}
