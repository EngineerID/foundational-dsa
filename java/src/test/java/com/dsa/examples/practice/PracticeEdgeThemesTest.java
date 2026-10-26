package com.dsa.examples.practice;

import org.junit.jupiter.api.Test;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

/** Edge themes on practice wrappers (empty, single, duplicate, large, invalid). */
class PracticeEdgeThemesTest {

    private static final int LARGE_N = 256;

    private static void sortCopyBattery(SortCopyFn sortFn, boolean allowNegative) {
        assertArrayEquals(new int[] {}, sortFn.sort(new int[] {}));
        assertArrayEquals(new int[] {7}, sortFn.sort(new int[] {7}));
        assertArrayEquals(new int[] {1, 2, 2}, sortFn.sort(new int[] {2, 2, 1}));
        int[] large = new int[LARGE_N];
        for (int i = 0; i < LARGE_N; i++) {
            large[i] = LARGE_N - i;
        }
        int[] sorted = sortFn.sort(large);
        for (int i = 0; i < LARGE_N; i++) {
            assertEquals(i + 1, sorted[i]);
        }
        if (!allowNegative) {
            assertThrows(Exception.class, () -> sortFn.sort(new int[] {-1}));
        }
    }

    @FunctionalInterface
    private interface SortCopyFn {
        int[] sort(int[] input);
    }

    @Test
    void sortingEdgeThemes() {
        sortCopyBattery(BubbleSortPractice::sort, true);
        sortCopyBattery(MergeSortPractice::sort, true);
        assertThrows(Exception.class, () -> CountingSortPractice.sort(new int[] {2, -1}));
    }

    @Test
    void searchingEdgeThemes() {
        assertEquals(-1, LinearSearchPractice.indexOf(new int[] {}, 1));
        assertEquals(0, LinearSearchPractice.indexOf(new int[] {5}, 5));
        assertEquals(0, LinearSearchPractice.indexOf(new int[] {1, 1, 2}, 1));
        int[] large = new int[LARGE_N];
        for (int i = 0; i < LARGE_N; i++) {
            large[i] = i;
        }
        assertEquals(LARGE_N - 1, LinearSearchPractice.indexOf(large, LARGE_N - 1));
        assertEquals(-1, LinearSearchPractice.indexOf(new int[] {1, 2, 3}, 9));
        assertEquals(-1, BinarySearchPractice.findIndex(new int[] {}, 1));
        assertEquals(0, BinarySearchPractice.findIndex(new int[] {3}, 3));
        assertEquals(-1, BinarySearchPractice.findIndex(new int[] {3, 1}, 1));
        assertEquals(LARGE_N - 1, BinarySearchPractice.findIndex(large, LARGE_N - 1));
    }

    @Test
    void maximumSubarrayEdgeThemes() {
        assertEquals(4, MaxSubarray.solve(new int[] {4}));
        assertEquals(-1, MaxSubarray.solve(new int[] {-2, -1}));
        int[] ones = new int[LARGE_N];
        Arrays.fill(ones, 1);
        assertEquals(LARGE_N, MaxSubarray.solve(ones));
        assertThrows(Exception.class, () -> MaxSubarray.solve(new int[] {}));
    }

    @Test
    void dynamicArrayEdgeThemes() {
        DynamicArrayPractice da = new DynamicArrayPractice();
        assertEquals(0, da.size());
        da.add(1);
        assertEquals(1, da.get(0));
        da.add(1);
        assertThrows(Exception.class, () -> da.get(-1));
        for (int i = 0; i < LARGE_N; i++) {
            da.add(i);
        }
        assertEquals(2 + LARGE_N, da.size());
    }

    @Test
    void stackEdgeThemes() {
        StackPractice st = new StackPractice();
        assertTrue(st.isEmpty());
        st.push(1);
        assertEquals(1, st.peek());
        st.push(1);
        assertEquals(1, st.pop());
        for (int i = 0; i < LARGE_N; i++) {
            st.push(1);
        }
        assertThrows(Exception.class, () -> new StackPractice().pop());
    }

    @Test
    void binaryHeapExtractOrderEdgeThemes() {
        assertArrayEquals(new int[] {}, BinaryHeapPractice.extractOrder(new int[] {}));
        assertArrayEquals(new int[] {7}, BinaryHeapPractice.extractOrder(new int[] {7}));
        assertArrayEquals(new int[] {1, 2, 2}, BinaryHeapPractice.extractOrder(new int[] {2, 2, 1}));
        int[] large = new int[LARGE_N];
        for (int i = 0; i < LARGE_N; i++) {
            large[i] = LARGE_N - i;
        }
        assertArrayEquals(
                java.util.stream.IntStream.rangeClosed(1, LARGE_N).toArray(),
                BinaryHeapPractice.extractOrder(large));
    }

    @Test
    void monotonicStackNextGreaterEdgeThemes() {
        assertThrows(Exception.class, () -> MonotonicStackPractice.nextGreater(new int[] {}));
        assertArrayEquals(new int[] {-1}, MonotonicStackPractice.nextGreater(new int[] {7}));
        assertArrayEquals(
                new int[] {-1, -1, -1}, MonotonicStackPractice.nextGreater(new int[] {2, 2, 1}));
        int[] ascending = new int[LARGE_N];
        int[] expected = new int[LARGE_N];
        for (int i = 0; i < LARGE_N; i++) {
            ascending[i] = i + 1;
            expected[i] = i < LARGE_N - 1 ? i + 2 : -1;
        }
        assertArrayEquals(expected, MonotonicStackPractice.nextGreater(ascending));
    }
}
