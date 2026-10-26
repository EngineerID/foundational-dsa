package com.dsa.examples.trees;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class LcaBinaryLiftingGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "lca-binary-lifting-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            @SuppressWarnings("unchecked")
            List<Object> parentRaw = (List<Object>) c.get("parent");
            int[] parent = parentRaw.stream().mapToInt(n -> ((Number) n).intValue()).toArray();
            LCABinaryLifting lca = new LCABinaryLifting(parent);
            @SuppressWarnings("unchecked")
            List<List<Object>> queries = (List<List<Object>>) c.get("queries");
            for (List<Object> q : queries) {
                int u = ((Number) q.get(0)).intValue();
                int v = ((Number) q.get(1)).intValue();
                int expected = ((Number) q.get(2)).intValue();
                assertEquals(expected, lca.query(u, v));
            }
        }
    }
}
