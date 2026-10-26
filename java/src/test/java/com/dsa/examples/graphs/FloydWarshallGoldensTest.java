package com.dsa.examples.graphs;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class FloydWarshallGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "floyd-warshall-goldens.json")
                .toAbsolutePath()
                .normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            Graph g = buildGraph(c);
            int[][] dist = FloydWarshall.allPairsShortestPaths(g);
            @SuppressWarnings("unchecked")
            List<List<Object>> pairs = (List<List<Object>>) c.get("pairs");
            for (List<Object> p : pairs) {
                int i = ((Number) p.get(0)).intValue();
                int j = ((Number) p.get(1)).intValue();
                int expected = ((Number) p.get(2)).intValue();
                assertEquals(expected, dist[i][j]);
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
}
