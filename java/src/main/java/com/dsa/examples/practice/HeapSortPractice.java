// Practice — Heapsort sorted copy

package com.dsa.examples.practice;

import com.dsa.examples.sorting.HeapSort;

import java.util.Arrays;

public final class HeapSortPractice {

    private HeapSortPractice() {
    }

    public static int[] sort(int[] input) {
        int[] arr = Arrays.copyOf(input, input.length);
        HeapSort.sort(arr);
        return arr;
    }
}
