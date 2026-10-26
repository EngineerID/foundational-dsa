package com.dsa.examples.trees;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

class RedBlackTreeGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "red-black-tree-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            RedBlackTree tree = new RedBlackTree();
            @SuppressWarnings("unchecked")
            List<List<Object>> inserts = (List<List<Object>>) c.get("inserts");
            for (List<Object> pair : inserts) {
                tree.insert(((Number) pair.get(0)).intValue(), ((Number) pair.get(1)).intValue());
            }
            @SuppressWarnings("unchecked")
            List<List<Object>> searches = (List<List<Object>>) c.get("searches");
            for (List<Object> pair : searches) {
                assertEquals(((Number) pair.get(1)).intValue(), tree.search(((Number) pair.get(0)).intValue()));
            }
            assertNull(tree.search(((Number) c.get("searchMiss")).intValue()));
        }
    }
}
