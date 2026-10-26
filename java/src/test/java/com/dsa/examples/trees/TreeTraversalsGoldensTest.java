package com.dsa.examples.trees;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class TreeTraversalsGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "tree-traversals-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            BST<Integer, String> tree = new BST<>();
            @SuppressWarnings("unchecked")
            List<List<Object>> inserts = (List<List<Object>>) c.get("inserts");
            for (List<Object> pair : inserts) {
                tree.insert(((Number) pair.get(0)).intValue(), (String) pair.get(1));
            }
            BSTNode<Integer, String> root = tree.getRoot();
            assertEquals(toIntList(c.get("inOrder")), TreeTraversals.inOrderRecursive(root));
            assertEquals(toIntList(c.get("preOrder")), TreeTraversals.preOrderRecursive(root));
            assertEquals(toIntList(c.get("postOrder")), TreeTraversals.postOrderRecursive(root));
        }
    }

    @SuppressWarnings("unchecked")
    private static List<Integer> toIntList(Object raw) {
        List<Number> list = (List<Number>) raw;
        return list.stream().map(Number::intValue).toList();
    }
}
