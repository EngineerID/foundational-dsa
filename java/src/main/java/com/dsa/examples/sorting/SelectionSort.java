// Sorting — Selection Sort

package com.dsa.examples.sorting;

/**
 * Sort an array in ascending order in place.
 * Technique: Selection sort
 * Invariant: Prefix [0..i) is sorted and contains the i smallest elements.
 * sort: Time O(n²); Space O(1).
 */
public final class SelectionSort {

    private SelectionSort() {
    }

    /**
     * Sorts {@code arr} in ascending order in place.
     * Time: O(n²); Space: O(1).
     */
    public static void sort(int[] arr) {
        if (arr == null || arr.length < 2) {
            return;
        }
        for (int i = 0; i < arr.length - 1; i++) {
            int minIdx = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            if (minIdx != i) {
                int t = arr[i];
                arr[i] = arr[minIdx];
                arr[minIdx] = t;
            }
        }
    }
}
