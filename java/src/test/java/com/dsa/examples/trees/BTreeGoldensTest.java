package com.dsa.examples.trees;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class BTreeGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "b-tree-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            if (Boolean.TRUE.equals(c.get("expectError"))) {
                assertThrows(IllegalArgumentException.class, () -> new BTree(((Number) c.get("t")).intValue()));
                continue;
            }
            BTree tree = new BTree(((Number) c.get("t")).intValue());
            @SuppressWarnings("unchecked")
            List<Object> inserts = (List<Object>) c.get("inserts");
            for (Object key : inserts) {
                tree.insert(((Number) key).intValue());
            }
            @SuppressWarnings("unchecked")
            List<Map<String, Object>> searches = (List<Map<String, Object>>) c.get("searches");
            for (Map<String, Object> spec : searches) {
                assertEquals(spec.get("found"), tree.search(((Number) spec.get("key")).intValue()));
            }
        }
    }
}
