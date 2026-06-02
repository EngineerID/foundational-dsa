package com.dsa.examples.property;

import com.dsa.examples.support.PropertyHelpers;
import com.dsa.examples.unionfind.UnionFind;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.Set;

import static com.dsa.examples.support.PropertyHelpers.PROPERTY_TRIALS;
import static org.junit.jupiter.api.Assertions.assertEquals;

class PropertyUnionFindTest {

    @Test
    void connectedMatchesBfsComponents() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < PROPERTY_TRIALS; t++) {
            int n = 2 + rng.nextInt(10);
            List<int[]> edges = new ArrayList<>();
            for (int e = 0; e < rng.nextInt(n * 2); e++) {
                int u = rng.nextInt(n);
                int v = rng.nextInt(n);
                if (u != v) {
                    edges.add(new int[] {u, v});
                }
            }
            UnionFind uf = new UnionFind(n);
            for (int[] edge : edges) {
                uf.union(edge[0], edge[1]);
            }
            List<Set<Integer>> comps = PropertyHelpers.bfsComponents(n, edges);
            int[] compOf = new int[n];
            Arrays.fill(compOf, -1);
            for (int i = 0; i < comps.size(); i++) {
                for (int v : comps.get(i)) {
                    compOf[v] = i;
                }
            }
            for (int u = 0; u < n; u++) {
                for (int v = 0; v < n; v++) {
                    boolean same = compOf[u] == compOf[v] && compOf[u] >= 0;
                    assertEquals(same, uf.connected(u, v));
                }
            }
        }
    }
}
