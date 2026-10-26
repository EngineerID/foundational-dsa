// Practice — Bipartite graph check

package com.dsa.examples.practice;

import com.dsa.examples.graphs.BipartiteCheck;
import com.dsa.examples.graphs.Graph;

public final class BipartiteCheckPractice {

    private BipartiteCheckPractice() {
    }

    public static boolean isBipartite(int n, int[][] edges) {
        Graph g = GraphPractice.build(n, false, false, edges);
        return BipartiteCheck.isBipartite(g);
    }
}
