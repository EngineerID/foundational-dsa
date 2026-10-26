package com.dsa.examples.linear;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class DynamicArrayGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "dynamic-array-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            DynamicArray<Integer> arr = new DynamicArray<>();
            @SuppressWarnings("unchecked")
            List<Number> append = (List<Number>) c.get("append");
            for (Number n : append) {
                arr.add(n.intValue());
            }
            assertEquals(((Number) c.get("size")).intValue(), arr.size());
            @SuppressWarnings("unchecked")
            List<Map<String, Object>> gets = (List<Map<String, Object>>) c.get("get");
            for (Map<String, Object> pair : gets) {
                assertEquals(
                        ((Number) pair.get("value")).intValue(),
                        arr.get(((Number) pair.get("index")).intValue()));
            }
        }
    }
}
