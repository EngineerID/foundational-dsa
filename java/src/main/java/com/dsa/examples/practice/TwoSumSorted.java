// Practice — Two Sum II

package com.dsa.examples.practice;

/** Two pointers on a sorted array; returns 1-based indices. */
public final class TwoSumSorted {

    private TwoSumSorted() {
    }

    public static int[] solve(int[] nums, int target) {
        int lo = 0;
        int hi = nums.length - 1;
        while (lo < hi) {
            int sum = nums[lo] + nums[hi];
            if (sum == target) {
                return new int[] { lo + 1, hi + 1 };
            }
            if (sum < target) {
                lo++;
            } else {
                hi--;
            }
        }
        throw new IllegalArgumentException("no solution");
    }
}
