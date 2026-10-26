package com.dsa.examples.practice;

import com.dsa.examples.graphs.BellmanFord;
import com.dsa.examples.graphs.Graph;
import com.dsa.examples.support.GoldenIntArrays;
import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

/**
 * Edge themes phase 2 on practice wrappers (empty, single, duplicate, large, invalid).
 *
 * <p>practice-edge-theme-topics: two-sum-ii maximum-subarray valid-parentheses meeting-rooms-ii number-of-islands top-k-frequent-elements course-schedule longest-substring-without-repeating coin-change lru-cache merge-intervals level-order-traversal word-search quick-select kruskal-mst trapping-rain-water edit-distance serialize-binary-tree network-delay sliding-window-maximum binary-search knapsack lcs kmp trie bfs union-find binary-heap dijkstra dfs lis merge-sort topological-sort priority-queue monotonic-stack quick-sort bst prim-mst stack heapsort queue deque counting-sort radix-sort rabin-karp bellman-ford segment-tree floyd-warshall fenwick-tree graph bipartite-check tarjan-scc kosaraju edmonds-karp matrix-chain rod-cutting partition-equal-subset longest-palindromic-subsequence dynamic-array linear-search bubble-sort insertion-sort selection-sort z-algorithm manacher aho-corasick avl-tree red-black-tree singly-linked-list doubly-linked-list tree-traversals separate-chaining open-addressing suffix-array treap order-statistic-tree interval-tree b-tree bloom-filter boruvka-mst a-star articulation-bridges hungarian lca-binary-lifting sparse-table tsp-bitmask reservoir-sampling
 */
class PracticeEdgeThemesPhase2Test {

    private static final int LARGE_N = 256;

    private static Path toolsJson(String name) {
        return Path.of("..", "tools", name).toAbsolutePath().normalize();
    }

    @FunctionalInterface
    private interface SortCopyFn {
        int[] sort(int[] input);
    }

    private static void sortCopyBattery(SortCopyFn sortFn, boolean allowNegative) {
        assertArrayEquals(new int[] {}, sortFn.sort(new int[] {}));
        assertArrayEquals(new int[] {7}, sortFn.sort(new int[] {7}));
        assertArrayEquals(new int[] {1, 2, 2}, sortFn.sort(new int[] {2, 2, 1}));
        int[] large = new int[LARGE_N];
        for (int i = 0; i < LARGE_N; i++) {
            large[i] = LARGE_N - i;
        }
        int[] sorted = sortFn.sort(large);
        for (int i = 0; i < LARGE_N; i++) {
            assertEquals(i + 1, sorted[i]);
        }
        if (!allowNegative) {
            assertThrows(Exception.class, () -> sortFn.sort(new int[] {-1}));
        }
    }

    @Test
    void sortingEdgeThemesPhase2() {
        sortCopyBattery(InsertionSortPractice::sort, true);
        sortCopyBattery(SelectionSortPractice::sort, true);
        sortCopyBattery(arr -> QuickSortPractice.sort(arr, false), true);
        sortCopyBattery(HeapSortPractice::sort, true);
        sortCopyBattery(RadixSortPractice::sort, true);
    }

