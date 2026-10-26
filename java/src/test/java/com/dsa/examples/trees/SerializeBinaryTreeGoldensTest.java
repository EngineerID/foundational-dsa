package com.dsa.examples.trees;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

class SerializeBinaryTreeGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "serialize-binary-tree-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            Integer[] values = parseValues(c.get("values"));
            Integer[] expected = parseValues(c.get("expected"));
            assertArrayEquals(
                    expected,
                    SerializeBinaryTree.deserialize(SerializeBinaryTree.serialize(values)),
                    c.toString());
        }
    }

    @SuppressWarnings("unchecked")
    private static Integer[] parseValues(Object raw) {
        if (raw == null) {
            return new Integer[0];
        }
        List<Object> list = (List<Object>) raw;
        Integer[] arr = new Integer[list.size()];
        for (int i = 0; i < list.size(); i++) {
            Object o = list.get(i);
            arr[i] = o == null ? null : ((Number) o).intValue();
        }
        return arr;
    }
}
