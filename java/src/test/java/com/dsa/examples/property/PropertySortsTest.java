package com.dsa.examples.property;

import com.dsa.examples.sorting.BubbleSort;
import com.dsa.examples.sorting.CountingSort;
import com.dsa.examples.sorting.HeapSort;
import com.dsa.examples.sorting.InsertionSort;
import com.dsa.examples.sorting.MergeSort;
import com.dsa.examples.sorting.QuickSort;
import com.dsa.examples.sorting.RadixSort;
import com.dsa.examples.sorting.SelectionSort;
import com.dsa.examples.support.PropertyHelpers;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.Random;

import static com.dsa.examples.support.PropertyHelpers.PROPERTY_TRIALS;
import static org.junit.jupiter.api.Assertions.assertTrue;

class PropertySortsTest {

    @Test
    void inplaceSortsProperty() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < PROPERTY_TRIALS; t++) {
            int[] original = PropertyHelpers.randomIntArray(rng, 50);
            assertInPlace(original, arr -> BubbleSort.sort(arr));
            assertInPlace(original, arr -> SelectionSort.sort(arr));
            assertInPlace(original, arr -> InsertionSort.sort(arr));
            assertInPlace(original, arr -> QuickSort.sort(arr, false));
            assertInPlace(original, arr -> QuickSort.sort(arr, true));
            assertInPlace(original, arr -> QuickSort.sort3Way(arr));
            assertInPlace(nonNegative(original), arr -> HeapSort.sort(arr));
            assertInPlace(nonNegative(original), arr -> CountingSort.sort(arr));
            assertInPlace(nonNegative(original), arr -> RadixSort.sort(arr));
        }
    }

    private static int[] nonNegative(int[] arr) {
        int[] out = Arrays.copyOf(arr, arr.length);
        for (int i = 0; i < out.length; i++) {
            out[i] = Math.abs(out[i]);
        }
        return out;
    }

    @Test
    void mergeSortProperty() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < PROPERTY_TRIALS; t++) {
            int[] original = PropertyHelpers.randomIntArray(rng, 50);
            int[] top = MergeSort.sort(original);
            int[] bottom = MergeSort.sortBottomUp(original);
            assertTrue(PropertyHelpers.isSorted(top));
            assertTrue(PropertyHelpers.isPermutation(original, top));
            assertTrue(PropertyHelpers.isSorted(bottom));
            assertTrue(PropertyHelpers.isPermutation(original, bottom));
        }
    }

    private void assertInPlace(int[] original, Sorter sorter) {
        int[] arr = Arrays.copyOf(original, original.length);
        sorter.sort(arr);
        assertTrue(PropertyHelpers.isSorted(arr));
        assertTrue(PropertyHelpers.isPermutation(original, arr));
    }

    @FunctionalInterface
    private interface Sorter {
        void sort(int[] arr);
    }
}
