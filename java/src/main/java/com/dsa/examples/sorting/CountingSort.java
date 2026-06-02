// Sorting — Counting Sort

package com.dsa.examples.sorting;

/**
 * Stable sort for non-negative integers in bounded range.
 * Technique: Counting sort
 * Invariant: Prefix counts place keys in stable order.
 * sort/sortByDigit: Time O(n + k); Space O(k).
 */
public final class CountingSort {

    private CountingSort() {
    }

    /**
     * Sorts {@code arr} in ascending order in place (values must be non-negative).
     * Time: O(n + k); Space O(k).
     */
    public static void sort(int[] arr) {
        if (arr == null || arr.length < 2) {
            return;
        }
        int max = 0;
        for (int v : arr) {
            if (v < 0) {
                throw new IllegalArgumentException("Counting sort requires non-negative keys");
            }
            max = Math.max(max, v);
        }
        sortWithRange(arr, max);
    }

    /**
     * Stable sort by digit at {@code exp} (1, 10, 100, ...) for radix sort.
     * Time: O(n + 10); Space O(n).
     */
    public static void sortByDigit(int[] arr, int exp) {
        if (arr == null || arr.length < 2) {
            return;
        }
        int n = arr.length;
        int[] output = new int[n];
        int[] count = new int[10];
        for (int v : arr) {
            count[(v / exp) % 10]++;
        }
        for (int i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }
        for (int i = n - 1; i >= 0; i--) {
            int digit = (arr[i] / exp) % 10;
            output[count[digit] - 1] = arr[i];
            count[digit]--;
        }
        System.arraycopy(output, 0, arr, 0, n);
    }

    private static void sortWithRange(int[] arr, int max) {
        int n = arr.length;
        int[] output = new int[n];
        int[] count = new int[max + 1];
        for (int v : arr) {
            count[v]++;
        }
        for (int i = 1; i <= max; i++) {
            count[i] += count[i - 1];
        }
        for (int i = n - 1; i >= 0; i--) {
            output[count[arr[i]] - 1] = arr[i];
            count[arr[i]]--;
        }
        System.arraycopy(output, 0, arr, 0, n);
    }
}
