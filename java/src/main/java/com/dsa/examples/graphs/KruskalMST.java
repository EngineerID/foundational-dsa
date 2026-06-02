// Graphs — Kruskal MST

package com.dsa.examples.graphs;

import com.dsa.examples.unionfind.UnionFind;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

/**
 * Minimum spanning tree via sorted edges and union-find.
 * Technique: Kruskal's MST
 * Invariant: Selected edges form forest until connected; greedy safe for MST.
 * mstWeight: Time O(E log E); Space O(V).
 */
public final class KruskalMST {

    /**
     * MST edge record.
     */
    public record MstEdge(int from, int to, int weight) {
    }

    private KruskalMST() {
    }

    /**
     * Returns MST edges for a connected undirected weighted graph.
     * Time: O(E log E); Space: O(E).
     */
    public static List<MstEdge> mst(Graph graph) {
        List<int[]> edges = new ArrayList<>(graph.allEdges());
        edges.sort(Comparator.comparingInt(e -> e[2]));
        UnionFind uf = new UnionFind(graph.vertices());
        List<MstEdge> mst = new ArrayList<>();
        for (int[] e : edges) {
            int u = e[0];
            int v = e[1];
            if (!uf.connected(u, v)) {
                uf.union(u, v);
                mst.add(new MstEdge(u, v, e[2]));
            }
        }
        return mst;
    }

    /**
     * Returns total MST weight.
     * Time: O(E log E); Space: O(E).
     */
    public static int totalWeight(Graph graph) {
        return mst(graph).stream().mapToInt(MstEdge::weight).sum();
    }
}
