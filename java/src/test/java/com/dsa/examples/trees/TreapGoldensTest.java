package com.dsa.examples.trees;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

class TreapGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "treap-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            long seed = ((Number) c.get("seed")).longValue();
            Treap t = new Treap(seed);
            @SuppressWarnings("unchecked")
            List<List<Object>> inserts = (List<List<Object>>) c.get("inserts");
            for (List<Object> pair : inserts) {
                t.insert(((Number) pair.get(0)).intValue(), ((Number) pair.get(1)).intValue());
            }
            @SuppressWarnings("unchecked")
            List<Map<String, Object>> searchResults = (List<Map<String, Object>>) c.get("searchResults");
            for (Map<String, Object> row : searchResults) {
                int key = ((Number) row.get("key")).intValue();
                Object expected = row.get("value");
                if (expected == null) {
                    assertNull(t.search(key));
                } else {
                    assertEquals(((Number) expected).intValue(), t.search(key));
                }
            }
        }
    }
}
