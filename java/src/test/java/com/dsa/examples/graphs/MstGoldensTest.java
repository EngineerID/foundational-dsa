package com.dsa.examples.graphs;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class MstGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "mst-goldens.json").toAbsolutePath().normalize();
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
            assertEquals(((Number) c.get("kruskalWeight")).intValue(), KruskalMST.totalWeight(g));
            assertEquals(((Number) c.get("kruskalEdgeCount")).intValue(), KruskalMST.mst(g).size());
            assertEquals(((Number) c.get("primWeight")).intValue(), PrimMST.totalWeight(g));
        }
    }
}
