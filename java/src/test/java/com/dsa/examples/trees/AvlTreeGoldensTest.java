package com.dsa.examples.trees;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class AvlTreeGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "avl-tree-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            AVLTree<Integer, String> tree = new AVLTree<>();
            @SuppressWarnings("unchecked")
            List<List<Object>> inserts = (List<List<Object>>) c.get("inserts");
            for (List<Object> pair : inserts) {
                tree.insert(((Number) pair.get(0)).intValue(), (String) pair.get(1));
            }
            @SuppressWarnings("unchecked")
            List<Object> expected = (List<Object>) c.get("inOrderKeys");
            assertEquals(expected.stream().map(n -> ((Number) n).intValue()).toList(), tree.inOrder());
            assertEquals(c.get("searchValue"), tree.search(((Number) c.get("searchKey")).intValue()));
        }
    }
}
