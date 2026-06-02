// Graphs — Breadth-First Search

package com.dsa.examples.graphs;

import com.dsa.examples.linear.Queue;

import java.util.Arrays;

/**
 * Breadth-first traversal and unweighted shortest paths.
 * Technique: BFS
 * Invariant: Queue processes nodes in nondecreasing distance from source.
 * distances/traverse: Time O(V+E); Space O(V).
 */
public final class BFS {

    private BFS() {
    }

    /**
     * Returns distances from {@code source} to all vertices (-1 if unreachable).
     * Time: O(V+E); Space: O(V).
     */
    public static int[] distances(Graph graph, int source) {
        int n = graph.vertices();
        int[] dist = new int[n];
        Arrays.fill(dist, -1);
        boolean[] visited = new boolean[n];
        Queue<Integer> q = new Queue<>();
        dist[source] = 0;
        visited[source] = true;
        q.enqueue(source);
        while (!q.isEmpty()) {
            int u = q.dequeue();
            for (Graph.Edge e : graph.neighbors(u)) {
                int v = e.to();
                if (!visited[v]) {
                    visited[v] = true;
                    dist[v] = dist[u] + 1;
                    q.enqueue(v);
                }
            }
        }
        return dist;
    }
}
