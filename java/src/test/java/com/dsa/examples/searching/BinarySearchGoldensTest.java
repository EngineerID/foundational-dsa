package com.dsa.examples.searching;

import com.dsa.examples.support.GoldenIntArrays;
import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class BinarySearchGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "binary-search-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            int[] arr = GoldenIntArrays.parse(c.get("arr"));
            int key = ((Number) c.get("key")).intValue();
            int expected = ((Number) c.get("expected")).intValue();
            assertEquals(expected, BinarySearch.search(arr, key), c.toString());
        }
    }
}
