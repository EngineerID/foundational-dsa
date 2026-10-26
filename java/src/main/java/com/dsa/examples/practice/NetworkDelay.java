// Practice — Network delay time (Dijkstra)

package com.dsa.examples.practice;

import com.dsa.examples.graphs.Dijkstra;
import com.dsa.examples.graphs.Graph;

public final class NetworkDelay {

    private static final int INF = Integer.MAX_VALUE / 4;

    private NetworkDelay() {
    }

    public static int networkDelay(int n, int[][] times, int source) {
        Graph g = new Graph(n, true, true);
        for (int[] e : times) {
            g.addEdge(e[0], e[1], e[2]);
        }
        int[] dist = Dijkstra.shortestPaths(g, source);
        int best = 0;
        for (int d : dist) {
            if (d >= INF) {
                return -1;
            }
            best = Math.max(best, d);
        }
        return best;
    }
}
