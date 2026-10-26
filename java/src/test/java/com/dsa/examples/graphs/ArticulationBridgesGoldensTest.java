package com.dsa.examples.graphs;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ArticulationBridgesGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "articulation-bridges-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            Graph g = buildGraph(c);
            ArticulationBridges.Result result = ArticulationBridges.find(g);
            @SuppressWarnings("unchecked")
            List<Object> expectedAp = (List<Object>) c.get("articulationPoints");
            assertEquals(expectedAp.stream().map(n -> ((Number) n).intValue()).toList(), result.articulationPoints());
            @SuppressWarnings("unchecked")
            List<List<Object>> expectedBr = (List<List<Object>>) c.get("bridges");
            List<int[]> bridges = result.bridges();
            assertEquals(expectedBr.size(), bridges.size());
            for (int i = 0; i < expectedBr.size(); i++) {
                assertEquals(((Number) expectedBr.get(i).get(0)).intValue(), bridges.get(i)[0]);
                assertEquals(((Number) expectedBr.get(i).get(1)).intValue(), bridges.get(i)[1]);
            }
        }
    }

    private static Graph buildGraph(Map<String, Object> c) {
        int n = ((Number) c.get("n")).intValue();
        Graph g = new Graph(n, (Boolean) c.get("directed"), (Boolean) c.get("weighted"));
        @SuppressWarnings("unchecked")
        List<List<Object>> edges = (List<List<Object>>) c.get("edges");
        for (List<Object> e : edges) {
            g.addEdge(((Number) e.get(0)).intValue(), ((Number) e.get(1)).intValue());
        }
        return g;
    }
}
