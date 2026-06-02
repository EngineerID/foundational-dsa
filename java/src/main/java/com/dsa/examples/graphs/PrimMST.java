// Graphs — Prim MST

package com.dsa.examples.graphs;

import com.dsa.examples.heaps.PriorityQueue;

import java.util.Arrays;

/**
 * Minimum spanning tree via Prim's algorithm (priority queue).
 * Time: O((V+E) log V); Space: O(V).
 */
public final class PrimMST {

    private PrimMST() {
    }

    /**
     * Returns total weight of MST starting from vertex 0.
     * Time: O((V+E) log V); Space: O(V).
     */
    public static int totalWeight(Graph graph) {
        int n = graph.vertices();
        boolean[] inMst = new boolean[n];
        int[] key = new int[n];
        Arrays.fill(key, Integer.MAX_VALUE);
        key[0] = 0;
        int total = 0;

        PriorityQueue<VertexKey> pq = new PriorityQueue<>();
        pq.insert(new VertexKey(0, 0));

        while (!pq.isEmpty()) {
            VertexKey vk = pq.extractMin();
            int u = vk.vertex();
            if (inMst[u]) {
                continue;
            }
            inMst[u] = true;
            total += vk.key();
            for (Graph.Edge e : graph.neighbors(u)) {
                int v = e.to();
                if (!inMst[v] && e.weight() < key[v]) {
                    key[v] = e.weight();
                    pq.insert(new VertexKey(v, key[v]));
                }
            }
        }
        return total;
    }

    private record VertexKey(int vertex, int key) implements Comparable<VertexKey> {
        @Override
        public int compareTo(VertexKey o) {
            return Integer.compare(key, o.key);
        }
    }
}
