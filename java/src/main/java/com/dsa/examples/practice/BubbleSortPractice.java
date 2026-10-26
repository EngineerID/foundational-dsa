// Practice — Bubble sort sorted copy

package com.dsa.examples.practice;

import com.dsa.examples.sorting.BubbleSort;

import java.util.Arrays;

public final class BubbleSortPractice {

    private BubbleSortPractice() {
    }

    public static int[] sort(int[] input) {
        int[] arr = Arrays.copyOf(input, input.length);
        BubbleSort.sort(arr);
        return arr;
    }
}
