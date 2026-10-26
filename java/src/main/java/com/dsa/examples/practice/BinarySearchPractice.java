// Practice — Binary search in a sorted array

package com.dsa.examples.practice;

import com.dsa.examples.searching.BinarySearch;

/** Returns index of {@code target} in sorted {@code nums}, or -1. */
public final class BinarySearchPractice {

    private BinarySearchPractice() {
    }

    public static int findIndex(int[] nums, int target) {
        return BinarySearch.search(nums, target);
    }
}
