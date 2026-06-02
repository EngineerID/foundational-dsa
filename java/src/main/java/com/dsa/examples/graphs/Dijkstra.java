// Graphs — Dijkstra's Algorithm

package com.dsa.examples.graphs;

import com.dsa.examples.heaps.IndexedMinHeap;

import java.util.Arrays;

/**
 * Single-source shortest paths for non-negative weights using indexed heap decreaseKey.
 * Time: O((V+E) log V); Space: O(V).
 */
public final class Dijkstra {

    private static final int INF = Integer.MAX_VALUE / 4;

    private Dijkstra() {
    }

    /**
     * Returns shortest distances from {@code source} (INF if unreachable).
     * Time: O((V+E) log V); Space: O(V).
     */
    public static int[] shortestPaths(Graph graph, int source) {
        int n = graph.vertices();
        int[] dist = new int[n];
        Arrays.fill(dist, INF);
        dist[source] = 0;

        IndexedMinHeap heap = new IndexedMinHeap(n);
        heap.insert(source, 0);

        while (!heap.isEmpty()) {
            int u = heap.extractMin();
            for (Graph.Edge e : graph.neighbors(u)) {
                int v = e.to();
                int nd = dist[u] + e.weight();
                if (nd < dist[v]) {
                    dist[v] = nd;
                    heap.insert(v, nd);
                }
            }
        }
        return dist;
    }
}
