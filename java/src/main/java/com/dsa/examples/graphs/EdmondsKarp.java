// Graphs — Edmonds-Karp max flow

package com.dsa.examples.graphs;

import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Deque;
import java.util.List;

/**
 * Maximum flow via BFS augmenting paths (Edmonds-Karp).
 * Technique: Edmonds-Karp
 * Invariant: Residual capacities decrease until no s-t path.
 * maxFlow: Time O(VE^2); Space O(V^2).
 */
public final class EdmondsKarp {

    private EdmondsKarp() {
    }

    /**
     * Directed edges (u, v, capacity). Returns max flow value.
     * Time: O(VE^2); Space: O(V^2).
     */
    public static int maxFlow(int n, int[][] edges, int source, int sink) {
        if (source < 0 || sink < 0 || source >= n || sink >= n) {
            throw new IndexOutOfBoundsException(String.valueOf(source));
        }
        return maxFlowInternal(n, edges, source, sink);
    }

    /**
     * Same as {@link #maxFlow(int, int[][], int, int)} with a list of edge triples.
     * Time: O(VE^2); Space: O(V^2).
     */
    public static int maxFlow(int n, List<int[]> edges, int source, int sink) {
        return maxFlow(n, edges.toArray(new int[0][]), source, sink);
    }

    private static int maxFlowInternal(int n, int[][] edges, int source, int sink) {
        int[][] cap = new int[n][n];
        for (int[] e : edges) {
            if (e[2] < 0) {
                throw new IllegalArgumentException("negative capacity");
            }
            cap[e[0]][e[1]] += e[2];
        }
        int flow = 0;
        while (true) {
            int[] parent = new int[n];
            Arrays.fill(parent, -1);
            parent[source] = source;
            Deque<Integer> q = new ArrayDeque<>();
            q.add(source);
            while (!q.isEmpty() && parent[sink] == -1) {
                int u = q.poll();
                for (int v = 0; v < n; v++) {
                    if (parent[v] == -1 && cap[u][v] > 0) {
                        parent[v] = u;
                        q.add(v);
                    }
                }
            }
            if (parent[sink] == -1) {
                break;
            }
            int add = Integer.MAX_VALUE / 4;
            for (int v = sink; v != source; v = parent[v]) {
                add = Math.min(add, cap[parent[v]][v]);
            }
            for (int v = sink; v != source; v = parent[v]) {
                int u = parent[v];
                cap[u][v] -= add;
                cap[v][u] += add;
            }
            flow += add;
        }
        return flow;
    }
}
