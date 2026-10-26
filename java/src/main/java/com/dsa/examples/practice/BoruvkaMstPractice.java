// Practice — Boruvka MST total weight

package com.dsa.examples.practice;

import com.dsa.examples.graphs.BoruvkaMST;
import com.dsa.examples.graphs.Graph;

public final class BoruvkaMstPractice {

    private BoruvkaMstPractice() {
    }

    public static int totalWeight(int n, int[][] edges) {
        Graph g = new Graph(n, false, true);
        for (int[] e : edges) {
            g.addEdge(e[0], e[1], e[2]);
        }
        return BoruvkaMST.totalWeight(g);
    }
}
