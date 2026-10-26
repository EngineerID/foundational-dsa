package com.dsa.examples.graphs;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;

class BellmanFordGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "bellman-ford-goldens.json")
                .toAbsolutePath()
                .normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            Graph g = buildGraph(c);
            int source = ((Number) c.get("source")).intValue();
            BellmanFord.Result result = BellmanFord.shortestPaths(g, source);
            assertEquals(c.get("hasNegativeCycle"), result.hasNegativeCycle());
            if (c.containsKey("distances")) {
                int[] exp = intList(c.get("distances")).stream().mapToInt(Number::intValue).toArray();
                assertArrayEquals(exp, result.distances());
            }
        }
    }

    private static Graph buildGraph(Map<String, Object> c) {
        int n = ((Number) c.get("n")).intValue();
        boolean directed = (Boolean) c.get("directed");
        boolean weighted = (Boolean) c.get("weighted");
        Graph g = new Graph(n, directed, weighted);
        @SuppressWarnings("unchecked")
        List<List<Object>> edges = (List<List<Object>>) c.get("edges");
        for (List<Object> e : edges) {
            g.addEdge(
                    ((Number) e.get(0)).intValue(),
                    ((Number) e.get(1)).intValue(),
                    ((Number) e.get(2)).intValue());
        }
        return g;
    }

    @SuppressWarnings("unchecked")
    private static List<Number> intList(Object raw) {
        return (List<Number>) raw;
    }
}
