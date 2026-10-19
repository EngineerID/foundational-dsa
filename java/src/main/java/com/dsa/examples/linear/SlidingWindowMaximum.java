// Linear — Sliding window maximum

package com.dsa.examples.linear;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

/**
 * Maximum in each window of size k using a deque.
 * maxSlidingWindow: Time O(n); Space O(k).
 */
public final class SlidingWindowMaximum {

    private SlidingWindowMaximum() {
    }

    public static List<Integer> maxSlidingWindow(int[] nums, int k) {
        if (k <= 0) {
            throw new IllegalArgumentException("k must be positive");
        }
        List<Integer> out = new ArrayList<>();
        if (nums.length == 0) {
            return out;
        }
        Deque<Integer> dq = new ArrayDeque<>();
        for (int i = 0; i < nums.length; i++) {
            while (!dq.isEmpty() && nums[dq.peekLast()] <= nums[i]) {
                dq.pollLast();
            }
            dq.addLast(i);
            while (dq.peekFirst() <= i - k) {
                dq.pollFirst();
            }
            if (i >= k - 1) {
                out.add(nums[dq.peekFirst()]);
            }
        }
        return out;
    }
}
