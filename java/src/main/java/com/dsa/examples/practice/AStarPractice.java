// Practice — A* shortest path length

package com.dsa.examples.practice;

import com.dsa.examples.graphs.AStar;
import com.dsa.examples.graphs.Graph;

public final class AStarPractice {

    private AStarPractice() {
    }

    public static long shortestPathLength(int n, int[][] edges, int source, int goal) {
        Graph g = new Graph(n, true, true);
        for (int[] e : edges) {
            g.addEdge(e[0], e[1], e[2]);
        }
        return AStar.shortestPathLength(g, source, goal);
    }
}
