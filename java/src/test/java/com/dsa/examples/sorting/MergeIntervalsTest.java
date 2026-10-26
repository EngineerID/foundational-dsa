package com.dsa.examples.sorting;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

class MergeIntervalsTest {

    @Test
    void mergeIntervals() {
        int[][] merged = MergeIntervals.mergeIntervals(new int[][] {{1, 3}, {2, 6}, {8, 10}, {15, 18}});
        assertArrayEquals(new int[][] {{1, 6}, {8, 10}, {15, 18}}, merged);
        assertArrayEquals(new int[0][], MergeIntervals.mergeIntervals(new int[0][]));
    }
}
