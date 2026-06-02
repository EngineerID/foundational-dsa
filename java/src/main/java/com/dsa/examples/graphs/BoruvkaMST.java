// Graphs — Boruvka MST

package com.dsa.examples.graphs;

import com.dsa.examples.unionfind.UnionFind;

import java.util.Arrays;
import java.util.List;

/**
 * Minimum spanning tree via Boruvka's algorithm.
 * Time: O(E log V); Space: O(V).
 */
public final class BoruvkaMST {

    private BoruvkaMST() {
    }

    /**
     * Returns total weight of MST.
     * Time: O(E log V); Space: O(V).
     */
    public static int totalWeight(Graph graph) {
        int n = graph.vertices();
        UnionFind uf = new UnionFind(n);
        int total = 0;
        int components = n;
        List<int[]> edges = graph.allEdges();

        while (components > 1) {
            int[] bestWeight = new int[n];
            int[] bestTo = new int[n];
            Arrays.fill(bestWeight, Integer.MAX_VALUE);
            Arrays.fill(bestTo, -1);

            for (int[] e : edges) {
                int u = e[0];
                int v = e[1];
                int w = e[2];
                int cu = uf.find(u);
                int cv = uf.find(v);
                if (cu == cv) {
                    continue;
                }
                if (w < bestWeight[cu]) {
                    bestWeight[cu] = w;
                    bestTo[cu] = v;
                }
                if (w < bestWeight[cv]) {
                    bestWeight[cv] = w;
                    bestTo[cv] = u;
                }
            }

            boolean merged = false;
            for (int c = 0; c < n; c++) {
                if (bestTo[c] >= 0) {
                    int u = c;
                    int v = bestTo[c];
                    if (!uf.connected(u, v)) {
                        uf.union(u, v);
                        total += bestWeight[c];
                        components--;
                        merged = true;
                    }
                }
            }
            if (!merged) {
                break;
            }
        }
        return total;
    }
}
