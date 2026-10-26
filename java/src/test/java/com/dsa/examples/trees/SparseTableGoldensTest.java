package com.dsa.examples.trees;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class SparseTableGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "sparse-table-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            @SuppressWarnings("unchecked")
            List<Object> initial = (List<Object>) c.get("initial");
            int[] arr = initial.stream().mapToInt(n -> ((Number) n).intValue()).toArray();
            SparseTable st = new SparseTable(arr);
            @SuppressWarnings("unchecked")
            List<List<Object>> queries = (List<List<Object>>) c.get("queries");
            for (List<Object> q : queries) {
                int left = ((Number) q.get(0)).intValue();
                int right = ((Number) q.get(1)).intValue();
                int expected = ((Number) q.get(2)).intValue();
                assertEquals(expected, st.query(left, right));
            }
        }
    }
}
