package com.dsa.examples.practice;

import com.dsa.examples.support.GoldenIntArrays;
import com.dsa.examples.support.GoldenJson;
import org.junit.jupiter.api.Test;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
/** Practice interview implementations vs shared catalog golden JSON (19 fixtures). */
class PracticeInterviewGoldensTest {

    private static Path toolsJson(String name) {
        return Path.of("..", "tools", name).toAbsolutePath().normalize();
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
    void maximumSubarrayGoldens() throws Exception {
        List<Map<String, Object>> cases =
                GoldenJson.parseArrayOfObjects(Files.readString(toolsJson("maximum-subarray-goldens.json")));
        for (Map<String, Object> c : cases) {
            int[] nums = GoldenIntArrays.parse(c.get("nums"));
            if (Boolean.TRUE.equals(c.get("expectError"))) {
                assertThrows(Exception.class, () -> MaxSubarray.solve(nums), c.toString());
            } else {
                assertEquals(
                        ((Number) c.get("expected")).intValue(),
                        MaxSubarray.solve(nums),
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
}
