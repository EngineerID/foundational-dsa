// Graphs — Topological Sort

package com.dsa.examples.graphs;

import com.dsa.examples.linear.Queue;

import java.util.ArrayList;
import java.util.List;

/**
 * Topological ordering of a DAG (Kahn's algorithm).
 * Time: O(V+E); Space: O(V).
 */
public final class TopologicalSort {

    private TopologicalSort() {
    }

    /**
     * Returns a topological order, or empty list if a cycle exists.
     * Time: O(V+E); Space: O(V).
     */
    public static List<Integer> kahn(Graph graph) {
        int n = graph.vertices();
        int[] indegree = new int[n];
        for (int u = 0; u < n; u++) {
            for (Graph.Edge e : graph.neighbors(u)) {
                indegree[e.to()]++;
            }
        }
        Queue<Integer> q = new Queue<>();
        for (int i = 0; i < n; i++) {
            if (indegree[i] == 0) {
                q.enqueue(i);
            }
        }
        List<Integer> order = new ArrayList<>();
        while (!q.isEmpty()) {
            int u = q.dequeue();
            order.add(u);
            for (Graph.Edge e : graph.neighbors(u)) {
                if (--indegree[e.to()] == 0) {
                    q.enqueue(e.to());
                }
            }
        }
        return order.size() == n ? order : List.of();
    }
}
