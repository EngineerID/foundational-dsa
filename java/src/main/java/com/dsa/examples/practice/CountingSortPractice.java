// Practice — Counting sort (sorted copy)

package com.dsa.examples.practice;

import com.dsa.examples.sorting.CountingSort;

import java.util.Arrays;

public final class CountingSortPractice {

    private CountingSortPractice() {
    }

    public static int[] sort(int[] input) {
        int[] arr = Arrays.copyOf(input, input.length);
        CountingSort.sort(arr);
        return arr;
    }
}
