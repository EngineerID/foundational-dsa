// Practice — Quicksort in-place

package com.dsa.examples.practice;

import com.dsa.examples.sorting.QuickSort;

import java.util.Arrays;

public final class QuickSortPractice {

    private QuickSortPractice() {
    }

    public static int[] sort(int[] input, boolean threeWay) {
        int[] arr = Arrays.copyOf(input, input.length);
        if (threeWay) {
            QuickSort.sort3Way(arr);
        } else {
            QuickSort.sort(arr);
        }
        return arr;
    }
}
