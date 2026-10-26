// Practice — Radix sort (sorted copy)

package com.dsa.examples.practice;

import com.dsa.examples.sorting.RadixSort;

import java.util.Arrays;

public final class RadixSortPractice {

    private RadixSortPractice() {
    }

    public static int[] sort(int[] input) {
        int[] arr = Arrays.copyOf(input, input.length);
        RadixSort.sort(arr);
        return arr;
    }
}
