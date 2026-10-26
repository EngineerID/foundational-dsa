package com.dsa.examples.searching;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class QuickSelectGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "quick-select-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            @SuppressWarnings("unchecked")
            List<Object> arrList = (List<Object>) c.get("arr");
            int[] arr = arrList.stream().mapToInt(n -> ((Number) n).intValue()).toArray();
            int k = ((Number) c.get("k")).intValue();
            int expected = ((Number) c.get("expected")).intValue();
            assertEquals(expected, QuickSelect.kthSmallest(arr, k));
        }
    }
}
