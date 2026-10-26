package com.dsa.examples.practice;

import com.dsa.examples.support.GoldenIntArrays;
import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

/** Practice implementations vs shared catalog golden JSON (plus practice-bfs-goldens). */
class PracticeSharedGoldensTest {

    private static Path toolsJson(String name) {
        return Path.of("..", "tools", name).toAbsolutePath().normalize();
    }

    @Test
    void binarySearchPracticeGoldens() throws Exception {
        List<Map<String, Object>> cases =
                GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("binary-search-goldens.json")));
        for (Map<String, Object> c : cases) {
            int[] arr = GoldenIntArrays.parse(c.get("arr"));
            int key = ((Number) c.get("key")).intValue();
            int expected = ((Number) c.get("expected")).intValue();
            assertEquals(expected, BinarySearchPractice.findIndex(arr, key));
        }
    }

    @Test
    void knapsackPracticeGoldens() throws Exception {
        List<Map<String, Object>> cases =
                GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("knapsack-goldens.json")));
        for (Map<String, Object> c : cases) {
            int[] weights = GoldenIntArrays.parse(c.get("weights"));
            int[] values = GoldenIntArrays.parse(c.get("values"));
            int capacity = ((Number) c.get("capacity")).intValue();
            assertEquals(
                    ((Number) c.get("expected")).intValue(),
                    KnapsackPractice.maxValue(weights, values, capacity));
        }
    }

    @Test
    void lcsPracticeGoldens() throws Exception {
        List<Map<String, Object>> cases =
                GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("lcs-goldens.json")));
        for (Map<String, Object> c : cases) {
            assertEquals(
                    ((Number) c.get("expected")).intValue(),
                    LcsPractice.length((String) c.get("a"), (String) c.get("b")));
        }
    }

    @Test
    void kmpPracticeGoldens() throws Exception {
        List<Map<String, Object>> cases =
                GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("kmp-goldens.json")));
        for (Map<String, Object> c : cases) {
            assertEquals(
                    ((Number) c.get("expected")).intValue(),
                    KmpPractice.firstIndex((String) c.get("text"), (String) c.get("pattern")));
        }
    }

    @Test
    void triePracticeGoldens() throws Exception {
        List<Map<String, Object>> cases =
                GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("trie-goldens.json")));
        for (Map<String, Object> c : cases) {
            TriePractice trie = new TriePractice();
            @SuppressWarnings("unchecked")
            List<String> inserts = (List<String>) c.get("inserts");
            for (String w : inserts) {
                trie.insert(w);
            }
            @SuppressWarnings("unchecked")
            List<Map<String, Object>> searchRows = (List<Map<String, Object>>) c.get("search");
            for (Map<String, Object> row : searchRows) {
                assertEquals((Boolean) row.get("expected"), trie.search((String) row.get("word")));
            }
            @SuppressWarnings("unchecked")
            List<Map<String, Object>> prefixRows = (List<Map<String, Object>>) c.get("startsWith");
            for (Map<String, Object> row : prefixRows) {
                assertEquals((Boolean) row.get("expected"), trie.startsWith((String) row.get("prefix")));
            }
        }
    }

    @Test
    void bfsPracticeGoldens() throws Exception {
        List<Map<String, Object>> cases =
                GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("practice-bfs-goldens.json")));
        for (Map<String, Object> c : cases) {
            int n = ((Number) c.get("n")).intValue();
            int source = ((Number) c.get("source")).intValue();
            int[][] edges = parseEdgePairs(c.get("edges"));
            int[] expected = GoldenIntArrays.parse(c.get("expected"));
            assertArrayEquals(expected, BfsPractice.distances(n, edges, source));
        }
    }

    @SuppressWarnings("unchecked")
    private static int[][] parseEdgePairs(Object raw) {
        List<Object> rows = (List<Object>) raw;
        int[][] out = new int[rows.size()][2];
        for (int i = 0; i < rows.size(); i++) {
            List<Object> e = (List<Object>) rows.get(i);
            out[i][0] = ((Number) e.get(0)).intValue();
            out[i][1] = ((Number) e.get(1)).intValue();
        }
        return out;
    }
}
