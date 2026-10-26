package com.dsa.examples.linear;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class SlidingWindowMaximumGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "sliding-window-maximum-goldens.json")
                .toAbsolutePath()
                .normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            @SuppressWarnings("unchecked")
            List<Number> nums = (List<Number>) c.get("nums");
            int k = ((Number) c.get("k")).intValue();
            int[] arr = nums.stream().mapToInt(Number::intValue).toArray();
            @SuppressWarnings("unchecked")
            List<Number> expected = (List<Number>) c.get("expected");
            List<Integer> exp =
                    expected.stream().map(n -> ((Number) n).intValue()).toList();
            assertEquals(exp, SlidingWindowMaximum.maxSlidingWindow(arr, k));
        }
    }
}
