package com.dsa.examples.hashing;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

class SeparateChainingGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "separate-chaining-goldens.json")
                .toAbsolutePath()
                .normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            HashTableChaining<String, Integer> table = new HashTableChaining<>();
            @SuppressWarnings("unchecked")
            List<List<Object>> ops = (List<List<Object>>) c.get("ops");
            for (List<Object> op : ops) {
                table.put((String) op.get(1), ((Number) op.get(2)).intValue());
            }
            @SuppressWarnings("unchecked")
            Map<String, Object> get = (Map<String, Object>) c.get("get");
            Object expectedValue = get.get("value");
            if (expectedValue == null) {
                assertNull(table.get((String) get.get("key")));
            } else {
                assertEquals(((Number) expectedValue).intValue(), table.get((String) get.get("key")));
            }
            if (c.get("getMissing") != null) {
                @SuppressWarnings("unchecked")
                Map<String, Object> missing = (Map<String, Object>) c.get("getMissing");
                assertNull(table.get((String) missing.get("key")));
            }
        }
    }
}
