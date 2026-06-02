// Sorting — Insertion Sort

package com.dsa.examples.sorting;

/**
 * Insertion sort — efficient on nearly sorted input (O(n) best case).
 * Time: O(n²) worst/average, O(n) best; Space: O(1).
 */
public final class InsertionSort {

    private InsertionSort() {
    }

    /**
     * Sorts {@code arr} in ascending order in place.
     * Time: O(n²) worst; O(n) best when nearly sorted; Space: O(1).
     */
    public static void sort(int[] arr) {
        if (arr == null || arr.length < 2) {
            return;
        }
        for (int i = 1; i < arr.length; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }
}
