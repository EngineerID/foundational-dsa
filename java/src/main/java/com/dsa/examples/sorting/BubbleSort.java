// Sorting — Bubble Sort

package com.dsa.examples.sorting;

/**
 * Sort an array in ascending order in place.
 * Technique: Bubble sort
 * Invariant: After pass i, last i elements are in final sorted positions.
 * sort: Time O(n²); Space O(1).
 */
public final class BubbleSort {

    private BubbleSort() {
    }

    /**
     * Sorts {@code arr} in ascending order in place.
     * Time: O(n²) worst; Space: O(1).
     */
    public static void sort(int[] arr) {
        if (arr == null || arr.length < 2) {
            return;
        }
        for (int i = 0; i < arr.length - 1; i++) {
            boolean swapped = false;
            for (int j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    swapped = true;
                }
            }
            if (!swapped) {
                break;
            }
        }
    }

    private static void swap(int[] arr, int i, int j) {
        int t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
}
