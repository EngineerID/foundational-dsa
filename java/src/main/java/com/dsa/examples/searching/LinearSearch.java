// Searching — Linear Search

package com.dsa.examples.searching;

/**
 * Linear search over an array.
 * Time: O(n) per search; Space: O(1).
 */
public final class LinearSearch {

    private LinearSearch() {
    }

    /**
     * Returns the index of {@code key} in {@code arr}, or -1 if absent.
     * Time: O(n); Space: O(1).
     */
    public static int indexOf(int[] arr, int key) {
        if (arr == null) {
            return -1;
        }
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == key) {
                return i;
            }
        }
        return -1;
    }
}
