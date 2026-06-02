package com.dsa.examples.sorting;

import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

class SortingTest {

    @Test
    void bubbleSortCases() {
        assertSorted(new int[]{5, 1, 4, 2, 3}, arr -> BubbleSort.sort(arr));
        assertSorted(new int[]{}, arr -> BubbleSort.sort(arr));
        assertSorted(new int[]{1}, arr -> BubbleSort.sort(arr));
        assertSorted(new int[]{2, 2, 1}, arr -> BubbleSort.sort(arr));
    }

    @Test
    void selectionSortCases() {
        assertSorted(new int[]{5, 1, 4, 2, 3}, arr -> SelectionSort.sort(arr));
        assertSorted(new int[]{1}, arr -> SelectionSort.sort(arr));
    }

    @Test
    void insertionSortNearlySorted() {
        int[] arr = {1, 2, 3, 5, 4};
        InsertionSort.sort(arr);
        assertArrayEquals(new int[]{1, 2, 3, 4, 5}, arr);
    }

    @Test
    void mergeSortCases() {
        assertArrayEquals(new int[]{1, 2, 3}, MergeSort.sort(new int[]{3, 1, 2}));
        assertArrayEquals(new int[]{}, MergeSort.sort(new int[]{}));
        assertArrayEquals(new int[]{2, 2}, MergeSort.sort(new int[]{2, 2}));
    }

    @Test
    void quickSortCases() {
        assertSorted(new int[]{9, 8, 7, 6, 5}, arr -> QuickSort.sort(arr, true));
        assertSorted(new int[]{1}, arr -> QuickSort.sort(arr));
    }

    private interface Sorter {
        void sort(int[] arr);
    }

    private void assertSorted(int[] input, Sorter sorter) {
        int[] arr = Arrays.copyOf(input, input.length);
        sorter.sort(arr);
        int[] expected = Arrays.copyOf(input, input.length);
        Arrays.sort(expected);
        assertArrayEquals(expected, arr);
    }
}
