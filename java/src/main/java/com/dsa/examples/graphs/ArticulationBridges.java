// Graphs — Articulation points and bridges

package com.dsa.examples.graphs;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Bridges and articulation points in undirected graphs.
 * find: Time O(V+E); Space O(V).
 */
public final class ArticulationBridges {

    public record Result(List<Integer> articulationPoints, List<int[]> bridges) {
    }

    private ArticulationBridges() {
    }

    public static Result find(Graph graph) {
        int n = graph.vertices();
        int time = 0;
        int[] disc = new int[n];
        int[] low = new int[n];
        int[] parent = new int[n];
        for (int i = 0; i < n; i++) {
            disc[i] = -1;
            parent[i] = -1;
        }
        Set<Integer> ap = new HashSet<>();
        List<int[]> bridges = new ArrayList<>();
        for (int v = 0; v < n; v++) {
            if (disc[v] == -1) {
                time = dfs(graph, v, time, disc, low, parent, ap, bridges);
            }
        }
        List<Integer> sortedAp = new ArrayList<>(ap);
        sortedAp.sort(Integer::compareTo);
        return new Result(sortedAp, bridges);
    }

    private static int dfs(
            Graph graph,
            int u,
            int time,
            int[] disc,
            int[] low,
            int[] parent,
            Set<Integer> ap,
            List<int[]> bridges) {
        disc[u] = low[u] = time++;
        int children = 0;
        for (Graph.Edge e : graph.neighbors(u)) {
            int v = e.to();
            if (disc[v] == -1) {
                children++;
                parent[v] = u;
                time = dfs(graph, v, time, disc, low, parent, ap, bridges);
                low[u] = Math.min(low[u], low[v]);
                if (low[v] > disc[u]) {
                    bridges.add(new int[] {Math.min(u, v), Math.max(u, v)});
                }
                if (parent[u] == -1 && children > 1) {
                    ap.add(u);
                }
                if (parent[u] != -1 && low[v] >= disc[u]) {
                    ap.add(u);
                }
            } else if (v != parent[u]) {
                low[u] = Math.min(low[u], disc[v]);
            }
        }
        return time;
    }
}
