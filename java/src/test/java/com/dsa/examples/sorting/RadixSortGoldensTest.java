package com.dsa.examples.sorting;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

class RadixSortGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "radix-sort-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            int[] arr = toIntArray(c.get("input"));
            int[] exp = toIntArray(c.get("sorted"));
            RadixSort.sort(arr);
            assertArrayEquals(exp, arr);
        }
    }

    @SuppressWarnings("unchecked")
    private static int[] toIntArray(Object raw) {
        List<Number> list = (List<Number>) raw;
        return list.stream().mapToInt(Number::intValue).toArray();
    }
}
