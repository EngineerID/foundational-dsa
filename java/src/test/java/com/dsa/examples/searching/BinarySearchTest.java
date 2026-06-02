package com.dsa.examples.searching;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class BinarySearchTest {

    @Test
    void searchTypical() {
        int[] arr = {1, 3, 5, 7, 9};
        assertEquals(2, BinarySearch.search(arr, 5));
        assertEquals(-1, BinarySearch.search(arr, 4));
    }

    @Test
    void emptyAndSingle() {
        assertEquals(-1, BinarySearch.search(new int[]{}, 1));
        assertEquals(0, BinarySearch.search(new int[]{5}, 5));
    }

    @Test
    void firstAndLastOccurrenceWithDuplicates() {
        int[] arr = {1, 2, 2, 2, 3};
        assertEquals(1, BinarySearch.firstOccurrence(arr, 2));
        assertEquals(3, BinarySearch.lastOccurrence(arr, 2));
        assertEquals(-1, BinarySearch.firstOccurrence(arr, 4));
    }

    @Test
    void evenLengthArray() {
        int[] arr = {2, 4, 6, 8};
        assertEquals(1, BinarySearch.search(arr, 4));
    }
}
