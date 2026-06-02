package com.dsa.examples.property;

import com.dsa.examples.graphs.BFS;
import com.dsa.examples.graphs.BellmanFord;
import com.dsa.examples.graphs.BoruvkaMST;
import com.dsa.examples.graphs.Dijkstra;
import com.dsa.examples.graphs.FloydWarshall;
import com.dsa.examples.graphs.Graph;
import com.dsa.examples.graphs.KruskalMST;
import com.dsa.examples.graphs.PrimMST;
import com.dsa.examples.graphs.TopologicalSort;
import com.dsa.examples.support.PropertyHelpers;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import static com.dsa.examples.support.PropertyHelpers.PROPERTY_TRIALS;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class PropertyGraphsTest {

    private static final int INF = Integer.MAX_VALUE / 4;

    @Test
    void bfsMatchesDijkstraUnweighted() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < PROPERTY_TRIALS; t++) {
            int n = 2 + rng.nextInt(8);
            Graph g = randomConnected(rng, n, false, false);
            int src = rng.nextInt(n);
            int[] bfs = BFS.distances(g, src);
            int[] dij = Dijkstra.shortestPaths(g, src);
            for (int v = 0; v < n; v++) {
                if (bfs[v] == -1) {
                    assertEquals(INF, dij[v]);
                } else {
                    assertEquals(bfs[v], dij[v]);
                }
            }
        }
    }

    @Test
    void dijkstraMatchesBellmanFord() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < PROPERTY_TRIALS; t++) {
            int n = 2 + rng.nextInt(6);
            Graph g = new Graph(n, true, true);
            for (int i = 1; i < n; i++) {
                g.addEdge(i - 1, i, 1 + rng.nextInt(5));
            }
            int[] dij = Dijkstra.shortestPaths(g, 0);
            BellmanFord.Result bf = BellmanFord.shortestPaths(g, 0);
            assertTrue(!bf.hasNegativeCycle());
            for (int v = 0; v < n; v++) {
                assertEquals(dij[v], bf.distances()[v]);
            }
        }
    }

    @Test
    void bellmanFordDetectsNegativeCycle() {
        for (int t = 0; t < PROPERTY_TRIALS; t++) {
            Graph g = new Graph(3, true, true);
            g.addEdge(0, 1, 1);
            g.addEdge(1, 2, -2);
            g.addEdge(2, 0, -2);
            assertTrue(BellmanFord.shortestPaths(g, 0).hasNegativeCycle());
        }
    }

    @Test
    void floydMatchesDijkstra() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < PROPERTY_TRIALS; t++) {
            int n = 2 + rng.nextInt(5);
            Graph g = randomConnected(rng, n, true, false);
            int[][] fw = FloydWarshall.allPairsShortestPaths(g);
            for (int s = 0; s < n; s++) {
                int[] dij = Dijkstra.shortestPaths(g, s);
                for (int v = 0; v < n; v++) {
                    assertEquals(fw[s][v], dij[v]);
                }
            }
        }
    }

    @Test
    void mstSameWeight() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < PROPERTY_TRIALS; t++) {
            int n = 3 + rng.nextInt(6);
            Graph g = randomConnected(rng, n, true, false);
            int k = KruskalMST.totalWeight(g);
            int p = PrimMST.totalWeight(g);
            int b = BoruvkaMST.totalWeight(g);
            int brute = PropertyHelpers.bruteMstWeight(n, g.allEdges());
            assertEquals(k, p);
            assertEquals(p, b);
            assertEquals(b, brute);
        }
    }

    @Test
    void topologicalOrderValid() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < PROPERTY_TRIALS; t++) {
            int n = 2 + rng.nextInt(8);
            Graph g = new Graph(n, true, false);
            for (int u = 0; u < n; u++) {
                for (int v = u + 1; v < n; v++) {
                    if (rng.nextDouble() < 0.4) {
                        g.addEdge(u, v);
                    }
                }
            }
            List<Integer> order = TopologicalSort.kahn(g);
            if (order.isEmpty()) {
                continue;
            }
            Map<Integer, Integer> pos = new HashMap<>();
            for (int i = 0; i < order.size(); i++) {
                pos.put(order.get(i), i);
            }
            for (int u = 0; u < n; u++) {
                for (Graph.Edge e : g.neighbors(u)) {
                    if (pos.containsKey(u) && pos.containsKey(e.to())) {
                        assertTrue(pos.get(u) < pos.get(e.to()));
                    }
                }
            }
        }
    }

    private Graph randomConnected(Random rng, int n, boolean weighted, boolean directed) {
        Graph g = new Graph(n, directed, weighted);
        for (int i = 1; i < n; i++) {
            int u = rng.nextInt(i);
            int w = weighted ? 1 + rng.nextInt(9) : 1;
            g.addEdge(u, i, w);
        }
        for (int e = 0; e < n; e++) {
            int u = rng.nextInt(n);
            int v = rng.nextInt(n);
            if (u != v) {
                g.addEdge(u, v, weighted ? 1 + rng.nextInt(9) : 1);
            }
        }
        return g;
    }
}
