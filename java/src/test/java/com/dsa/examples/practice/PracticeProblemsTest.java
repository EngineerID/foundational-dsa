package com.dsa.examples.practice;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class PracticeProblemsTest {

    @Test
    void twoSumSorted() {
        assertArrayEquals(new int[] { 1, 2 }, TwoSumSorted.solve(new int[] { 2, 7, 11, 15 }, 9));
    }

    @Test
    void maxSubarray() {
        assertEquals(6, MaxSubarray.solve(new int[] { -2, 1, -3, 4, -1, 2, 1, -5, 4 }));
    }

    @Test
    void validParentheses() {
        assertTrue(ValidParentheses.solve("()[]{}"));
        assertFalse(ValidParentheses.solve("(]"));
    }

    @Test
    void meetingRooms() {
        assertEquals(2, MeetingRooms.minRooms(new int[][] { { 0, 30 }, { 5, 10 }, { 15, 20 } }));
    }

    @Test
    void numIslands() {
        char[][] grid = {
                { '1', '1', '0', '0', '0' },
                { '1', '1', '0', '0', '0' },
                { '0', '0', '1', '0', '0' },
                { '0', '0', '0', '1', '1' },
        };
        assertEquals(3, NumIslands.count(grid));
    }

    @Test
    void topKFrequent() {
        assertEquals(java.util.List.of(1, 2), TopKFrequent.solve(new int[] { 1, 1, 1, 2, 2, 3 }, 2));
    }

    @Test
    void courseSchedule() {
        assertTrue(CourseSchedule.canFinish(2, new int[][] { { 1, 0 } }));
        assertFalse(CourseSchedule.canFinish(2, new int[][] { { 1, 0 }, { 0, 1 } }));
    }

    @Test
    void longestSubstring() {
        assertEquals(3, LongestSubstring.lengthOfLongestSubstring("abcabcbb"));
    }

    @Test
    void coinChangePractice() {
        assertEquals(3, CoinChangePractice.minCoins(new int[] { 1, 2, 5 }, 11));
    }

    @Test
    void lruCacheDesign() {
        LRUCacheDesign cache = new LRUCacheDesign(2);
        cache.put(1, 1);
        cache.put(2, 2);
        assertEquals(1, cache.get(1));
        cache.put(3, 3);
        assertEquals(-1, cache.get(2));
        assertEquals(3, cache.get(3));
    }

    @Test
    void mergeIntervals() {
        int[][] merged = MergeIntervals.merge(new int[][] { { 1, 3 }, { 2, 6 }, { 8, 10 }, { 15, 18 } });
        assertArrayEquals(new int[] { 1, 6 }, merged[0]);
        assertArrayEquals(new int[] { 8, 10 }, merged[1]);
        assertArrayEquals(new int[] { 15, 18 }, merged[2]);
    }

    @Test
    void levelOrder() {
        List<List<Integer>> levels = LevelOrderTraversal.levelOrder(
                new Integer[] { 3, 9, 20, null, null, 15, 7 });
        assertEquals(List.of(List.of(3), List.of(9, 20), List.of(15, 7)), levels);
    }

    @Test
    void wordSearch() {
        assertTrue(WordSearch.exists(
                new char[][] {
                        { 'A', 'B', 'C', 'E' },
                        { 'S', 'F', 'C', 'S' },
                        { 'A', 'D', 'E', 'E' },
                },
                "ABCCED"));
        assertFalse(WordSearch.exists(
                new char[][] {
                        { 'A', 'B', 'C', 'E' },
                        { 'S', 'F', 'C', 'S' },
                        { 'A', 'D', 'E', 'E' },
                },
                "ABCD"));
    }

    @Test
    void kthLargest() {
        assertEquals(5, KthLargest.solve(new int[] { 3, 2, 1, 5, 6, 4 }, 2));
    }

    @Test
    void mstKruskalPractice() {
        int weight = MstKruskalPractice.totalWeight(
                4, new int[][] { { 0, 1, 1 }, { 1, 2, 2 }, { 2, 3, 3 }, { 0, 3, 4 } });
        assertEquals(6, weight);
    }
}
