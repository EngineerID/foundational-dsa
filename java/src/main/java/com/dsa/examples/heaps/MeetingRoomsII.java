// Heaps — Meeting rooms II

package com.dsa.examples.heaps;

import java.util.Arrays;
import java.util.PriorityQueue;

/**
 * Minimum conference rooms for overlapping [start, end) meetings.
 * Technique: Sort by start + min-heap of end times
 * Invariant: Heap size is concurrent meetings after each event.
 * minMeetingRooms: Time O(n log n); Space O(n).
 */
public final class MeetingRoomsII {

    private MeetingRoomsII() {
    }

    /**
     * Returns minimum rooms needed. {@code null} or empty → {@code 0}.
     * Time: O(n log n); Space O(n).
     */
    public static int minMeetingRooms(int[][] intervals) {
        if (intervals == null || intervals.length == 0) {
            return 0;
        }
        int[][] copy = Arrays.copyOf(intervals, intervals.length);
        Arrays.sort(copy, (a, b) -> Integer.compare(a[0], b[0]));
        PriorityQueue<Integer> ends = new PriorityQueue<>();
        for (int[] iv : copy) {
            if (!ends.isEmpty() && ends.peek() <= iv[0]) {
                ends.poll();
            }
            ends.offer(iv[1]);
        }
        return ends.size();
    }
}
