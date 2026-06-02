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
        assertArrayEquals(new int[]{1, 2, 3, 4}, MergeSort.sortBottomUp(new int[]{4, 2, 1, 3}));
    }

    @Test
    void heapSortCases() {
        assertSorted(new int[]{5, 1, 4, 2, 3}, arr -> HeapSort.sort(arr));
    }

    @Test
    void countingSortCases() {
        int[] arr = {4, 2, 2, 8, 3, 3, 1};
        CountingSort.sort(arr);
        assertArrayEquals(new int[]{1, 2, 2, 3, 3, 4, 8}, arr);
    }

    @Test
    void radixSortCases() {
        int[] arr = {170, 45, 75, 90, 802, 24, 2, 66};
        int[] expected = arr.clone();
        java.util.Arrays.sort(expected);
        RadixSort.sort(arr);
        assertArrayEquals(expected, arr);
    }

    @Test
    void quickSortCases() {
        assertSorted(new int[]{9, 8, 7, 6, 5}, arr -> QuickSort.sort(arr, true));
        assertSorted(new int[]{1}, arr -> QuickSort.sort(arr));
        assertSorted(new int[]{2, 2, 2, 1, 1}, arr -> QuickSort.sort3Way(arr));
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
