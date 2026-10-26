// Graphs — Network delay time

package com.dsa.examples.graphs;

/**
 * Time until all nodes receive a signal from {@code source}, or {@code -1} if any node is unreachable.
 * Technique: Dijkstra single-source shortest paths
 * Invariant: Answer is the maximum shortest-path distance from {@code source}.
 * networkDelay: Time O((V+E) log V); Space O(V).
 */
public final class NetworkDelay {

    private static final int INF = 536870911;

    private NetworkDelay() {
    }

    /**
     * Directed weighted edges {@code [u, v, w]} on nodes {@code 0 .. n-1}.
     * Time: O((V+E) log V); Space O(V).
     */
    public static int networkDelay(int n, int[][] times, int source) {
        if (n <= 0) {
            return 0;
        }
        Graph g = new Graph(n, true, true);
        if (times != null) {
            for (int[] e : times) {
                g.addEdge(e[0], e[1], e[2]);
            }
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
