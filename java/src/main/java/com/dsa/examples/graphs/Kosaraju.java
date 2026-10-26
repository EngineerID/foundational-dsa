// Graphs — Kosaraju SCC

package com.dsa.examples.graphs;

import java.util.ArrayList;
import java.util.List;

/**
 * Strongly connected components via two-pass DFS.
 * Technique: Kosaraju
 * Invariant: Finish order on G, DFS on transpose yields SCCs.
 * stronglyConnectedComponents: Time O(V+E); Space O(V).
 */
public final class Kosaraju {

    private Kosaraju() {
    }

    public static List<List<Integer>> stronglyConnectedComponents(Graph graph) {
        int n = graph.vertices();
        boolean[] visited = new boolean[n];
        List<Integer> order = new ArrayList<>();
        for (int v = 0; v < n; v++) {
            if (!visited[v]) {
                dfs1(graph, v, visited, order);
            }
        }
        List<List<Integer>> rev = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            rev.add(new ArrayList<>());
        }
        for (int u = 0; u < n; u++) {
            for (Graph.Edge e : graph.neighbors(u)) {
                rev.get(e.to()).add(u);
            }
        }
        visited = new boolean[n];
        List<List<Integer>> comps = new ArrayList<>();
        for (int i = order.size() - 1; i >= 0; i--) {
            int v = order.get(i);
            if (!visited[v]) {
                List<Integer> c = new ArrayList<>();
                dfs2(rev, v, visited, c);
                comps.add(c);
            }
        }
        return comps;
    }

    private static void dfs1(Graph graph, int v, boolean[] visited, List<Integer> order) {
        visited[v] = true;
        for (Graph.Edge e : graph.neighbors(v)) {
            if (!visited[e.to()]) {
                dfs1(graph, e.to(), visited, order);
            }
        }
        order.add(v);
    }

    private static void dfs2(List<List<Integer>> rev, int v, boolean[] visited, List<Integer> comp) {
        visited[v] = true;
        comp.add(v);
        for (int w : rev.get(v)) {
            if (!visited[w]) {
                dfs2(rev, w, visited, comp);
            }
        }
    }
}
