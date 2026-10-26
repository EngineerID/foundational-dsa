package com.dsa.examples.linear;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class LRUCacheGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "lru-cache-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            int capacity = ((Number) c.get("capacity")).intValue();
            LRUCache cache = new LRUCache(capacity);
            @SuppressWarnings("unchecked")
            List<Map<String, Object>> steps = (List<Map<String, Object>>) c.get("steps");
            for (Map<String, Object> step : steps) {
                String op = (String) step.get("op");
                int key = ((Number) step.get("key")).intValue();
                if ("put".equals(op)) {
                    cache.put(key, ((Number) step.get("value")).intValue());
                } else if ("get".equals(op)) {
                    assertEquals(((Number) step.get("expected")).intValue(), cache.get(key));
                }
            }
        }
    }
}
