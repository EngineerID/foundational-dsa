// Practice — MST total weight (Kruskal)

package com.dsa.examples.practice;

import com.dsa.examples.graphs.Graph;
import com.dsa.examples.graphs.KruskalMST;

public final class MstKruskalPractice {

    private MstKruskalPractice() {
    }

    public static int totalWeight(int n, int[][] edges) {
        Graph g = new Graph(n, false, true);
        for (int[] e : edges) {
            g.addEdge(e[0], e[1], e[2]);
        }
        return KruskalMST.totalWeight(g);
    }
}
