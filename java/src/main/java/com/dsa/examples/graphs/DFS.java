// Graphs — Depth-First Search

package com.dsa.examples.graphs;

import com.dsa.examples.linear.Stack;

import java.util.Arrays;

/**
 * DFS with discovery and finish times.
 * Time: O(V+E); Space: O(V).
 */
public final class DFS {

    /**
     * DFS traversal result.
     */
    public record DfsResult(int[] discovery, int[] finish) {
    }

    private DFS() {
    }

    /**
     * Recursive DFS from {@code source} on all reachable vertices.
     * Time: O(V+E); Space: O(V).
     */
    public static DfsResult traverseRecursive(Graph graph, int source) {
        int n = graph.vertices();
        int[] disc = new int[n];
        int[] fin = new int[n];
        Arrays.fill(disc, -1);
        Arrays.fill(fin, -1);
        int[] time = {0};
        dfsRec(graph, source, disc, fin, time);
        return new DfsResult(disc, fin);
    }

    private static void dfsRec(Graph graph, int u, int[] disc, int[] fin, int[] time) {
        disc[u] = time[0]++;
        for (Graph.Edge e : graph.neighbors(u)) {
            int v = e.to();
            if (disc[v] == -1) {
                dfsRec(graph, v, disc, fin, time);
            }
        }
        fin[u] = time[0]++;
    }

    /**
     * Iterative DFS from {@code source}.
     * Time: O(V+E); Space: O(V).
     */
    public static DfsResult traverseIterative(Graph graph, int source) {
        int n = graph.vertices();
        int[] disc = new int[n];
        int[] fin = new int[n];
        Arrays.fill(disc, -1);
        boolean[] done = new boolean[n];
        Stack<int[]> stack = new Stack<>();
        int time = 0;
        stack.push(new int[]{source, 0});
        disc[source] = time++;
        while (!stack.isEmpty()) {
            int[] frame = stack.peek();
            int u = frame[0];
            int idx = frame[1];
            if (idx < graph.neighbors(u).size()) {
                frame[1] = idx + 1;
                int v = graph.neighbors(u).get(idx).to();
                if (disc[v] == -1) {
                    disc[v] = time++;
                    stack.push(new int[]{v, 0});
                }
            } else {
                stack.pop();
                if (!done[u]) {
                    fin[u] = time++;
                    done[u] = true;
                }
            }
        }
        return new DfsResult(disc, fin);
    }
}
