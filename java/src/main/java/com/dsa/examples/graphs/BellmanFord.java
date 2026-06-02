// Graphs — Bellman-Ford

package com.dsa.examples.graphs;

import java.util.Arrays;
import java.util.List;

/**
 * Single-source shortest paths with negative edges; detects negative cycles.
 * Time: O(V·E); Space: O(V).
 */
public final class BellmanFord {

    private static final int INF = Integer.MAX_VALUE / 4;

    /**
     * Result of Bellman-Ford.
     */
    public record Result(int[] distances, boolean hasNegativeCycle) {
    }

    private BellmanFord() {
    }

    /**
     * Computes shortest paths from {@code source}.
     * Time: O(V·E); Space: O(V).
     */
    public static Result shortestPaths(Graph graph, int source) {
        int n = graph.vertices();
        int[] dist = new int[n];
        Arrays.fill(dist, INF);
        dist[source] = 0;

        List<int[]> edges = graph.allEdges();
        for (int i = 0; i < n - 1; i++) {
            for (int[] e : edges) {
                int u = e[0];
                int v = e[1];
                int w = e[2];
                if (dist[u] != INF && dist[u] + w < dist[v]) {
                    dist[v] = dist[u] + w;
                }
            }
        }
        for (int[] e : edges) {
            int u = e[0];
            int v = e[1];
            int w = e[2];
            if (dist[u] != INF && dist[u] + w < dist[v]) {
                return new Result(dist, true);
            }
        }
        return new Result(dist, false);
    }
}
