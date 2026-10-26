// Graphs — Bipartite check

package com.dsa.examples.graphs;

import java.util.ArrayDeque;
import java.util.Queue;

/**
 * Test whether an undirected graph is 2-colorable.
 * Technique: BFS coloring
 * Invariant: Bipartite iff no odd cycle.
 * isBipartite: Time O(V+E); Space O(V).
 */
public final class BipartiteCheck {

    private BipartiteCheck() {
    }

    public static boolean isBipartite(Graph graph) {
        int n = graph.vertices();
        int[] color = new int[n];
        for (int i = 0; i < n; i++) {
            color[i] = -1;
        }
        for (int start = 0; start < n; start++) {
            if (color[start] != -1) {
                continue;
            }
            color[start] = 0;
            Queue<Integer> q = new ArrayDeque<>();
            q.add(start);
            while (!q.isEmpty()) {
                int u = q.poll();
                for (Graph.Edge e : graph.neighbors(u)) {
                    int v = e.to();
                    if (color[v] == -1) {
                        color[v] = 1 - color[u];
                        q.add(v);
                    } else if (color[v] == color[u]) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}
