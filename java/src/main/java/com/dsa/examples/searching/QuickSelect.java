// Searching — QuickSelect (order statistics)

package com.dsa.examples.searching;

import java.util.Arrays;

/**
 * k-th smallest element via randomized partition (QuickSelect).
 * Average time: O(n); worst O(n²); Space: O(1) excluding input copy.
 */
public final class QuickSelect {

    private QuickSelect() {
    }

    /**
     * Returns the k-th smallest value in {@code arr} (1-based: k=1 is minimum).
     * Does not mutate the caller's array.
     * Time: O(n) average; Space: O(n) for the defensive copy.
     */
    public static int kthSmallest(int[] arr, int k) {
        if (arr == null || arr.length == 0) {
            throw new IllegalArgumentException("Array must be non-empty");
        }
        if (k < 1 || k > arr.length) {
            throw new IllegalArgumentException("k out of range");
        }
        int[] copy = Arrays.copyOf(arr, arr.length);
        return select(copy, 0, copy.length - 1, k - 1);
    }

    private static int select(int[] arr, int left, int right, int kIndex) {
        if (left == right) {
            return arr[left];
        }
        int pivotIndex = partition(arr, left, right);
        if (kIndex == pivotIndex) {
            return arr[pivotIndex];
        }
        if (kIndex < pivotIndex) {
            return select(arr, left, pivotIndex - 1, kIndex);
        }
        return select(arr, pivotIndex + 1, right, kIndex);
    }

    private static int partition(int[] arr, int left, int right) {
        int pivot = arr[right];
        int i = left;
        for (int j = left; j < right; j++) {
            if (arr[j] <= pivot) {
                swap(arr, i, j);
                i++;
            }
        }
        swap(arr, i, right);
        return i;
    }

    private static void swap(int[] arr, int i, int j) {
        int tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
}
