package com.dsa.examples.sorting;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

class MergeSortGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "merge-sort-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            @SuppressWarnings("unchecked")
            List<Number> input = (List<Number>) c.get("input");
            int[] arr = input.stream().mapToInt(Number::intValue).toArray();
            @SuppressWarnings("unchecked")
            List<Number> sorted = (List<Number>) c.get("sorted");
            int[] exp = sorted.stream().mapToInt(Number::intValue).toArray();
            assertArrayEquals(exp, MergeSort.sort(arr));
        }
    }
}
