// Practice — Selection sort sorted copy

package com.dsa.examples.practice;

import com.dsa.examples.sorting.SelectionSort;

import java.util.Arrays;

public final class SelectionSortPractice {

    private SelectionSortPractice() {
    }

    public static int[] sort(int[] input) {
        int[] arr = Arrays.copyOf(input, input.length);
        SelectionSort.sort(arr);
        return arr;
    }
}