    @Test
    void kruskalMstEdgeThemesPhase2() throws Exception {
        List<Map<String, Object>> cases =
                GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("mst-goldens.json")));
        for (Map<String, Object> c : cases) {
            int n = ((Number) c.get("n")).intValue();
            int[][] edges = parseWeightedEdges(c.get("edges"));
            assertEquals(
                    ((Number) c.get("kruskalWeight")).intValue(),
                    MstKruskalPractice.totalWeight(n, edges),
                    c.toString());
            assertEquals(
                    ((Number) c.get("primWeight")).intValue(),
                    PrimMstPractice.totalWeight(n, edges),
                    c.toString());
        }
    }

    @Test
        void twoSumIiGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("two-sum-ii-goldens.json")));
            for (Map<String, Object> c : cases) {
                int[] nums = GoldenIntArrays.parse(c.get("nums"));
                int target = ((Number) c.get("target")).intValue();
                if (Boolean.TRUE.equals(c.get("expectError"))) {
                    assertThrows(Exception.class, () -> TwoSumSorted.solve(nums, target), c.toString());
                } else {
                    assertArrayEquals(
                            GoldenIntArrays.parse(c.get("expected")),
                            TwoSumSorted.solve(nums, target),
                            c.toString());
                }
            }
        }

    @Test
        void validParenthesesGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("valid-parentheses-goldens.json")));
            for (Map<String, Object> c : cases) {
                assertEquals(
                        (Boolean) c.get("expected"),
                        ValidParentheses.solve((String) c.get("s")),
                        c.toString());
            }
        }

    @Test
        void meetingRoomsIiGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("meeting-rooms-ii-goldens.json")));
            for (Map<String, Object> c : cases) {
                assertEquals(
                        ((Number) c.get("expected")).intValue(),
                        MeetingRooms.minRooms(toMatrix(c.get("intervals"))),
                        c.toString());
            }
        }

    @Test
        void numberOfIslandsGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("number-of-islands-goldens.json")));
            for (Map<String, Object> c : cases) {
                assertEquals(
                        ((Number) c.get("expected")).intValue(),
                        NumIslands.count(parseGrid(c.get("grid"))),
                        c.toString());
            }
        }

    @Test
        void topKFrequentElementsGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(
                            Files.readString(toolsJson("top-k-frequent-elements-goldens.json")));
            for (Map<String, Object> c : cases) {
                int[] nums = GoldenIntArrays.parse(c.get("nums"));
                int k = ((Number) c.get("k")).intValue();
                if (Boolean.TRUE.equals(c.get("expectError"))) {
                    assertThrows(Exception.class, () -> TopKFrequent.solve(nums, k), c.toString());
                } else {
                    assertEquals(parseIntList(c.get("expected")), TopKFrequent.solve(nums, k), c.toString());
                }
            }
        }

    @Test
        void courseScheduleGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("course-schedule-goldens.json")));
            for (Map<String, Object> c : cases) {
                int numCourses = ((Number) c.get("numCourses")).intValue();
                int[][] prerequisites = parseEdgePairs(c.get("prerequisites"));
                assertEquals(
                        (Boolean) c.get("expected"),
                        CourseSchedule.canFinish(numCourses, prerequisites),
                        c.toString());
            }
        }

    @Test
        void longestSubstringWithoutRepeatingGoldens() throws Exception {
            List<Map<String, Object>> cases = GoldenJson.parseArrayOfObjects(
                    Files.readString(toolsJson("longest-substring-without-repeating-goldens.json")));
            for (Map<String, Object> c : cases) {
                assertEquals(
                        ((Number) c.get("expected")).intValue(),
                        LongestSubstring.lengthOfLongestSubstring((String) c.get("s")),
                        c.toString());
            }
        }

    @Test
        void coinChangeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("coin-change-goldens.json")));
            for (Map<String, Object> c : cases) {
                int[] coins = GoldenIntArrays.parse(c.get("coins"));
                int amount = ((Number) c.get("amount")).intValue();
                assertEquals(
                        ((Number) c.get("expected")).intValue(),
                        CoinChangePractice.minCoins(coins, amount),
                        c.toString());
            }
        }

    @Test
        void lruCacheGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("lru-cache-goldens.json")));
            for (Map<String, Object> c : cases) {
                int capacity = ((Number) c.get("capacity")).intValue();
                LRUCacheDesign cache = new LRUCacheDesign(capacity);
                @SuppressWarnings("unchecked")
                List<Map<String, Object>> steps = (List<Map<String, Object>>) c.get("steps");
                for (Map<String, Object> step : steps) {
                    String op = (String) step.get("op");
                    int key = ((Number) step.get("key")).intValue();
                    if ("put".equals(op)) {
                        cache.put(key, ((Number) step.get("value")).intValue());
                    } else if ("get".equals(op)) {
                        assertEquals(((Number) step.get("expected")).intValue(), cache.get(key));
                    }
                }
            }
        }

    @Test
        void mergeIntervalsGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("merge-intervals-goldens.json")));
            for (Map<String, Object> c : cases) {
                assertArrayEquals(
                        toMatrix(c.get("expected")),
                        MergeIntervals.merge(toMatrix(c.get("intervals"))),
                        c.toString());
            }
        }

    @Test
        void levelOrderTraversalGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("level-order-traversal-goldens.json")));
            for (Map<String, Object> c : cases) {
                assertEquals(
                        parseLevelExpected(c.get("expected")),
                        LevelOrderTraversal.levelOrder(parseNullableInts(c.get("values"))),
                        c.toString());
            }
        }

    @Test
        void wordSearchGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("word-search-goldens.json")));
            for (Map<String, Object> c : cases) {
                assertEquals(
                        (Boolean) c.get("expected"),
                        WordSearch.exists(parseGrid(c.get("board")), (String) c.get("word")),
                        c.toString());
            }
        }

    @Test
        void quickSelectGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("quick-select-goldens.json")));
            for (Map<String, Object> c : cases) {
                int[] arr = GoldenIntArrays.parse(c.get("arr"));
                int k = ((Number) c.get("k")).intValue();
                if (Boolean.TRUE.equals(c.get("expectError"))) {
                    assertThrows(Exception.class, () -> KthLargest.solve(arr, k), c.toString());
                } else {
                    int kLargest = arr.length - k + 1;
                    assertEquals(
                            ((Number) c.get("expected")).intValue(),
                            KthLargest.solve(arr, kLargest),
                            c.toString());
                }
            }
        }

    @Test
        void trappingRainWaterGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("trapping-rain-water-goldens.json")));
            for (Map<String, Object> c : cases) {
                assertEquals(
                        ((Number) c.get("expected")).intValue(),
                        TrappingRainWater.trap(GoldenIntArrays.parse(c.get("height"))),
                        c.toString());
            }
        }

    @Test
        void editDistanceGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("edit-distance-goldens.json")));
            for (Map<String, Object> c : cases) {
                assertEquals(
                        ((Number) c.get("expected")).intValue(),
                        EditDistancePractice.editDistance((String) c.get("a"), (String) c.get("b")),
                        c.toString());
            }
        }

    @Test
        void serializeBinaryTreeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("serialize-binary-tree-goldens.json")));
            for (Map<String, Object> c : cases) {
                Integer[] values = parseNullableInts(c.get("values"));
                Integer[] expected = parseNullableInts(c.get("expected"));
                assertArrayEquals(
                        expected,
                        TreeCodecPractice.deserialize(TreeCodecPractice.serialize(values)),
                        c.toString());
            }
        }

    @Test
        void networkDelayGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("network-delay-goldens.json")));
            for (Map<String, Object> c : cases) {
                int n = ((Number) c.get("n")).intValue();
                int source = ((Number) c.get("source")).intValue();
                assertEquals(
                        ((Number) c.get("expected")).intValue(),
                        NetworkDelay.networkDelay(n, parseWeightedEdges(c.get("times")), source),
                        c.toString());
            }
        }

    @Test
        void slidingWindowMaximumGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("sliding-window-maximum-goldens.json")));
            for (Map<String, Object> c : cases) {
                int[] nums = GoldenIntArrays.parse(c.get("nums"));
                int k = ((Number) c.get("k")).intValue();
                assertArrayEquals(
                        GoldenIntArrays.parse(c.get("expected")),
                        SlidingWindowMax.maxSlidingWindow(nums, k),
                        c.toString());
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
        void queuePracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("queue-goldens.json")));
            for (Map<String, Object> c : cases) {
                QueuePractice q = new QueuePractice();
                @SuppressWarnings("unchecked")
                List<Number> enqueue = (List<Number>) c.get("enqueue");
                for (Number n : enqueue) {
                    q.enqueue(n.intValue());
                }
                @SuppressWarnings("unchecked")
                List<Number> dequeues = (List<Number>) c.get("dequeueValues");
                for (Number expected : dequeues) {
                    assertEquals(expected.intValue(), q.dequeue());
                }
                Object peek = c.get("peek");
                if (peek == null || Boolean.TRUE.equals(c.get("empty"))) {
                    assertTrue(q.isEmpty());
                    assertThrows(IllegalStateException.class, q::peek);
                } else {
                    assertEquals(((Number) peek).intValue(), q.peek());
                }
            }
        }

    @Test
        void dequePracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("deque-goldens.json")));
            for (Map<String, Object> c : cases) {
                DequePractice dq = new DequePractice();
                @SuppressWarnings("unchecked")
                List<Number> addLast = (List<Number>) c.get("addLast");
                @SuppressWarnings("unchecked")
                List<Number> addFirst = (List<Number>) c.get("addFirst");
                if (Boolean.TRUE.equals(c.get("empty")) && addLast.isEmpty() && addFirst.isEmpty()) {
                    assertTrue(dq.isEmpty());
                    continue;
                }
                for (Number n : addLast) {
                    dq.addLast(n.intValue());
                }
                for (Number n : addFirst) {
                    dq.addFirst(n.intValue());
                }
                Object removeFirst = c.get("removeFirst");
                if (removeFirst != null) {
                    assertEquals(((Number) removeFirst).intValue(), dq.removeFirst());
                }
                Object removeLast = c.get("removeLast");
                if (removeLast != null) {
                    assertEquals(((Number) removeLast).intValue(), dq.removeLast());
                }
                Object remaining = c.get("remainingValue");
                if (remaining != null) {
                    assertEquals(((Number) remaining).intValue(), dq.removeFirst());
                }
                assertTrue(dq.isEmpty());
            }
        }

    @Test
        void radixSortPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("radix-sort-goldens.json")));
            for (Map<String, Object> c : cases) {
                assertArrayEquals(
                        GoldenIntArrays.parse(c.get("sorted")),
                        RadixSortPractice.sort(GoldenIntArrays.parse(c.get("input"))));
            }
        }

    @Test
        void rabinKarpPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("rabin-karp-goldens.json")));
            for (Map<String, Object> c : cases) {
                assertEquals(
                        ((Number) c.get("expected")).intValue(),
                        RabinKarpPractice.firstIndex((String) c.get("text"), (String) c.get("pattern")));
            }
        }

    @Test
        void bellmanFordPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("bellman-ford-goldens.json")));
            for (Map<String, Object> c : cases) {
                int n = ((Number) c.get("n")).intValue();
                int source = ((Number) c.get("source")).intValue();
                int[][] edges = parseWeightedEdges(c.get("edges"));
                BellmanFord.Result result = BellmanFordPractice.shortestPaths(n, edges, source);
                assertEquals(c.get("hasNegativeCycle"), result.hasNegativeCycle());
                if (c.containsKey("distances")) {
                    @SuppressWarnings("unchecked")
                    List<Number> exp = (List<Number>) c.get("distances");
                    int[] expected = exp.stream().mapToInt(Number::intValue).toArray();
                    assertArrayEquals(expected, result.distances());
                }
            }
        }

    @Test
        void segmentTreePracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("segment-tree-goldens.json")));
            for (Map<String, Object> c : cases) {
                SegmentTreePractice st = new SegmentTreePractice(GoldenIntArrays.parse(c.get("initial")));
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

    @Test
        void graphPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("graph-goldens.json")));
            for (Map<String, Object> c : cases) {
                int n = ((Number) c.get("n")).intValue();
                boolean directed = (Boolean) c.get("directed");
                boolean weighted = (Boolean) c.get("weighted");
                Graph g = GraphPractice.build(n, directed, weighted, parseFlexEdges(c.get("edges")));
                assertEquals(((Number) c.get("vertices")).intValue(), g.vertices());
                @SuppressWarnings("unchecked")
                Map<String, Number> counts = (Map<String, Number>) c.get("neighborCount");
                for (Map.Entry<String, Number> entry : counts.entrySet()) {
                    assertEquals(entry.getValue().intValue(), g.neighbors(Integer.parseInt(entry.getKey())).size());
                }
                @SuppressWarnings("unchecked")
                Map<String, List<Number>> edgeTo = (Map<String, List<Number>>) c.get("edgeTo");
                for (Map.Entry<String, List<Number>> entry : edgeTo.entrySet()) {
                    int vertex = Integer.parseInt(entry.getKey());
                    List<Integer> expected = entry.getValue().stream().map(Number::intValue).toList();
                    List<Integer> actual =
                            g.neighbors(vertex).stream().map(Graph.Edge::to).toList();
                    assertEquals(expected, actual);
                }
            }
        }

    @Test
        void floydWarshallPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("floyd-warshall-goldens.json")));
            for (Map<String, Object> c : cases) {
                int n = ((Number) c.get("n")).intValue();
                int[][] dist = FloydWarshallPractice.allPairsDistances(n, parseWeightedEdges(c.get("edges")));
                @SuppressWarnings("unchecked")
                List<List<Object>> pairs = (List<List<Object>>) c.get("pairs");
                for (List<Object> p : pairs) {
                    int i = ((Number) p.get(0)).intValue();
                    int j = ((Number) p.get(1)).intValue();
                    assertEquals(((Number) p.get(2)).intValue(), dist[i][j]);
                }
            }
        }

    @Test
        void fenwickTreePracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("fenwick-tree-goldens.json")));
            for (Map<String, Object> c : cases) {
                FenwickTreePractice ft = new FenwickTreePractice(((Number) c.get("n")).intValue());
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

    @Test
        void bipartiteCheckPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("bipartite-check-goldens.json")));
            for (Map<String, Object> c : cases) {
                int n = ((Number) c.get("n")).intValue();
                assertEquals(
                        c.get("expected"),
                        BipartiteCheckPractice.isBipartite(n, parseFlexEdges(c.get("edges"))));
            }
        }

    @Test
        void tarjanSccPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("tarjan-scc-goldens.json")));
            for (Map<String, Object> c : cases) {
                int n = ((Number) c.get("n")).intValue();
                List<Integer> sizes = TarjanSccPractice.componentSizesSorted(n, parseFlexEdges(c.get("edges")));
                assertEquals(((Number) c.get("componentCount")).intValue(), sizes.size());
                @SuppressWarnings("unchecked")
                List<Object> expected = (List<Object>) c.get("componentSizes");
                assertEquals(expected.stream().map(v -> ((Number) v).intValue()).toList(), sizes);
            }
        }

    @Test
        void kosarajuPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("kosaraju-goldens.json")));
            for (Map<String, Object> c : cases) {
                int n = ((Number) c.get("n")).intValue();
                List<Integer> sizes = KosarajuPractice.componentSizesSorted(n, parseFlexEdges(c.get("edges")));
                assertEquals(((Number) c.get("componentCount")).intValue(), sizes.size());
                @SuppressWarnings("unchecked")
                List<Object> expected = (List<Object>) c.get("componentSizes");
                assertEquals(expected.stream().map(v -> ((Number) v).intValue()).toList(), sizes);
            }
        }

    @Test
        void edmondsKarpPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("edmonds-karp-goldens.json")));
            for (Map<String, Object> c : cases) {
                assertEquals(
                        ((Number) c.get("maxFlow")).intValue(),
                        EdmondsKarpPractice.maxFlow(
                                ((Number) c.get("n")).intValue(),
                                parseWeightedEdges(c.get("edges")),
                                ((Number) c.get("source")).intValue(),
                                ((Number) c.get("sink")).intValue()));
            }
        }

    @Test
        void matrixChainPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("matrix-chain-goldens.json")));
            for (Map<String, Object> c : cases) {
                assertEquals(
                        ((Number) c.get("expected")).longValue(),
                        MatrixChainPractice.minMultiplications(GoldenIntArrays.parse(c.get("dimensions"))));
            }
        }

    @Test
        void rodCuttingPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("rod-cutting-goldens.json")));
            for (Map<String, Object> c : cases) {
                int[] prices = GoldenIntArrays.parse(c.get("prices"));
                int length = ((Number) c.get("length")).intValue();
                if (Boolean.TRUE.equals(c.get("expectError"))) {
                    assertThrows(IllegalArgumentException.class, () -> RodCuttingPractice.maxProfit(prices, length));
                } else {
                    assertEquals(((Number) c.get("expected")).intValue(), RodCuttingPractice.maxProfit(prices, length));
                }
            }
        }

    @Test
        void partitionEqualSubsetPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("partition-equal-subset-goldens.json")));
            for (Map<String, Object> c : cases) {
                assertEquals(
                        c.get("expected"),
                        PartitionEqualSubsetPractice.canPartition(GoldenIntArrays.parse(c.get("nums"))));
            }
        }

    @Test
        void longestPalindromicSubsequencePracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(
                            Files.readString(toolsJson("longest-palindromic-subsequence-goldens.json")));
            for (Map<String, Object> c : cases) {
                assertEquals(
                        ((Number) c.get("expected")).intValue(),
                        LongestPalindromicSubsequencePractice.length((String) c.get("s")));
            }
        }

    @Test
        void insertionSortPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("insertion-sort-goldens.json")));
            for (Map<String, Object> c : cases) {
                assertArrayEquals(
                        GoldenIntArrays.parse(c.get("sorted")),
                        InsertionSortPractice.sort(GoldenIntArrays.parse(c.get("input"))));
            }
        }

    @Test
        void selectionSortPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("selection-sort-goldens.json")));
            for (Map<String, Object> c : cases) {
                assertArrayEquals(
                        GoldenIntArrays.parse(c.get("sorted")),
                        SelectionSortPractice.sort(GoldenIntArrays.parse(c.get("input"))));
            }
        }

    @Test
        void zAlgorithmPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("z-algorithm-goldens.json")));
            for (Map<String, Object> c : cases) {
                String text = (String) c.get("text");
                String pattern = (String) c.get("pattern");
                assertEquals(((Number) c.get("index")).intValue(), ZAlgorithmPractice.search(text, pattern));
                @SuppressWarnings("unchecked")
                List<Object> z = (List<Object>) c.get("z");
                int[] expected = z.stream().mapToInt(n -> ((Number) n).intValue()).toArray();
                assertArrayEquals(expected, ZAlgorithmPractice.zArray(text));
            }
        }

    @Test
        void manacherPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("manacher-goldens.json")));
            for (Map<String, Object> c : cases) {
                assertEquals(
                        ((Number) c.get("expected")).intValue(),
                        ManacherPractice.longestPalindromeLength((String) c.get("s")));
            }
        }

    @Test
        void ahoCorasickPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("aho-corasick-goldens.json")));
            for (Map<String, Object> c : cases) {
                String text = (String) c.get("text");
                @SuppressWarnings("unchecked")
                List<String> patterns = (List<String>) c.get("patterns");
                @SuppressWarnings("unchecked")
                List<Object> hits = (List<Object>) c.get("hits");
                assertEquals(
                        hits.stream().map(n -> ((Number) n).intValue()).toList(),
                        AhoCorasickPractice.search(text, patterns));
            }
        }

    @Test
        void avlTreePracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("avl-tree-goldens.json")));
            for (Map<String, Object> c : cases) {
                AvlTreePractice tree = new AvlTreePractice();
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
        void redBlackTreePracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("red-black-tree-goldens.json")));
            for (Map<String, Object> c : cases) {
                RedBlackTreePractice tree = new RedBlackTreePractice();
                @SuppressWarnings("unchecked")
                List<List<Object>> inserts = (List<List<Object>>) c.get("inserts");
                for (List<Object> pair : inserts) {
                    tree.insert(((Number) pair.get(0)).intValue(), ((Number) pair.get(1)).intValue());
                }
                @SuppressWarnings("unchecked")
                List<List<Object>> searches = (List<List<Object>>) c.get("searches");
                for (List<Object> pair : searches) {
                    assertEquals(
                            ((Number) pair.get(1)).intValue(),
                            tree.search(((Number) pair.get(0)).intValue()));
                }
                assertEquals(null, tree.search(((Number) c.get("searchMiss")).intValue()));
            }
        }

    @Test
        void singlyLinkedListPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("singly-linked-list-goldens.json")));
            for (Map<String, Object> c : cases) {
                SinglyLinkedListPractice list = new SinglyLinkedListPractice();
                @SuppressWarnings("unchecked")
                List<Number> addLast = (List<Number>) c.get("addLast");
                if (addLast.isEmpty()) {
                    assertEquals(0, list.size());
                    continue;
                }
                for (Number n : addLast) {
                    list.addLast(n.intValue());
                }
                assertEquals(((Number) c.get("getValue")).intValue(), list.get(((Number) c.get("getIndex")).intValue()));
                assertEquals(
                        ((Number) c.get("removeValue")).intValue(),
                        list.remove(((Number) c.get("removeIndex")).intValue()));
                assertEquals(((Number) c.get("sizeAfter")).intValue(), list.size());
            }
        }

    @Test
        void doublyLinkedListPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("doubly-linked-list-goldens.json")));
            for (Map<String, Object> c : cases) {
                DoublyLinkedListPractice list = new DoublyLinkedListPractice();
                @SuppressWarnings("unchecked")
                List<Number> addLast = (List<Number>) c.get("addLast");
                @SuppressWarnings("unchecked")
                List<Number> addFirst = (List<Number>) c.get("addFirst");
                if (Boolean.TRUE.equals(c.get("empty")) && addLast.isEmpty() && addFirst.isEmpty()) {
                    assertEquals(0, list.size());
                    continue;
                }
                for (Number n : addLast) {
                    list.addLast(n.intValue());
                }
                for (Number n : addFirst) {
                    list.addFirst(n.intValue());
                }
                assertEquals(((Number) c.get("getValue")).intValue(), list.get(((Number) c.get("getIndex")).intValue()));
                assertEquals(
                        ((Number) c.get("removeValue")).intValue(),
                        list.remove(((Number) c.get("removeIndex")).intValue()));
                assertEquals(((Number) c.get("sizeAfter")).intValue(), list.size());
            }
        }

    @Test
        void treeTraversalsPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("tree-traversals-goldens.json")));
            for (Map<String, Object> c : cases) {
                TreeTraversalsPractice tree = new TreeTraversalsPractice();
                @SuppressWarnings("unchecked")
                List<List<Object>> inserts = (List<List<Object>>) c.get("inserts");
                for (List<Object> pair : inserts) {
                    tree.insert(((Number) pair.get(0)).intValue(), (String) pair.get(1));
                }
                assertEquals(
                        ((List<?>) c.get("inOrder")).stream().map(v -> ((Number) v).intValue()).toList(),
                        tree.inOrder());
                assertEquals(
                        ((List<?>) c.get("preOrder")).stream().map(v -> ((Number) v).intValue()).toList(),
                        tree.preOrder());
                assertEquals(
                        ((List<?>) c.get("postOrder")).stream().map(v -> ((Number) v).intValue()).toList(),
                        tree.postOrder());
            }
        }

    @Test
        void separateChainingPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("separate-chaining-goldens.json")));
            for (Map<String, Object> c : cases) {
                SeparateChainingPractice table = new SeparateChainingPractice();
                @SuppressWarnings("unchecked")
                List<List<Object>> ops = (List<List<Object>>) c.get("ops");
                for (List<Object> op : ops) {
                    table.put((String) op.get(1), ((Number) op.get(2)).intValue());
                }
                @SuppressWarnings("unchecked")
                Map<String, Object> get = (Map<String, Object>) c.get("get");
                Object expectedValue = get.get("value");
                if (expectedValue == null) {
                    assertEquals(null, table.get((String) get.get("key")));
                } else {
                    assertEquals(((Number) expectedValue).intValue(), table.get((String) get.get("key")));
                }
                if (c.get("getMissing") != null) {
                    @SuppressWarnings("unchecked")
                    Map<String, Object> missing = (Map<String, Object>) c.get("getMissing");
                    assertEquals(null, table.get((String) missing.get("key")));
                }
            }
        }

    @Test
        void openAddressingPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("open-addressing-goldens.json")));
            for (Map<String, Object> c : cases) {
                OpenAddressingPractice table = new OpenAddressingPractice();
                @SuppressWarnings("unchecked")
                List<List<Object>> ops = (List<List<Object>>) c.get("ops");
                for (List<Object> op : ops) {
                    table.put(((Number) op.get(1)).intValue(), (String) op.get(2));
                }
                @SuppressWarnings("unchecked")
                Map<String, Object> get = (Map<String, Object>) c.get("get");
                assertEquals(get.get("value"), table.get(((Number) get.get("key")).intValue()));
                @SuppressWarnings("unchecked")
                Map<String, Object> remove = (Map<String, Object>) c.get("remove");
                assertEquals((Boolean) remove.get("present"), table.remove(((Number) remove.get("key")).intValue()));
                @SuppressWarnings("unchecked")
                Map<String, Object> after = (Map<String, Object>) c.get("getAfterRemove");
                assertEquals(null, table.get(((Number) after.get("key")).intValue()));
            }
        }

    @Test
        void suffixArrayPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("suffix-array-goldens.json")));
            for (Map<String, Object> c : cases) {
                @SuppressWarnings("unchecked")
                List<Object> expected = (List<Object>) c.get("sa");
                int[] exp = expected.stream().mapToInt(n -> ((Number) n).intValue()).toArray();
                assertArrayEquals(exp, SuffixArrayPractice.build((String) c.get("s")));
            }
        }

    @Test
        void treapPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("treap-goldens.json")));
            for (Map<String, Object> c : cases) {
                long seed = ((Number) c.get("seed")).longValue();
                TreapPractice treap = new TreapPractice(seed);
                @SuppressWarnings("unchecked")
                List<List<Object>> inserts = (List<List<Object>>) c.get("inserts");
                for (List<Object> pair : inserts) {
                    treap.insert(((Number) pair.get(0)).intValue(), ((Number) pair.get(1)).intValue());
                }
                @SuppressWarnings("unchecked")
                List<Map<String, Object>> searchResults = (List<Map<String, Object>>) c.get("searchResults");
                for (Map<String, Object> row : searchResults) {
                    int key = ((Number) row.get("key")).intValue();
                    Object expected = row.get("value");
                    assertEquals(expected, treap.search(key));
                }
            }
        }

    @Test
        void orderStatisticTreePracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("order-statistic-tree-goldens.json")));
            for (Map<String, Object> c : cases) {
                OrderStatisticTreePractice tree = new OrderStatisticTreePractice();
                @SuppressWarnings("unchecked")
                List<List<Object>> inserts = (List<List<Object>>) c.get("inserts");
                if (inserts.isEmpty()) {
                    assertThrows(IllegalArgumentException.class, () -> tree.select(1));
                    assertEquals(((Number) c.get("rank5")).intValue(), tree.rank(5));
                    continue;
                }
                for (List<Object> pair : inserts) {
                    tree.insert(((Number) pair.get(0)).intValue(), (String) pair.get(1));
                }
                if (c.get("selectK") != null) {
                    assertEquals(
                            ((Number) c.get("selectKey")).intValue(),
                            tree.select(((Number) c.get("selectK")).intValue()));
                    assertEquals(1, tree.rank(((Number) c.get("rankKey")).intValue()));
                    continue;
                }
                assertEquals(((Number) c.get("select3")).intValue(), tree.select(3));
                assertEquals(((Number) c.get("rank5")).intValue(), tree.rank(5));
            }
        }

    @Test
        void intervalTreePracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("interval-tree-goldens.json")));
            for (Map<String, Object> c : cases) {
                if (Boolean.TRUE.equals(c.get("expectError"))) {
                    IntervalTreePractice tree = new IntervalTreePractice();
                    @SuppressWarnings("unchecked")
                    List<List<Object>> badInserts = (List<List<Object>>) c.get("inserts");
                    assertThrows(IllegalArgumentException.class, () -> {
                        for (List<Object> iv : badInserts) {
                            tree.insert(((Number) iv.get(0)).intValue(), ((Number) iv.get(1)).intValue());
                        }
                    });
                    continue;
                }
                IntervalTreePractice tree = new IntervalTreePractice();
                @SuppressWarnings("unchecked")
                List<List<Object>> inserts = (List<List<Object>>) c.get("inserts");
                for (List<Object> iv : inserts) {
                    tree.insert(((Number) iv.get(0)).intValue(), ((Number) iv.get(1)).intValue());
                }
                @SuppressWarnings("unchecked")
                List<Object> q = (List<Object>) c.get("query");
                @SuppressWarnings("unchecked")
                List<List<Object>> expected = (List<List<Object>>) c.get("overlaps");
                List<List<Integer>> exp =
                        expected.stream()
                                .map(row -> List.of(((Number) row.get(0)).intValue(), ((Number) row.get(1)).intValue()))
                                .toList();
                assertEquals(
                        exp,
                        tree.overlapSorted(((Number) q.get(0)).intValue(), ((Number) q.get(1)).intValue()));
            }
        }

    @Test
        void bTreePracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("b-tree-goldens.json")));
            for (Map<String, Object> c : cases) {
                if (Boolean.TRUE.equals(c.get("expectError"))) {
                    assertThrows(IllegalArgumentException.class, () -> new BTreePractice(((Number) c.get("t")).intValue()));
                    continue;
                }
                BTreePractice tree = new BTreePractice(((Number) c.get("t")).intValue());
                @SuppressWarnings("unchecked")
                List<Object> inserts = (List<Object>) c.get("inserts");
                for (Object key : inserts) {
                    tree.insert(((Number) key).intValue());
                }
                @SuppressWarnings("unchecked")
                List<Map<String, Object>> searches = (List<Map<String, Object>>) c.get("searches");
                for (Map<String, Object> spec : searches) {
                    assertEquals(spec.get("found"), tree.search(((Number) spec.get("key")).intValue()));
                }
            }
        }

    @Test
        void bloomFilterPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("bloom-filter-goldens.json")));
            for (Map<String, Object> c : cases) {
                BloomFilterPractice bf =
                        new BloomFilterPractice(
                                ((Number) c.get("expectedItems")).intValue(),
                                ((Number) c.get("falsePositiveRate")).doubleValue());
                @SuppressWarnings("unchecked")
                List<String> add = (List<String>) c.get("add");
                for (String item : add) {
                    bf.add(item);
                }
                @SuppressWarnings("unchecked")
                List<Map<String, Object>> queries = (List<Map<String, Object>>) c.get("queries");
                for (Map<String, Object> q : queries) {
                    assertEquals((Boolean) q.get("expected"), bf.mightContain((String) q.get("item")));
                }
            }
        }

    @Test
        void boruvkaMstPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("boruvka-mst-goldens.json")));
            for (Map<String, Object> c : cases) {
                int n = ((Number) c.get("n")).intValue();
                int[][] edges = parseWeightedEdges(c.get("edges"));
                assertEquals(((Number) c.get("totalWeight")).intValue(), BoruvkaMstPractice.totalWeight(n, edges));
            }
        }

    @Test
        void aStarPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("a-star-goldens.json")));
            for (Map<String, Object> c : cases) {
                int n = ((Number) c.get("n")).intValue();
                int[][] edges = parseWeightedEdges(c.get("edges"));
                assertEquals(
                        ((Number) c.get("length")).longValue(),
                        AStarPractice.shortestPathLength(
                                n, edges, ((Number) c.get("source")).intValue(), ((Number) c.get("goal")).intValue()));
            }
        }

    @Test
        void articulationBridgesPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("articulation-bridges-goldens.json")));
            for (Map<String, Object> c : cases) {
                int n = ((Number) c.get("n")).intValue();
                int[][] edges = parseEdgePairs(c.get("edges"));
                ArticulationBridgesPractice.Result result = ArticulationBridgesPractice.find(n, edges);
                @SuppressWarnings("unchecked")
                List<Object> expectedAp = (List<Object>) c.get("articulationPoints");
                assertEquals(expectedAp.stream().map(v -> ((Number) v).intValue()).toList(), result.articulationPoints());
                @SuppressWarnings("unchecked")
                List<List<Object>> expectedBr = (List<List<Object>>) c.get("bridges");
                List<int[]> bridges = result.bridges();
                assertEquals(expectedBr.size(), bridges.size());
                for (int i = 0; i < expectedBr.size(); i++) {
                    assertEquals(((Number) expectedBr.get(i).get(0)).intValue(), bridges.get(i)[0]);
                    assertEquals(((Number) expectedBr.get(i).get(1)).intValue(), bridges.get(i)[1]);
                }
            }
        }

    @Test
        void hungarianPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("hungarian-goldens.json")));
            for (Map<String, Object> c : cases) {
                assertEquals(((Number) c.get("minCost")).intValue(), HungarianPractice.minCost(toIntMatrix(c.get("cost"))));
            }
        }

    @Test
        void lcaBinaryLiftingPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("lca-binary-lifting-goldens.json")));
            for (Map<String, Object> c : cases) {
                @SuppressWarnings("unchecked")
                List<Object> parentRaw = (List<Object>) c.get("parent");
                int[] parent = parentRaw.stream().mapToInt(n -> ((Number) n).intValue()).toArray();
                LcaBinaryLiftingPractice lca = new LcaBinaryLiftingPractice(parent);
                @SuppressWarnings("unchecked")
                List<List<Object>> queries = (List<List<Object>>) c.get("queries");
                for (List<Object> q : queries) {
                    assertEquals(
                            ((Number) q.get(2)).intValue(),
                            lca.query(((Number) q.get(0)).intValue(), ((Number) q.get(1)).intValue()));
                }
            }
        }

    @Test
        void sparseTablePracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("sparse-table-goldens.json")));
            for (Map<String, Object> c : cases) {
                SparseTablePractice st = new SparseTablePractice(GoldenIntArrays.parse(c.get("initial")));
                @SuppressWarnings("unchecked")
                List<List<Object>> queries = (List<List<Object>>) c.get("queries");
                for (List<Object> q : queries) {
                    assertEquals(
                            ((Number) q.get(2)).intValue(),
                            st.query(((Number) q.get(0)).intValue(), ((Number) q.get(1)).intValue()));
                }
            }
        }

    @Test
        void tspBitmaskPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("tsp-bitmask-goldens.json")));
            for (Map<String, Object> c : cases) {
                assertEquals(((Number) c.get("expected")).longValue(), TspBitmaskPractice.minCost(toIntMatrix(c.get("dist"))));
            }
        }

    @Test
        void reservoirSamplingPracticeGoldens() throws Exception {
            List<Map<String, Object>> cases =
                    GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("reservoir-sampling-goldens.json")));
            for (Map<String, Object> c : cases) {
                int[] stream = GoldenIntArrays.parse(c.get("stream"));
                int k = ((Number) c.get("k")).intValue();
                int seed = ((Number) c.get("seed")).intValue();
                @SuppressWarnings("unchecked")
                List<Object> expectedRaw = (List<Object>) c.get("expected");
                List<Integer> expected = expectedRaw.stream().map(n -> ((Number) n).intValue()).toList();
                assertEquals(expected, ReservoirSamplingPractice.sample(stream, k, seed), c.toString());
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
    private static char[][] parseGrid(Object raw) {
        if (raw == null) {
            return new char[0][];
        }
        List<List<String>> rows = (List<List<String>>) raw;
        char[][] grid = new char[rows.size()][];
        for (int r = 0; r < rows.size(); r++) {
            List<String> row = rows.get(r);
            grid[r] = new char[row.size()];
            for (int c = 0; c < row.size(); c++) {
                grid[r][c] = row.get(c).charAt(0);
            }
        }
        return grid;
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
    private static int[][] toMatrix(Object raw) {
        if (raw == null) {
            return new int[0][];
        }
        List<List<Number>> rows = (List<List<Number>>) raw;
        int[][] m = new int[rows.size()][];
        for (int i = 0; i < rows.size(); i++) {
            List<Number> row = rows.get(i);
            m[i] = new int[] {row.get(0).intValue(), row.get(1).intValue()};
        }
        return m;
    }

    @SuppressWarnings("unchecked")
    private static List<Integer> parseIntList(Object raw) {
        List<Object> list = (List<Object>) raw;
        List<Integer> out = new ArrayList<>();
        for (Object o : list) {
            out.add(((Number) o).intValue());
        }
        return out;
    }

    @SuppressWarnings("unchecked")
    private static Integer[] parseNullableInts(Object raw) {
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
    private static List<List<Integer>> parseLevelExpected(Object raw) {
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


@SuppressWarnings("unchecked")
    private static int[][] parseFlexEdges(Object raw) {
        List<Object> rows = (List<Object>) raw;
        int[][] out = new int[rows.size()][];
        for (int i = 0; i < rows.size(); i++) {
            List<Object> e = (List<Object>) rows.get(i);
            if (e.size() == 2) {
                out[i] = new int[] { ((Number) e.get(0)).intValue(), ((Number) e.get(1)).intValue() };
            } else {
                out[i] =
                        new int[] {
                            ((Number) e.get(0)).intValue(),
                            ((Number) e.get(1)).intValue(),
                            ((Number) e.get(2)).intValue()
                        };
            }
        }
        return out;
    }

    @SuppressWarnings("unchecked")
    private static int[][] toIntMatrix(Object raw) {
        List<List<Object>> rows = (List<List<Object>>) raw;
        int[][] m = new int[rows.size()][];
        for (int i = 0; i < rows.size(); i++) {
            List<Object> row = rows.get(i);
            m[i] = row.stream().mapToInt(n -> ((Number) n).intValue()).toArray();
        }
        return m;
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
