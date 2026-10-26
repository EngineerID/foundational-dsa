// Practice — Kth largest element

package com.dsa.examples.practice;

import com.dsa.examples.searching.QuickSelect;

public final class KthLargest {

    private KthLargest() {
    }

    public static int solve(int[] nums, int k) {
        return QuickSelect.kthSmallest(nums, nums.length - k + 1);
    }
}
