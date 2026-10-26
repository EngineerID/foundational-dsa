package com.dsa.examples.practice;

import org.junit.jupiter.api.Test;

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
}
