package com.dsa.examples.trees;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class FenwickTreeGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "fenwick-tree-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            int n = ((Number) c.get("n")).intValue();
            FenwickTree ft = new FenwickTree(n);
            @SuppressWarnings("unchecked")
            List<List<Object>> adds = (List<List<Object>>) c.get("adds");
            for (List<Object> add : adds) {
                ft.add(((Number) add.get(0)).intValue(), ((Number) add.get(1)).intValue());
            }
            @SuppressWarnings("unchecked")
            List<Map<String, Object>> checks = (List<Map<String, Object>>) c.get("checks");
            for (Map<String, Object> row : checks) {
                if (row.containsKey("prefixAt")) {
                    assertEquals(
                            ((Number) row.get("expected")).intValue(),
                            ft.prefixSum(((Number) row.get("prefixAt")).intValue()));
                }
                if (row.containsKey("rangeLeft")) {
                    assertEquals(
                            ((Number) row.get("expected")).intValue(),
                            ft.rangeSum(
                                    ((Number) row.get("rangeLeft")).intValue(),
                                    ((Number) row.get("rangeRight")).intValue()));
                }
            }
        }
    }
}
