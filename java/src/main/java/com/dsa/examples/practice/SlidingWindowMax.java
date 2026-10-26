// Practice — Sliding window maximum (monotonic deque)

package com.dsa.examples.practice;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

public final class SlidingWindowMax {

    private SlidingWindowMax() {
    }

    public static int[] maxSlidingWindow(int[] nums, int k) {
        if (k <= 0) {
            throw new IllegalArgumentException("k must be positive");
        }
        int n = nums.length;
        if (n == 0) {
            return new int[0];
        }
        Deque<Integer> dq = new ArrayDeque<>();
        List<Integer> out = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            while (!dq.isEmpty() && nums[dq.peekLast()] <= nums[i]) {
                dq.removeLast();
            }
            dq.addLast(i);
            while (dq.peekFirst() <= i - k) {
                dq.removeFirst();
            }
            if (i >= k - 1) {
                out.add(nums[dq.peekFirst()]);
            }
        }
        return out.stream().mapToInt(Integer::intValue).toArray();
    }
}
