package com.dsa.examples.dp;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class KnapsackGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "knapsack-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            int[] weights = toIntArray(c.get("weights"));
            int[] values = toIntArray(c.get("values"));
            int capacity = ((Number) c.get("capacity")).intValue();
            assertEquals(((Number) c.get("expected")).intValue(), Knapsack01.maxValue(weights, values, capacity));
        }
    }

    @SuppressWarnings("unchecked")
    private static int[] toIntArray(Object raw) {
        List<Number> list = (List<Number>) raw;
        return list.stream().mapToInt(Number::intValue).toArray();
    }
}
