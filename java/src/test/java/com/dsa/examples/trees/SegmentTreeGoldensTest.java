package com.dsa.examples.trees;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

class SegmentTreeGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "segment-tree-goldens.json")
                .toAbsolutePath()
                .normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            int[] initial = toIntArray(c.get("initial"));
            SegmentTree st = new SegmentTree(initial);
            @SuppressWarnings("unchecked")
            List<Map<String, Object>> rangeSum = (List<Map<String, Object>>) c.get("rangeSum");
            for (Map<String, Object> q : rangeSum) {
                int left = ((Number) q.get("left")).intValue();
                int right = ((Number) q.get("right")).intValue();
                assertEquals(((Number) q.get("sum")).intValue(), st.rangeSum(left, right));
            }
            @SuppressWarnings("unchecked")
            Map<String, Object> update = (Map<String, Object>) c.get("update");
            st.update(((Number) update.get("index")).intValue(), ((Number) update.get("value")).intValue());
            @SuppressWarnings("unchecked")
            List<Map<String, Object>> after = (List<Map<String, Object>>) c.get("rangeSumAfter");
            for (Map<String, Object> q : after) {
                int left = ((Number) q.get("left")).intValue();
                int right = ((Number) q.get("right")).intValue();
                assertEquals(((Number) q.get("sum")).intValue(), st.rangeSum(left, right));
            }
        }
    }

    @SuppressWarnings("unchecked")
    private static int[] toIntArray(Object raw) {
        List<Number> list = (List<Number>) raw;
        return list.stream().mapToInt(Number::intValue).toArray();
    }
}
