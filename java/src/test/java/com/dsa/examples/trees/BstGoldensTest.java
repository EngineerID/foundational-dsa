package com.dsa.examples.trees;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class BstGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "bst-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            BST<Integer, String> tree = new BST<>();
            @SuppressWarnings("unchecked")
            List<List<Object>> inserts = (List<List<Object>>) c.get("inserts");
            for (List<Object> pair : inserts) {
                tree.insert(((Number) pair.get(0)).intValue(), (String) pair.get(1));
            }
            @SuppressWarnings("unchecked")
            List<Number> keys = (List<Number>) c.get("inOrderKeys");
            List<Integer> expectedKeys = keys.stream().map(Number::intValue).toList();
            assertEquals(expectedKeys, tree.inOrder());
            int searchKey = ((Number) c.get("searchKey")).intValue();
            assertEquals(c.get("searchValue"), tree.search(searchKey));
        }
    }
}
