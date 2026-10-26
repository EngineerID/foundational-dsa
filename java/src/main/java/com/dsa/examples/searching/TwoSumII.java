// Searching — Two Sum II (sorted array)

package com.dsa.examples.searching;

/**
 * Two-pointer pair sum on a sorted array; returns 1-based indices.
 * Technique: Two pointers
 * Invariant: Answer lies in the current [lo, hi] window if it exists.
 * twoSumSorted: Time O(n); Space O(1).
 */
public final class TwoSumII {

    private TwoSumII() {
    }

    /**
     * Returns 1-based indices {@code [i, j]} with {@code i < j} and {@code nums[i-1]+nums[j-1]==target}.
     * Assumes exactly one solution when valid. Empty input or no pair throws {@link IllegalArgumentException}.
     * Time: O(n); Space O(1).
     */
    public static int[] twoSumSorted(int[] nums, int target) {
        if (nums == null || nums.length < 2) {
            throw new IllegalArgumentException("nums must have at least two elements");
        }
        int lo = 0;
        int hi = nums.length - 1;
        while (lo < hi) {
            int sum = nums[lo] + nums[hi];
            if (sum == target) {
                return new int[] {lo + 1, hi + 1};
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
