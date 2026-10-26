// Practice — BFS unweighted shortest distances

package com.dsa.examples.practice;

import com.dsa.examples.graphs.BFS;
import com.dsa.examples.graphs.Graph;

public final class BfsPractice {

    private BfsPractice() {
    }

    /** Undirected edges {@code [u,v]}; returns distance from {@code source} (-1 if unreachable). */
    public static int[] distances(int n, int[][] edges, int source) {
        Graph g = new Graph(n, false, false);
        for (int[] e : edges) {
            g.addEdge(e[0], e[1]);
        }
        return BFS.distances(g, source);
    }
}
