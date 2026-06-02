package com.dsa.examples.graphs;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class GraphsTest {

    @Test
    void bfsUnweighted() {
        Graph g = new Graph(5, false, false);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 3);
        int[] dist = BFS.distances(g, 0);
        assertEquals(0, dist[0]);
        assertEquals(2, dist[3]);
        assertEquals(-1, dist[4]);
    }

    @Test
    void dfsAndTopo() {
        Graph dag = new Graph(4, true, false);
        dag.addEdge(0, 1);
        dag.addEdge(0, 2);
        dag.addEdge(1, 3);
        assertEquals(4, DFS.traverseRecursive(dag, 0).discovery().length);
        List<Integer> order = TopologicalSort.kahn(dag);
        assertEquals(4, order.size());
        assertEquals(0, order.get(0));
    }

    @Test
    void dijkstra() {
        Graph g = new Graph(4, true, true);
        g.addEdge(0, 1, 1);
        g.addEdge(1, 2, 2);
        g.addEdge(0, 2, 4);
        int[] dist = Dijkstra.shortestPaths(g, 0);
        assertEquals(3, dist[2]);
    }

    @Test
    void bellmanFordNegative() {
        Graph g = new Graph(3, true, true);
        g.addEdge(0, 1, 1);
        g.addEdge(1, 2, -2);
        g.addEdge(0, 2, 3);
        var result = BellmanFord.shortestPaths(g, 0);
        assertFalse(result.hasNegativeCycle());
        assertEquals(-1, result.distances()[2]);
    }

    @Test
    void floydWarshall() {
        Graph g = new Graph(3, true, true);
        g.addEdge(0, 1, 2);
        g.addEdge(1, 2, 3);
        int[][] dist = FloydWarshall.allPairsShortestPaths(g);
        assertEquals(5, dist[0][2]);
    }

    @Test
    void mstAlgorithms() {
        Graph g = new Graph(4, false, true);
        g.addEdge(0, 1, 1);
        g.addEdge(1, 2, 2);
        g.addEdge(2, 3, 3);
        g.addEdge(0, 3, 4);
        int kruskal = KruskalMST.totalWeight(g);
        int prim = PrimMST.totalWeight(g);
        int boruvka = BoruvkaMST.totalWeight(g);
        assertEquals(6, kruskal);
        assertEquals(6, prim);
        assertEquals(6, boruvka);
    }
}
