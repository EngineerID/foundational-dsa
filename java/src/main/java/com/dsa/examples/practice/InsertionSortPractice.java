// Practice — Insertion sort sorted copy

package com.dsa.examples.practice;

import com.dsa.examples.sorting.InsertionSort;

import java.util.Arrays;

public final class InsertionSortPractice {

    private InsertionSortPractice() {
    }

    public static int[] sort(int[] input) {
        int[] arr = Arrays.copyOf(input, input.length);
        InsertionSort.sort(arr);
        return arr;
    }
}
