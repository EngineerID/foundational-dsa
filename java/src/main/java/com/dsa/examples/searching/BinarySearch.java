// Searching — Binary Search

package com.dsa.examples.searching;

/**
 * Iterative binary search on sorted arrays, including duplicate boundary variants.
 * Time: O(log n); Space: O(1).
 */
public final class BinarySearch {

    private BinarySearch() {
    }

    /**
     * Returns any index of {@code key} in sorted {@code arr}, or -1.
     * Time: O(log n); Space: O(1).
     */
    public static int search(int[] arr, int key) {
        if (arr == null || arr.length == 0) {
            return -1;
        }
        int lo = 0;
        int hi = arr.length - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (arr[mid] == key) {
                return mid;
            }
            if (arr[mid] < key) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return -1;
    }

    /**
     * Returns the leftmost index of {@code key} in sorted {@code arr}, or -1.
     * Time: O(log n); Space: O(1).
     */
    public static int firstOccurrence(int[] arr, int key) {
        if (arr == null || arr.length == 0) {
            return -1;
        }
        int lo = 0;
        int hi = arr.length - 1;
        int result = -1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (arr[mid] == key) {
                result = mid;
                hi = mid - 1;
            } else if (arr[mid] < key) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return result;
    }

    /**
     * Returns the rightmost index of {@code key} in sorted {@code arr}, or -1.
     * Time: O(log n); Space: O(1).
     */
    public static int lastOccurrence(int[] arr, int key) {
        if (arr == null || arr.length == 0) {
            return -1;
        }
        int lo = 0;
        int hi = arr.length - 1;
        int result = -1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (arr[mid] == key) {
                result = mid;
                lo = mid + 1;
            } else if (arr[mid] < key) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return result;
    }
}
