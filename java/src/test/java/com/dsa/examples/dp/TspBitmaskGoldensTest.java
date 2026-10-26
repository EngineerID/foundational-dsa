package com.dsa.examples.dp;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class TspBitmaskGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "tsp-bitmask-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            int[][] dist = toMatrix(c.get("dist"));
            assertEquals(((Number) c.get("expected")).longValue(), TSPBitmask.minCost(dist));
        }
    }

    @SuppressWarnings("unchecked")
    private static int[][] toMatrix(Object raw) {
        List<List<Object>> rows = (List<List<Object>>) raw;
        int[][] m = new int[rows.size()][];
        for (int i = 0; i < rows.size(); i++) {
            List<Object> row = rows.get(i);
            m[i] = row.stream().mapToInt(n -> ((Number) n).intValue()).toArray();
        }
        return m;
    }
}
