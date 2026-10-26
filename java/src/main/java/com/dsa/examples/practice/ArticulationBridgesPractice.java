// Practice — Articulation points and bridges

package com.dsa.examples.practice;

import com.dsa.examples.graphs.ArticulationBridges;
import com.dsa.examples.graphs.Graph;

import java.util.List;

public final class ArticulationBridgesPractice {

    private ArticulationBridgesPractice() {
    }

    public record Result(List<Integer> articulationPoints, List<int[]> bridges) {}

    public static Result find(int n, int[][] edges) {
        Graph g = new Graph(n, false, false);
        for (int[] e : edges) {
            g.addEdge(e[0], e[1]);
        }
        ArticulationBridges.Result raw = ArticulationBridges.find(g);
        return new Result(raw.articulationPoints(), raw.bridges());
    }
}
