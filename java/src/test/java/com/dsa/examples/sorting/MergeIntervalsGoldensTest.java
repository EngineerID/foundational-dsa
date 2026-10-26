package com.dsa.examples.sorting;

import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

class MergeIntervalsGoldensTest {

    @Test
    void sharedGoldensFromRepoJson() throws Exception {
        Path json = Path.of("..", "tools", "merge-intervals-goldens.json").toAbsolutePath().normalize();
        List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(Files.readString(json));
        for (Map<String, Object> c : cases) {
            assertArrayEquals(toMatrix(c.get("expected")), MergeIntervals.mergeIntervals(toMatrix(c.get("intervals"))), c.toString());
        }
    }

    private static int[][] toMatrix(Object raw) {
        if (raw == null) {
            return new int[0][];
        }
        @SuppressWarnings("unchecked")
        List<List<Number>> rows = (List<List<Number>>) raw;
        int[][] m = new int[rows.size()][];
        for (int i = 0; i < rows.size(); i++) {
            List<Number> row = rows.get(i);
            m[i] = new int[] {row.get(0).intValue(), row.get(1).intValue()};
        }
        return m;
    }
}
