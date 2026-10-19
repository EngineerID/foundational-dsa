package com.dsa.examples.catalog;

import com.dsa.examples.graphs.BFS;
import com.dsa.examples.graphs.Graph;
import com.dsa.examples.linear.DynamicArray;
import com.dsa.examples.linear.Stack;
import com.dsa.examples.searching.BinarySearch;
import com.dsa.examples.searching.LinearSearch;
import com.dsa.examples.searching.QuickSelect;
import com.dsa.examples.sorting.BubbleSort;
import com.dsa.examples.sorting.MergeSort;
import com.dsa.examples.strings.KMP;
import com.dsa.examples.unionfind.UnionFind;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

/** Cross-item edge themes; KMP empty pattern returns 0 (vacuous match, like {@code String.indexOf("")}). */
class EdgeCaseThemesTest {

    private static final int LARGE_N = 256;

    private static void sortBattery(Sorter sorter, boolean allowNegative) {
        int[] empty = {};
        sorter.sort(empty);
        assertArrayEquals(new int[]{}, empty);
        int[] single = {7};
        sorter.sort(single);
        assertArrayEquals(new int[]{7}, single);
        int[] duplicate = {2, 2, 1};
        sorter.sort(duplicate);
        assertArrayEquals(new int[]{1, 2, 2}, duplicate);
        int[] large = new int[LARGE_N];
        for (int i = 0; i < LARGE_N; i++) {
            large[i] = LARGE_N - i;
        }
        sorter.sort(large);
        for (int i = 0; i < LARGE_N; i++) {
            assertEquals(i + 1, large[i]);
        }
        if (!allowNegative) {
            assertThrows(IllegalArgumentException.class, () -> sorter.sort(new int[]{-1}));
        }
    }

    @Test
    void sortingEdgeThemes() {
        sortBattery(BubbleSort::sort, true);
        assertArrayEquals(new int[]{}, MergeSort.sort(new int[]{}));
        assertArrayEquals(new int[]{7}, MergeSort.sort(new int[]{7}));
        assertArrayEquals(new int[]{1, 2, 2}, MergeSort.sort(new int[]{2, 2, 1}));
    }

    @Test
    void searchingEdgeThemes() {
        assertEquals(-1, LinearSearch.indexOf(new int[]{}, 1));
        assertEquals(0, LinearSearch.indexOf(new int[]{5}, 5));
        assertEquals(0, LinearSearch.indexOf(new int[]{1, 1, 2}, 1)); // duplicate keys
        assertEquals(-1, LinearSearch.indexOf(new int[]{1, 2, 3}, 9));
        assertEquals(-1, BinarySearch.search(new int[]{}, 1));
        assertEquals(0, BinarySearch.search(new int[]{3}, 3));
        assertEquals(-1, BinarySearch.search(new int[]{3, 1}, 1));
        assertEquals(9, QuickSelect.kthSmallest(new int[]{9}, 1));
        assertThrows(IllegalArgumentException.class, () -> QuickSelect.kthSmallest(new int[]{}, 1));
    }

    @Test
    void structuresGraphsEdgeThemes() {
        DynamicArray<Integer> da = new DynamicArray<>();
        assertEquals(0, da.size());
        da.add(1);
        assertEquals(1, da.get(0));
        da.add(1);
        assertThrows(IndexOutOfBoundsException.class, () -> da.get(-1));
        Stack<Integer> stack = new Stack<>();
        assertTrue(stack.isEmpty());
        stack.push(1);
        assertEquals(1, stack.peek());
        stack.push(1);
        assertEquals(1, stack.pop());
        assertThrows(IllegalStateException.class, () -> new Stack<Integer>().pop());
        Graph empty = new Graph(0, false, false);
        assertEquals(0, empty.vertices());
        Graph single = new Graph(1, true, true);
        assertEquals(1, single.vertices());
        Graph dup = new Graph(3, false, true);
        dup.addEdge(0, 1, 1);
        dup.addEdge(0, 1, 2);
        assertFalse(dup.allEdges().isEmpty());
        Graph large = new Graph(LARGE_N, false, false);
        assertEquals(LARGE_N, large.vertices());
        assertThrows(IndexOutOfBoundsException.class, () -> dup.neighbors(99));
        assertEquals(0, BFS.distances(single, 0)[0]);
        assertThrows(IndexOutOfBoundsException.class, () -> BFS.distances(single, -1));
        assertEquals(-1, KMP.search("", "a"));
        assertEquals(0, KMP.search("a", "a"));
        assertEquals(0, KMP.search("abc", ""));
        UnionFind uf = new UnionFind(1);
        assertEquals(0, uf.find(0));
        UnionFind uf2 = new UnionFind(3);
        uf2.union(0, 1);
        uf2.union(0, 1);
        assertTrue(uf2.connected(0, 1));
        assertThrows(IndexOutOfBoundsException.class, () -> uf2.find(3));
    }

    private interface Sorter {
        void sort(int[] arr);
    }
}
