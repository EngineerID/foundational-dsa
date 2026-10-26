// Sorting — Merge intervals

package com.dsa.examples.sorting;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

/**
 * Merge overlapping closed intervals [start, end].
 * Technique: Sort by start, linear merge
 * Invariant: Merged list is sorted and pairwise non-overlapping.
 * mergeIntervals: Time O(n log n); Space O(n).
 */
public final class MergeIntervals {

    private MergeIntervals() {
    }

    /**
     * Returns merged intervals sorted by start. {@code null} treated as empty.
     * Time: O(n log n); Space O(n).
     */
    public static int[][] mergeIntervals(int[][] intervals) {
        if (intervals == null || intervals.length == 0) {
            return new int[0][];
        }
        int[][] copy = Arrays.copyOf(intervals, intervals.length);
        Arrays.sort(copy, Comparator.comparingInt(a -> a[0]));
        List<int[]> merged = new ArrayList<>();
        merged.add(new int[] {copy[0][0], copy[0][1]});
        for (int i = 1; i < copy.length; i++) {
            int start = copy[i][0];
            int end = copy[i][1];
            int[] last = merged.get(merged.size() - 1);
            if (start <= last[1]) {
                last[1] = Math.max(last[1], end);
            } else {
                merged.add(new int[] {start, end});
            }
        }
        return merged.toArray(new int[0][]);
    }
}
