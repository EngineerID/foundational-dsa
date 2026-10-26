package com.dsa.examples.graphs;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class AStarGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "a-star-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            Graph g = buildGraph(c);
            int source = ((Number) c.get("source")).intValue();
            int goal = ((Number) c.get("goal")).intValue();
            assertEquals(((Number) c.get("length")).intValue(), AStar.shortestPathLength(g, source, goal));
        }
    }

    private static Graph buildGraph(Map<String, Object> c) {
        int n = ((Number) c.get("n")).intValue();
        Graph g = new Graph(n, (Boolean) c.get("directed"), (Boolean) c.get("weighted"));
        @SuppressWarnings("unchecked")
        List<List<Object>> edges = (List<List<Object>>) c.get("edges");
        for (List<Object> e : edges) {
            g.addEdge(((Number) e.get(0)).intValue(), ((Number) e.get(1)).intValue(), ((Number) e.get(2)).intValue());
        }
        return g;
    }
}
