// Searching — Trapping rain water

package com.dsa.examples.searching;

/**
 * Trapped water between elevation bars using two pointers.
 * Technique: Two pointers
 * Invariant: Process the lower side of the current window.
 * trap: Time O(n); Space O(1).
 */
public final class TrappingRainWater {

    private TrappingRainWater() {
    }

    /**
     * Total trapped water for non-negative bar heights. {@code null} treated as empty.
     * Time: O(n); Space O(1).
     */
    public static int trap(int[] height) {
        if (height == null || height.length < 3) {
            return 0;
        }
        int left = 0;
        int right = height.length - 1;
        int leftMax = 0;
        int rightMax = 0;
        int water = 0;
        while (left < right) {
            if (height[left] <= height[right]) {
                leftMax = Math.max(leftMax, height[left]);
                water += leftMax - height[left];
                left++;
            } else {
                rightMax = Math.max(rightMax, height[right]);
                water += rightMax - height[right];
                right--;
            }
        }
        return water;
    }
}
