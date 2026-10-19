package com.dsa.examples.property;

import com.dsa.examples.searching.BinarySearch;
import com.dsa.examples.searching.LinearSearch;
import com.dsa.examples.searching.QuickSelect;
import com.dsa.examples.support.PropertyHelpers;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.Random;

import static com.dsa.examples.support.PropertyHelpers.PROPERTY_TRIALS;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class PropertySearchingTest {

    @Test
    void linearSearchIndexMatchesSortedScan() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < PROPERTY_TRIALS; t++) {
            int[] arr = PropertyHelpers.randomIntArray(rng, 40);
            int target = arr.length == 0 ? 0 : arr[rng.nextInt(arr.length)];
            int idx = LinearSearch.indexOf(arr, target);
            if (idx >= 0) {
                assertEquals(target, arr[idx]);
            } else {
                assertTrue(Arrays.stream(arr).noneMatch(v -> v == target));
            }
        }
    }

    @Test
    void binarySearchOnSortedArray() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < PROPERTY_TRIALS; t++) {
            int[] arr = PropertyHelpers.randomIntArray(rng, 40);
            Arrays.sort(arr);
            if (arr.length == 0) {
                assertEquals(-1, BinarySearch.search(arr, 0));
                continue;
            }
            int target = arr[rng.nextInt(arr.length)];
            int idx = BinarySearch.search(arr, target);
            assertTrue(idx >= 0);
            assertEquals(target, arr[idx]);
        }
    }

    @Test
    void binarySearchFirstAndLastOccurrence() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < PROPERTY_TRIALS; t++) {
            int[] arr = PropertyHelpers.randomIntArray(rng, 30);
            Arrays.sort(arr);
            int key = arr.length == 0 ? 0 : arr[rng.nextInt(arr.length)];
            int first = BinarySearch.firstOccurrence(arr, key);
            int last = BinarySearch.lastOccurrence(arr, key);
            if (first < 0) {
                assertEquals(-1, last);
                assertTrue(Arrays.stream(arr).noneMatch(v -> v == key));
            } else {
                assertTrue(first <= last);
                assertEquals(key, arr[first]);
                assertEquals(key, arr[last]);
                for (int i = 0; i < arr.length; i++) {
                    if (arr[i] == key) {
                        assertTrue(i >= first && i <= last);
                    }
                }
            }
        }
    }

    @Test
    void quickSelectKthSmallest() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < PROPERTY_TRIALS; t++) {
            int[] arr = PropertyHelpers.randomIntArray(rng, 40);
            if (arr.length == 0) {
                continue;
            }
            int k = 1 + rng.nextInt(arr.length);
            int[] sorted = Arrays.copyOf(arr, arr.length);
            Arrays.sort(sorted);
            assertEquals(sorted[k - 1], QuickSelect.kthSmallest(arr, k));
        }
    }
}
