package com.dsa.examples.trees;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class IntervalTreeGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "interval-tree-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            if (Boolean.TRUE.equals(c.get("expectError"))) {
                IntervalTree tree = new IntervalTree();
                @SuppressWarnings("unchecked")
                List<List<Object>> badInserts = (List<List<Object>>) c.get("inserts");
                assertThrows(IllegalArgumentException.class, () -> {
                    for (List<Object> iv : badInserts) {
                        tree.insert(new Interval(((Number) iv.get(0)).intValue(), ((Number) iv.get(1)).intValue()));
                    }
                });
                continue;
            }
            IntervalTree tree = new IntervalTree();
            @SuppressWarnings("unchecked")
            List<List<Object>> inserts = (List<List<Object>>) c.get("inserts");
            for (List<Object> iv : inserts) {
                tree.insert(new Interval(((Number) iv.get(0)).intValue(), ((Number) iv.get(1)).intValue()));
            }
            @SuppressWarnings("unchecked")
            List<Object> q = (List<Object>) c.get("query");
            List<Interval> found =
                    tree.overlapSearch(new Interval(((Number) q.get(0)).intValue(), ((Number) q.get(1)).intValue()));
            List<List<Integer>> got = new ArrayList<>();
            for (Interval i : found) {
                got.add(List.of(i.low(), i.high()));
            }
            got.sort(Comparator.comparingInt((List<Integer> a) -> a.get(0)).thenComparingInt(a -> a.get(1)));
            @SuppressWarnings("unchecked")
            List<List<Object>> expected = (List<List<Object>>) c.get("overlaps");
            List<List<Integer>> exp = expected.stream()
                    .map(row -> List.of(((Number) row.get(0)).intValue(), ((Number) row.get(1)).intValue()))
                    .toList();
            assertEquals(exp, got);
        }
    }
}
