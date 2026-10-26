package com.dsa.examples.dp;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class RodCuttingGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "rod-cutting-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            int[] prices = toIntArray(c.get("prices"));
            int length = ((Number) c.get("length")).intValue();
            if (Boolean.TRUE.equals(c.get("expectError"))) {
                assertThrows(IllegalArgumentException.class, () -> RodCutting.maxProfit(prices, length));
            } else {
                assertEquals(((Number) c.get("expected")).intValue(), RodCutting.maxProfit(prices, length));
            }
        }
    }

    @SuppressWarnings("unchecked")
    private static int[] toIntArray(Object raw) {
        List<Number> list = (List<Number>) raw;
        return list.stream().mapToInt(Number::intValue).toArray();
    }
}
