// Sorting — Radix Sort

package com.dsa.examples.sorting;

/**
 * LSD radix sort for non-negative integers using counting sort per digit.
 * Technique: LSD radix sort
 * Invariant: After digit d, sorted by lower d digits.
 * sort: Time O(d * n); Space O(n).
 */
public final class RadixSort {

    private RadixSort() {
    }

    /**
     * Sorts {@code arr} in ascending order in place (non-negative integers).
     * Time: O(d * n); Space O(n).
     */
    public static void sort(int[] arr) {
        if (arr == null || arr.length < 2) {
            return;
        }
        int max = 0;
        for (int v : arr) {
            if (v < 0) {
                throw new IllegalArgumentException("Radix sort requires non-negative keys");
            }
            max = Math.max(max, v);
        }
        for (int exp = 1; max / exp > 0; exp *= 10) {
            CountingSort.sortByDigit(arr, exp);
        }
    }
}
