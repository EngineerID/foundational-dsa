package com.dsa.examples.graphs;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class EdmondsKarpGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "edmonds-karp-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            int n = ((Number) c.get("n")).intValue();
            int source = ((Number) c.get("source")).intValue();
            int sink = ((Number) c.get("sink")).intValue();
            int[][] edges = toEdges(c.get("edges"));
            assertEquals(((Number) c.get("maxFlow")).intValue(), EdmondsKarp.maxFlow(n, edges, source, sink));
        }
    }

    @SuppressWarnings("unchecked")
    private static int[][] toEdges(Object raw) {
        List<List<Object>> rows = (List<List<Object>>) raw;
        int[][] edges = new int[rows.size()][3];
        for (int i = 0; i < rows.size(); i++) {
            List<Object> e = rows.get(i);
            edges[i][0] = ((Number) e.get(0)).intValue();
            edges[i][1] = ((Number) e.get(1)).intValue();
            edges[i][2] = ((Number) e.get(2)).intValue();
        }
        return edges;
    }
}
