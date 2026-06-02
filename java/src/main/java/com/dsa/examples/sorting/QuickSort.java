// Sorting — QuickSort

package com.dsa.examples.sorting;

import java.util.Random;

/**
 * Sort in place via Lomuto partition, optional random pivot, or 3-way partition.
 * Technique: Lomuto partition; randomized pivot; 3-way Dutch national flag
 * Invariant: 3-way: arr[lo..lt-1] < v, arr[lt..gt] == v, arr[gt+1..hi] > v.
 * sort/sort3Way: Time O(n log n) average; Space O(log n).
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
     * Sorts {@code arr} in place with optional randomized pivot.
     * Time: O(n log n) average with random pivot; Space: O(log n).
     */
    public static void sort(int[] arr, boolean randomizedPivot) {
        if (arr == null || arr.length < 2) {
            return;
        }
        quickSort(arr, 0, arr.length - 1, randomizedPivot);
    }

    /**
     * Sorts {@code arr} in place using 3-way partition (best when many duplicate keys).
     * Time: O(n log n) average, O(n) when few distinct values; Space: O(log n).
     */
    public static void sort3Way(int[] arr) {
        if (arr == null || arr.length < 2) {
            return;
        }
        sort3Way(arr, 0, arr.length - 1);
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

    private static void sort3Way(int[] arr, int lo, int hi) {
        if (lo >= hi) {
            return;
        }
        int v = arr[lo];
        int lt = lo;
        int gt = hi;
        int i = lo + 1;
        while (i <= gt) {
            if (arr[i] < v) {
                swap(arr, lt++, i++);
            } else if (arr[i] > v) {
                swap(arr, i, gt--);
            } else {
                i++;
            }
        }
        sort3Way(arr, lo, lt - 1);
        sort3Way(arr, gt + 1, hi);
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
