// Sorting — Merge Sort

package com.dsa.examples.sorting;

/**
 * Stable merge sort (divide and conquer).
 * Time: O(n log n); Space: O(n) auxiliary.
 */
public final class MergeSort {

    private MergeSort() {
    }

    /**
     * Returns a new sorted copy of {@code arr} in ascending order.
     * Time: O(n log n); Space: O(n).
     */
    public static int[] sort(int[] arr) {
        if (arr == null) {
            return new int[0];
        }
        if (arr.length < 2) {
            return arr.clone();
        }
        int[] copy = arr.clone();
        sortInPlace(copy, 0, copy.length - 1);
        return copy;
    }

    private static void sortInPlace(int[] arr, int left, int right) {
        if (left >= right) {
            return;
        }
        int mid = left + (right - left) / 2;
        sortInPlace(arr, left, mid);
        sortInPlace(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }

    private static void merge(int[] arr, int left, int mid, int right) {
        int[] temp = new int[right - left + 1];
        int i = left;
        int j = mid + 1;
        int k = 0;
        while (i <= mid && j <= right) {
            if (arr[i] <= arr[j]) {
                temp[k++] = arr[i++];
            } else {
                temp[k++] = arr[j++];
            }
        }
        while (i <= mid) {
            temp[k++] = arr[i++];
        }
        while (j <= right) {
            temp[k++] = arr[j++];
        }
        System.arraycopy(temp, 0, arr, left, temp.length);
    }
}
