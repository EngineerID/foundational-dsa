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
import static org.junit.jupiter.api.Assertions.assertThrows;
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
    void unionFindPracticeGoldens() throws Exception {
        List<Map<String, Object>> cases =
                GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("union-find-goldens.json")));
        for (Map<String, Object> c : cases) {
            int n = ((Number) c.get("n")).intValue();
            int[][] unions = parseEdgePairs(c.get("unions"));
            @SuppressWarnings("unchecked")
            List<Map<String, Object>> queries = (List<Map<String, Object>>) c.get("connected");
            for (Map<String, Object> q : queries) {
                int a = ((Number) q.get("a")).intValue();
                int b = ((Number) q.get("b")).intValue();
                assertEquals(
                        (Boolean) q.get("expected"),
                        UnionFindPractice.connected(n, unions, a, b));
            }
        }
    }

    @Test
    void binaryHeapPracticeGoldens() throws Exception {
        List<Map<String, Object>> cases =
                GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("binary-heap-goldens.json")));
        for (Map<String, Object> c : cases) {
            if (!c.containsKey("inserts")) {
                continue;
            }
            int[] inserts = GoldenIntArrays.parse(c.get("inserts"));
            assertArrayEquals(GoldenIntArrays.parse(c.get("extractOrder")), BinaryHeapPractice.extractOrder(inserts));
        }
    }

    @Test
    void dijkstraPracticeGoldens() throws Exception {
        List<Map<String, Object>> cases =
                GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("dijkstra-goldens.json")));
        for (Map<String, Object> c : cases) {
            int n = ((Number) c.get("n")).intValue();
            int source = ((Number) c.get("source")).intValue();
            int[] expected = GoldenIntArrays.parse(c.get("distances"));
            assertArrayEquals(expected, DijkstraPractice.shortestDistances(n, weightedEdges(c), source));
        }
    }

    @Test
    void dfsPracticeGoldens() throws Exception {
        List<Map<String, Object>> cases =
                GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("dfs-goldens.json")));
        for (Map<String, Object> c : cases) {
            int n = ((Number) c.get("n")).intValue();
            boolean directed = (Boolean) c.get("directed");
            int source = ((Number) c.get("source")).intValue();
            int[][] edges = parseEdgePairs(c.get("edges"));
            DfsPractice.Times t = DfsPractice.traverse(n, edges, source, directed);
            assertArrayEquals(GoldenIntArrays.parse(c.get("discovery")), t.discovery());
            assertArrayEquals(GoldenIntArrays.parse(c.get("finish")), t.finish());
        }
    }

    @Test
    void lisPracticeGoldens() throws Exception {
        List<Map<String, Object>> cases =
                GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("lis-goldens.json")));
        for (Map<String, Object> c : cases) {
            assertEquals(
                    ((Number) c.get("expected")).intValue(),
                    LisPractice.length(GoldenIntArrays.parse(c.get("arr"))));
        }
    }

    @Test
    void mergeSortPracticeGoldens() throws Exception {
        List<Map<String, Object>> cases =
                GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("merge-sort-goldens.json")));
        for (Map<String, Object> c : cases) {
            assertArrayEquals(
                    GoldenIntArrays.parse(c.get("sorted")),
                    MergeSortPractice.sort(GoldenIntArrays.parse(c.get("input"))));
        }
    }

    @Test
    void topologicalSortPracticeGoldens() throws Exception {
        List<Map<String, Object>> cases =
                GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("topological-sort-goldens.json")));
        for (Map<String, Object> c : cases) {
            int n = ((Number) c.get("n")).intValue();
            int[][] edges = parseEdgePairs(c.get("edges"));
            @SuppressWarnings("unchecked")
            List<Object> expected = (List<Object>) c.get("expectedOrder");
            List<Integer> exp = expected.stream().map(v -> ((Number) v).intValue()).toList();
            assertEquals(exp, TopologicalSortPractice.order(n, edges));
        }
    }

    @Test
    void priorityQueuePracticeGoldens() throws Exception {
        List<Map<String, Object>> cases =
                GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("priority-queue-goldens.json")));
        for (Map<String, Object> c : cases) {
            int[] inserts = GoldenIntArrays.parse(c.get("inserts"));
            assertArrayEquals(
                    GoldenIntArrays.parse(c.get("extractOrder")), PriorityQueuePractice.extractOrder(inserts));
        }
    }

    @Test
    void monotonicStackPracticeGoldens() throws Exception {
        List<Map<String, Object>> cases =
                GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("monotonic-stack-goldens.json")));
        for (Map<String, Object> c : cases) {
            int[] nums = GoldenIntArrays.parse(c.get("nums"));
            if (Boolean.TRUE.equals(c.get("expectError"))) {
                assertThrows(IllegalArgumentException.class, () -> MonotonicStackPractice.nextGreater(nums));
            } else {
                assertArrayEquals(GoldenIntArrays.parse(c.get("expected")), MonotonicStackPractice.nextGreater(nums));
            }
        }
    }

    @Test
    void quickSortPracticeGoldens() throws Exception {
        List<Map<String, Object>> cases =
                GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("quick-sort-goldens.json")));
        for (Map<String, Object> c : cases) {
            int[] input = GoldenIntArrays.parse(c.get("input"));
            boolean threeWay = "sort3Way".equals(c.get("mode"));
            assertArrayEquals(GoldenIntArrays.parse(c.get("expected")), QuickSortPractice.sort(input, threeWay));
        }
    }

    @Test
    void bstPracticeGoldens() throws Exception {
        List<Map<String, Object>> cases =
                GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("bst-goldens.json")));
        for (Map<String, Object> c : cases) {
            BstPractice tree = new BstPractice();
            @SuppressWarnings("unchecked")
            List<List<Object>> inserts = (List<List<Object>>) c.get("inserts");
            for (List<Object> pair : inserts) {
                tree.insert(((Number) pair.get(0)).intValue(), (String) pair.get(1));
            }
            assertEquals(
                    ((List<?>) c.get("inOrderKeys"))
                            .stream()
                            .map(v -> ((Number) v).intValue())
                            .toList(),
                    tree.inOrderKeys());
            assertEquals(c.get("searchValue"), tree.search(((Number) c.get("searchKey")).intValue()));
        }
    }

    @Test
    void primMstPracticeGoldens() throws Exception {
        List<Map<String, Object>> cases =
                GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("mst-goldens.json")));
        for (Map<String, Object> c : cases) {
            int n = ((Number) c.get("n")).intValue();
            int[][] edges = parseWeightedEdges(c.get("edges"));
            assertEquals(((Number) c.get("primWeight")).intValue(), PrimMstPractice.totalWeight(n, edges));
        }
    }

    @Test
    void stackPracticeGoldens() throws Exception {
        List<Map<String, Object>> cases =
                GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("stack-goldens.json")));
        for (Map<String, Object> c : cases) {
            StackPractice stack = new StackPractice();
            @SuppressWarnings("unchecked")
            List<Number> push = (List<Number>) c.get("push");
            for (Number n : push) {
                stack.push(n.intValue());
            }
            @SuppressWarnings("unchecked")
            List<Number> popValues = (List<Number>) c.get("popValues");
            for (Number expected : popValues) {
                assertEquals(expected.intValue(), stack.pop());
            }
            Object peek = c.get("peek");
            if (peek == null || Boolean.TRUE.equals(c.get("empty"))) {
                assertTrue(stack.isEmpty());
                assertThrows(IllegalStateException.class, stack::peek);
            } else {
                assertEquals(((Number) peek).intValue(), stack.peek());
            }
        }
    }

    @Test
    void heapSortPracticeGoldens() throws Exception {
        List<Map<String, Object>> cases =
                GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("heapsort-goldens.json")));
        for (Map<String, Object> c : cases) {
            assertArrayEquals(
                    GoldenIntArrays.parse(c.get("sorted")),
                    HeapSortPractice.sort(GoldenIntArrays.parse(c.get("input"))));
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
    private static int[][] parseWeightedEdges(Object raw) {
        List<Object> rows = (List<Object>) raw;
        int[][] out = new int[rows.size()][3];
        for (int i = 0; i < rows.size(); i++) {
            List<Object> e = (List<Object>) rows.get(i);
            out[i][0] = ((Number) e.get(0)).intValue();
            out[i][1] = ((Number) e.get(1)).intValue();
            out[i][2] = ((Number) e.get(2)).intValue();
        }
        return out;
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

    @SuppressWarnings("unchecked")
    private static int[][] weightedEdges(Map<String, Object> c) {
        List<List<Object>> edges = (List<List<Object>>) c.get("edges");
        int[][] out = new int[edges.size()][3];
        for (int i = 0; i < edges.size(); i++) {
            List<Object> e = edges.get(i);
            out[i][0] = ((Number) e.get(0)).intValue();
            out[i][1] = ((Number) e.get(1)).intValue();
            out[i][2] = ((Number) e.get(2)).intValue();
        }
        return out;
    }
}
