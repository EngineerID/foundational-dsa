package com.dsa.examples.trees;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class LevelOrderTraversalGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "level-order-traversal-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            assertEquals(parseExpected(c.get("expected")), LevelOrderTraversal.levelOrder(parseValues(c.get("values"))), c.toString());
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

    @SuppressWarnings("unchecked")
    private static List<List<Integer>> parseExpected(Object raw) {
        List<List<Integer>> out = new ArrayList<>();
        for (List<Number> row : (List<List<Number>>) raw) {
            List<Integer> level = new ArrayList<>();
            for (Number n : row) {
                level.add(n.intValue());
            }
            out.add(level);
        }
        return out;
    }
}
