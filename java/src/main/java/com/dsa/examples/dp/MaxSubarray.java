// Dynamic Programming — Maximum subarray (Kadane)

package com.dsa.examples.dp;

/**
 * Largest sum of any contiguous subarray.
 * Technique: Kadane's algorithm
 * Invariant: {@code cur} is the best sum ending at the current index.
 * maxSubarray: Time O(n); Space O(1).
 */
public final class MaxSubarray {

    private MaxSubarray() {
    }

    /**
     * Returns maximum contiguous subarray sum ({@code nums} must be non-empty).
     * Time: O(n); Space: O(1).
     */
    public static int maxSubarray(int[] nums) {
        if (nums == null || nums.length == 0) {
            throw new IllegalArgumentException("nums must be non-empty");
        }
        int best = nums[0];
        int cur = nums[0];
        for (int i = 1; i < nums.length; i++) {
            cur = Math.max(nums[i], cur + nums[i]);
            best = Math.max(best, cur);
        }
        return best;
    }
}
