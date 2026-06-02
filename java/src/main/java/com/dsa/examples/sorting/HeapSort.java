// Sorting — Heapsort

package com.dsa.examples.sorting;

/**
 * Sort an array in ascending order in place using a binary max-heap.
 * Technique: Heapsort
 * Invariant: Max-heap on active prefix; largest moved to sorted suffix.
 * sort: Time O(n log n); Space O(1).
 */
public final class HeapSort {

    private HeapSort() {
    }

    /**
     * Sorts {@code arr} in ascending order in place.
     * Time: O(n log n); Space: O(1).
     */
    public static void sort(int[] arr) {
        if (arr == null || arr.length < 2) {
            return;
        }
        int n = arr.length;
        for (int i = n / 2 - 1; i >= 0; i--) {
            siftDown(arr, n, i);
        }
        for (int end = n - 1; end > 0; end--) {
            swap(arr, 0, end);
            siftDown(arr, end, 0);
        }
    }

    private static void siftDown(int[] arr, int heapSize, int i) {
        while (true) {
            int left = 2 * i + 1;
            int right = 2 * i + 2;
            int largest = i;
            if (left < heapSize && arr[left] > arr[largest]) {
                largest = left;
            }
            if (right < heapSize && arr[right] > arr[largest]) {
                largest = right;
            }
            if (largest == i) {
                break;
            }
            swap(arr, i, largest);
            i = largest;
        }
    }

    private static void swap(int[] arr, int i, int j) {
        int t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }
}
