// Practice — Kosaraju strongly connected components

package com.dsa.examples.practice;

import com.dsa.examples.graphs.Graph;
import com.dsa.examples.graphs.Kosaraju;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public final class KosarajuPractice {

    private KosarajuPractice() {
    }

    public static List<Integer> componentSizesSorted(int n, int[][] edges) {
        Graph g = GraphPractice.build(n, true, false, edges);
        List<List<Integer>> comps = Kosaraju.stronglyConnectedComponents(g);
        List<Integer> sizes = new ArrayList<>();
        for (List<Integer> comp : comps) {
            sizes.add(comp.size());
        }
        Collections.sort(sizes);
        return sizes;
    }
}
