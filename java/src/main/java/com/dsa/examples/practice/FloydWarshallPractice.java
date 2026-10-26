// Practice — Floyd-Warshall all-pairs shortest paths

package com.dsa.examples.practice;

import com.dsa.examples.graphs.FloydWarshall;
import com.dsa.examples.graphs.Graph;

public final class FloydWarshallPractice {

    private FloydWarshallPractice() {
    }

    public static int[][] allPairsDistances(int n, int[][] edges) {
        Graph g = GraphPractice.build(n, true, true, edges);
        return FloydWarshall.allPairsShortestPaths(g);
    }
}
