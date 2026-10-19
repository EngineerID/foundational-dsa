// Graphs — Tarjan SCC

package com.dsa.examples.graphs;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

/**
 * Strongly connected components via Tarjan's algorithm.
 * stronglyConnectedComponents: Time O(V+E); Space O(V).
 */
public final class TarjanSCC {

    private TarjanSCC() {
    }

    public static List<List<Integer>> stronglyConnectedComponents(Graph graph) {
        int n = graph.vertices();
        int index = 0;
        int[] ids = new int[n];
        int[] low = new int[n];
        boolean[] onStack = new boolean[n];
        Deque<Integer> stack = new ArrayDeque<>();
        List<List<Integer>> result = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            ids[i] = -1;
        }
        for (int v = 0; v < n; v++) {
            if (ids[v] == -1) {
                index = dfs(graph, v, index, ids, low, onStack, stack, result);
            }
        }
        return result;
    }

    private static int dfs(
            Graph graph,
            int v,
            int index,
            int[] ids,
            int[] low,
            boolean[] onStack,
            Deque<Integer> stack,
            List<List<Integer>> result) {
        ids[v] = low[v] = index++;
        stack.push(v);
        onStack[v] = true;
        for (Graph.Edge e : graph.neighbors(v)) {
            int w = e.to();
            if (ids[w] == -1) {
                index = dfs(graph, w, index, ids, low, onStack, stack, result);
                low[v] = Math.min(low[v], low[w]);
            } else if (onStack[w]) {
                low[v] = Math.min(low[v], ids[w]);
            }
        }
        if (low[v] == ids[v]) {
            List<Integer> comp = new ArrayList<>();
            while (true) {
                int w = stack.pop();
                onStack[w] = false;
                comp.add(w);
                if (w == v) {
                    break;
                }
            }
            result.add(comp);
        }
        return index;
    }
}
