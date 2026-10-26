package com.dsa.examples.graphs;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

class DfsGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "dfs-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            int n = ((Number) c.get("n")).intValue();
            boolean directed = (Boolean) c.get("directed");
            boolean weighted = (Boolean) c.get("weighted");
            Graph g = new Graph(n, directed, weighted);
            @SuppressWarnings("unchecked")
            List<List<Object>> edges = (List<List<Object>>) c.get("edges");
            for (List<Object> e : edges) {
                if (e.size() == 2) {
                    g.addEdge(((Number) e.get(0)).intValue(), ((Number) e.get(1)).intValue(), 1);
                } else {
                    g.addEdge(
                            ((Number) e.get(0)).intValue(),
                            ((Number) e.get(1)).intValue(),
                            ((Number) e.get(2)).intValue());
                }
            }
            int source = ((Number) c.get("source")).intValue();
            DFS.DfsResult result = DFS.traverseRecursive(g, source);
            assertArrayEquals(toIntArray(c.get("discovery")), result.discovery());
            assertArrayEquals(toIntArray(c.get("finish")), result.finish());
        }
    }

    @SuppressWarnings("unchecked")
    private static int[] toIntArray(Object raw) {
        List<Number> list = (List<Number>) raw;
        return list.stream().mapToInt(Number::intValue).toArray();
    }
}
