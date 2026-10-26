package com.dsa.examples.catalog;

import com.dsa.examples.dp.EditDistance;
import com.dsa.examples.dp.Knapsack01;
import com.dsa.examples.dp.LCS;
import com.dsa.examples.graphs.BFS;
import com.dsa.examples.graphs.Dijkstra;
import com.dsa.examples.graphs.Graph;
import com.dsa.examples.graphs.TopologicalSort;
import com.dsa.examples.linear.LRUCache;
import com.dsa.examples.linear.SlidingWindowMaximum;
import com.dsa.examples.searching.BinarySearch;
import com.dsa.examples.unionfind.UnionFind;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

/** Scenarios aligned with docs/worked-examples.md interview walkthroughs. */
class WorkedInterviewExamplesTest {

    @Test
    void binarySearchIndexOfSeven() {
        assertEquals(3, BinarySearch.search(new int[] {1, 3, 5, 7, 9, 11}, 7));
    }

    @Test
    void binarySearchAnswerFirstIndexAtLeastSeven() {
        assertEquals(3, BinarySearch.firstOccurrence(new int[] {1, 3, 5, 7, 9, 11}, 7));
    }

    @Test
    void dijkstraShortestDistanceToVertexTwo() {
        Graph g = new Graph(4, true, true);
        g.addEdge(0, 1, 1);
        g.addEdge(1, 2, 2);
        g.addEdge(0, 2, 4);
        assertEquals(3, Dijkstra.shortestPaths(g, 0)[2]);
    }

    @Test
    void unionFindConnectivityAfterMerges() {
        UnionFind uf = new UnionFind(5);
        uf.union(0, 1);
        uf.union(2, 3);
        uf.union(1, 2);
        assertTrue(uf.connected(0, 3));
        assertFalse(uf.connected(0, 4));
    }

    @Test
    void lruCacheCapacityTwoEvictionPattern() {
        LRUCache cache = new LRUCache(2);
        cache.put(1, 1);
        cache.put(2, 2);
        assertEquals(1, cache.get(1));
        cache.put(3, 3);
        assertEquals(-1, cache.get(2));
        cache.put(4, 4);
        assertEquals(-1, cache.get(1));
        assertEquals(3, cache.get(3));
        assertEquals(4, cache.get(4));
    }

    @Test
    void topologicalSortCourseScheduleDag() {
        Graph dag = new Graph(4, true, false);
        dag.addEdge(0, 1);
        dag.addEdge(0, 2);
        dag.addEdge(1, 3);
        assertEquals(List.of(0, 1, 2, 3), TopologicalSort.kahn(dag));
    }

    @Test
    void slidingWindowMaximumWindowThree() {
        assertEquals(
                Arrays.asList(3, 3, 5, 5, 6, 7),
                SlidingWindowMaximum.maxSlidingWindow(new int[] {1, 3, -1, -3, 5, 3, 6, 7}, 3));
    }

    @Test
    void bfsUnweightedDistancesFromVertexZero() {
        Graph g = new Graph(5, false, false);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 3);
        assertArrayEquals(new int[] {0, 1, 1, 2, -1}, BFS.distances(g, 0));
    }

    @Test
    void editDistanceKittenToSitting() {
        assertEquals(3, EditDistance.distance("kitten", "sitting"));
    }

    @Test
    void knapsackZeroOneClassicCapacityFive() {
        assertEquals(22, Knapsack01.maxValue(new int[] {1, 2, 3}, new int[] {6, 10, 12}, 5));
    }

    @Test
    void lcsAbcdeAndAce() {
        assertEquals(3, LCS.length("abcde", "ace"));
    }
}
