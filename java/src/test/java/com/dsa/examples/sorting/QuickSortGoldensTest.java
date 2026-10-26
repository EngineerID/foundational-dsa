package com.dsa.examples.sorting;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

class QuickSortGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "quick-sort-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            @SuppressWarnings("unchecked")
            List<Object> inputList = (List<Object>) c.get("input");
            int[] input = inputList.stream().mapToInt(n -> ((Number) n).intValue()).toArray();
            String mode = (String) c.get("mode");
            @SuppressWarnings("unchecked")
            List<Object> expectedList = (List<Object>) c.get("expected");
            int[] expected = expectedList.stream().mapToInt(n -> ((Number) n).intValue()).toArray();
            int[] arr = Arrays.copyOf(input, input.length);
            if ("sort3Way".equals(mode)) {
                QuickSort.sort3Way(arr);
            } else {
                QuickSort.sort(arr);
            }
            assertArrayEquals(expected, arr);
        }
    }
}
