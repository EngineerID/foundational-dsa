package com.dsa.examples.graphs;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class GraphGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "graph-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
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
            assertEquals(((Number) c.get("vertices")).intValue(), g.vertices());
            @SuppressWarnings("unchecked")
            Map<String, Number> counts = (Map<String, Number>) c.get("neighborCount");
            for (Map.Entry<String, Number> entry : counts.entrySet()) {
                assertEquals(entry.getValue().intValue(), g.neighbors(Integer.parseInt(entry.getKey())).size());
            }
            @SuppressWarnings("unchecked")
            Map<String, List<Number>> edgeTo = (Map<String, List<Number>>) c.get("edgeTo");
            for (Map.Entry<String, List<Number>> entry : edgeTo.entrySet()) {
                int vertex = Integer.parseInt(entry.getKey());
                List<Integer> expected = entry.getValue().stream().map(Number::intValue).toList();
                List<Integer> actual =
                        g.neighbors(vertex).stream().map(Graph.Edge::to).toList();
                assertEquals(expected, actual);
            }
        }
    }
}
