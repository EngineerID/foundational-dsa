// Practice — Trapping rain water (two pointers)

package com.dsa.examples.practice;

public final class TrappingRainWater {

    private TrappingRainWater() {
    }

    public static int trap(int[] height) {
        int n = height.length;
        if (n < 3) {
            return 0;
        }
        int left = 0;
        int right = n - 1;
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
