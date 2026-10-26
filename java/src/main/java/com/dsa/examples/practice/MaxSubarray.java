// Practice — Maximum subarray (Kadane)

package com.dsa.examples.practice;

public final class MaxSubarray {

    private MaxSubarray() {
    }

    public static int solve(int[] nums) {
        int best = nums[0];
        int cur = nums[0];
        for (int i = 1; i < nums.length; i++) {
            cur = Math.max(nums[i], cur + nums[i]);
            best = Math.max(best, cur);
        }
        return best;
    }
}
