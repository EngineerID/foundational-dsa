package com.dsa.examples.heaps;

import com.dsa.examples.support.GoldenIntArrays;
import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class TopKFrequentElementsGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "top-k-frequent-elements-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            int[] nums = GoldenIntArrays.parse(c.get("nums"));
            int k = ((Number) c.get("k")).intValue();
            if (Boolean.TRUE.equals(c.get("expectError"))) {
                assertThrows(IllegalArgumentException.class, () -> TopKFrequentElements.topKFrequent(nums, k), c.toString());
            } else {
                List<Integer> expected =
                        Arrays.stream(GoldenIntArrays.parse(c.get("expected"))).boxed().toList();
                assertEquals(expected, TopKFrequentElements.topKFrequent(nums, k), c.toString());
            }
        }
    }
}
