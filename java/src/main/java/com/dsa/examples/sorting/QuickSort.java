// Sorting — QuickSort

package com.dsa.examples.sorting;

import java.util.Random;

/**
 * QuickSort with optional randomized pivot to avoid O(n²) on sorted input.
 * Time: O(n log n) average, O(n²) worst; Space: O(log n) stack.
 */
public final class QuickSort {

    private static final Random RNG = new Random();

    private QuickSort() {
    }

    /**
     * Sorts {@code arr} in ascending order in place (deterministic pivot: last element).
     * Time: O(n log n) average; Space: O(log n).
     */
    public static void sort(int[] arr) {
        sort(arr, false);
    }

    /**
     * Sorts {@code arr} in place.
     *
     * @param randomizedPivot if true, picks a random pivot — avoids worst-case on sorted arrays
     * Time: O(n log n) average with random pivot; Space: O(log n).
     */
    public static void sort(int[] arr, boolean randomizedPivot) {
        if (arr == null || arr.length < 2) {
            return;
        }
        quickSort(arr, 0, arr.length - 1, randomizedPivot);
    }

    private static void quickSort(int[] arr, int left, int right, boolean randomizedPivot) {
        if (left >= right) {
            return;
        }
        if (randomizedPivot) {
            int r = left + RNG.nextInt(right - left + 1);
            swap(arr, r, right);
        }
        int p = partition(arr, left, right);
        quickSort(arr, left, p - 1, randomizedPivot);
        quickSort(arr, p + 1, right, randomizedPivot);
    }

    private static int partition(int[] arr, int left, int right) {
        int pivot = arr[right];
        int i = left;
        for (int j = left; j < right; j++) {
            if (arr[j] <= pivot) {
                swap(arr, i++, j);
            }
        }
        swap(arr, i, right);
        return i;
    }

    private static void swap(int[] arr, int i, int j) {
        int t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
}
