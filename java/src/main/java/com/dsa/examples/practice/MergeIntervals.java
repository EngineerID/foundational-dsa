// Practice — Merge intervals

package com.dsa.examples.practice;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public final class MergeIntervals {

    private MergeIntervals() {
    }

    public static int[][] merge(int[][] intervals) {
        if (intervals.length == 0) {
            return new int[0][];
        }
        Arrays.sort(intervals, Comparator.comparingInt(a -> a[0]));
        List<int[]> merged = new ArrayList<>();
        merged.add(new int[] { intervals[0][0], intervals[0][1] });
        for (int i = 1; i < intervals.length; i++) {
            int start = intervals[i][0];
            int end = intervals[i][1];
            int[] last = merged.get(merged.size() - 1);
            if (start <= last[1]) {
                last[1] = Math.max(last[1], end);
            } else {
                merged.add(new int[] { start, end });
            }
        }
        return merged.toArray(new int[0][]);
    }
}
