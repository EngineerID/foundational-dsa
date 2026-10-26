// Linear — Monotonic stack (next greater element)

package com.dsa.examples.linear;

import java.util.ArrayDeque;
import java.util.Deque;

/**
 * Next strictly greater element to the right for each index.
 * Technique: Monotonic decreasing stack
 * Invariant: Stack holds indices with strictly decreasing values.
 * nextGreaterElement: Time O(n); Space O(n).
 */
public final class MonotonicStack {

    private MonotonicStack() {
    }

    /**
     * For each index {@code i}, returns the next value strictly greater than {@code nums[i]} to the
     * right, or {@code -1} if none. Empty input throws {@link IllegalArgumentException}.
     * Time: O(n); Space O(n).
     */
    public static int[] nextGreaterElement(int[] nums) {
        if (nums == null || nums.length == 0) {
            throw new IllegalArgumentException("nums must be non-empty");
        }
        int n = nums.length;
        int[] out = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();
        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && nums[stack.peek()] < nums[i]) {
                out[stack.pop()] = nums[i];
            }
            stack.push(i);
        }
        while (!stack.isEmpty()) {
            out[stack.pop()] = -1;
        }
        return out;
    }
}
