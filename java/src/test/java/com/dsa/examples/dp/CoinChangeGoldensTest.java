package com.dsa.examples.dp;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class CoinChangeGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "coin-change-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            @SuppressWarnings("unchecked")
            List<Number> coins = (List<Number>) c.get("coins");
            int[] arr = coins.stream().mapToInt(Number::intValue).toArray();
            int amount = ((Number) c.get("amount")).intValue();
            int expected = ((Number) c.get("expected")).intValue();
            assertEquals(expected, CoinChange.minCoins(arr, amount));
        }
    }
}
