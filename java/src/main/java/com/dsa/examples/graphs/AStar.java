// Graphs — A* shortest path

package com.dsa.examples.graphs;

import java.util.PriorityQueue;

/**
 * A* search with nonnegative edge weights (h=0).
 * Technique: A* (best-first search)
 * shortestPathLength: Time O(E log V); Space O(V).
 */
public final class AStar {

    private static final long INF = 1_000_000_000_000_000L;

    private AStar() {
    }

    public static long shortestPathLength(Graph graph, int source, int goal) {
        int n = graph.vertices();
        if (source < 0 || goal < 0 || source >= n || goal >= n) {
            throw new IndexOutOfBoundsException();
        }
        long[] dist = new long[n];
        for (int i = 0; i < n; i++) {
            dist[i] = INF;
        }
        dist[source] = 0;
        PriorityQueue<long[]> pq = new PriorityQueue<>((a, b) -> Long.compare(a[0], b[0]));
        pq.add(new long[] {0, source});
        while (!pq.isEmpty()) {
            long[] cur = pq.poll();
            long f = cur[0];
            int u = (int) cur[1];
            if (u == goal) {
                return dist[u];
            }
            if (f > dist[u]) {
                continue;
            }
            for (Graph.Edge e : graph.neighbors(u)) {
                long nd = dist[u] + e.weight();
                if (nd < dist[e.to()]) {
                    dist[e.to()] = nd;
                    pq.add(new long[] {nd, e.to()});
                }
            }
        }
        return dist[goal] >= INF ? -1 : dist[goal];
    }
}
