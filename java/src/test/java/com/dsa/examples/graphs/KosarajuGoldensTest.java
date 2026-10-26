package com.dsa.examples.graphs;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class KosarajuGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "kosaraju-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            Graph g = buildGraph(c);
            List<List<Integer>> comps = Kosaraju.stronglyConnectedComponents(g);
            assertEquals(((Number) c.get("componentCount")).intValue(), comps.size());
            List<Integer> sizes = new ArrayList<>();
            for (List<Integer> comp : comps) {
                sizes.add(comp.size());
            }
            Collections.sort(sizes);
            @SuppressWarnings("unchecked")
            List<Object> expected = (List<Object>) c.get("componentSizes");
            assertEquals(expected.stream().map(n -> ((Number) n).intValue()).toList(), sizes);
        }
    }

    private static Graph buildGraph(Map<String, Object> c) {
        int n = ((Number) c.get("n")).intValue();
        Graph g = new Graph(n, (Boolean) c.get("directed"), (Boolean) c.get("weighted"));
        @SuppressWarnings("unchecked")
        List<List<Object>> edges = (List<List<Object>>) c.get("edges");
        for (List<Object> e : edges) {
            if (e.size() == 2) {
                g.addEdge(((Number) e.get(0)).intValue(), ((Number) e.get(1)).intValue());
            } else {
                g.addEdge(((Number) e.get(0)).intValue(), ((Number) e.get(1)).intValue(), ((Number) e.get(2)).intValue());
            }
        }
        return g;
    }
}
