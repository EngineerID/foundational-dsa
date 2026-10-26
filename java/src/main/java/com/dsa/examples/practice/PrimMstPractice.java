// Practice — Prim minimum spanning tree weight

package com.dsa.examples.practice;

import com.dsa.examples.graphs.Graph;
import com.dsa.examples.graphs.PrimMST;

public final class PrimMstPractice {

    private PrimMstPractice() {
    }

    public static int totalWeight(int n, int[][] edges) {
        Graph g = new Graph(n, false, true);
        for (int[] e : edges) {
            g.addEdge(e[0], e[1], e[2]);
        }
        return PrimMST.totalWeight(g);
    }
}
