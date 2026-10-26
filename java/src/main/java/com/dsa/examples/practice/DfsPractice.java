// Practice — DFS discovery and finish times

package com.dsa.examples.practice;

import com.dsa.examples.graphs.DFS;
import com.dsa.examples.graphs.Graph;

public final class DfsPractice {

    private DfsPractice() {
    }

    public record Times(int[] discovery, int[] finish) {}

    public static Times traverse(int n, int[][] edges, int source, boolean directed) {
        Graph g = new Graph(n, directed, false);
        for (int[] e : edges) {
            g.addEdge(e[0], e[1]);
        }
        DFS.DfsResult r = DFS.traverseRecursive(g, source);
        return new Times(r.discovery(), r.finish());
    }
}
