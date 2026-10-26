// Practice — Meeting rooms II

package com.dsa.examples.practice;

import java.util.Arrays;
import java.util.PriorityQueue;

public final class MeetingRooms {

    private MeetingRooms() {
    }

    public static int minRooms(int[][] intervals) {
        if (intervals.length == 0) {
            return 0;
        }
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        PriorityQueue<Integer> ends = new PriorityQueue<>();
        for (int[] iv : intervals) {
            if (!ends.isEmpty() && ends.peek() <= iv[0]) {
                ends.poll();
            }
            ends.offer(iv[1]);
        }
        return ends.size();
    }
}
