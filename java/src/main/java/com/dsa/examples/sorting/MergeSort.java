// Sorting — Merge Sort

package com.dsa.examples.sorting;

/**
 * Return a stably sorted copy via top-down or bottom-up merge passes.
 * Technique: Top-down mergesort; bottom-up mergesort
 * Invariant: Merged subarrays are sorted; equal elements keep relative order.
 * sort/sortBottomUp: Time O(n log n); Space O(n).
 */
public final class MergeSort {

    private MergeSort() {
    }

    /**
     * Returns a new sorted copy of {@code arr} in ascending order (top-down).
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

    /**
     * Returns a new sorted copy using bottom-up iterative merge passes.
     * Time: O(n log n); Space: O(n).
     */
    public static int[] sortBottomUp(int[] arr) {
        if (arr == null) {
            return new int[0];
        }
        if (arr.length < 2) {
            return arr.clone();
        }
        int[] copy = arr.clone();
        int n = copy.length;
        int[] temp = new int[n];
        for (int size = 1; size < n; size *= 2) {
            for (int left = 0; left < n - size; left += 2 * size) {
                int mid = left + size - 1;
                int right = Math.min(left + 2 * size - 1, n - 1);
                mergeRange(copy, temp, left, mid, right);
            }
        }
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

    private static void mergeRange(int[] arr, int[] temp, int left, int mid, int right) {
        int i = left;
        int j = mid + 1;
        int k = 0;
        int len = right - left + 1;
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
        System.arraycopy(temp, 0, arr, left, len);
    }
}
