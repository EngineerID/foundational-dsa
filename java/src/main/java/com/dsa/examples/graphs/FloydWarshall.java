// Graphs — Floyd-Warshall

package com.dsa.examples.graphs;

/**
 * All-pairs shortest paths via dynamic programming.
 * Technique: Floyd-Warshall
 * Invariant: dist[k][i][j] = shortest path using vertices {1..k} as intermediates.
 * allPairs: Time O(V³); Space O(V²).
 */
public final class FloydWarshall {

    private static final int INF = Integer.MAX_VALUE / 4;

    private FloydWarshall() {
    }

    /**
     * Returns distance matrix; dist[i][j] is shortest path length.
     * Time: O(V³); Space: O(V²).
     */
    public static int[][] allPairsShortestPaths(Graph graph) {
        int n = graph.vertices();
        int[][] dist = new int[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                dist[i][j] = i == j ? 0 : INF;
            }
        }
        for (int u = 0; u < n; u++) {
            for (Graph.Edge e : graph.neighbors(u)) {
                dist[u][e.to()] = Math.min(dist[u][e.to()], e.weight());
            }
        }
        for (int k = 0; k < n; k++) {
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    if (dist[i][k] != INF && dist[k][j] != INF) {
                        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                    }
                }
            }
        }
        return dist;
    }
}
