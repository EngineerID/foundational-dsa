package com.dsa.examples.catalog;

import com.dsa.examples.dp.CoinChange;
import com.dsa.examples.dp.EditDistance;
import com.dsa.examples.dp.Knapsack01;
import com.dsa.examples.dp.LCS;
import com.dsa.examples.dp.MaxSubarray;
import com.dsa.examples.graphs.BFS;
import com.dsa.examples.graphs.Dijkstra;
import com.dsa.examples.graphs.Graph;
import com.dsa.examples.graphs.CourseSchedule;
import com.dsa.examples.graphs.DFS;
import com.dsa.examples.graphs.KruskalMST;
import com.dsa.examples.graphs.NetworkDelay;
import com.dsa.examples.graphs.NumberOfIslands;
import com.dsa.examples.graphs.TopologicalSort;
import com.dsa.examples.graphs.WordSearch;
import com.dsa.examples.dp.LIS;
import com.dsa.examples.searching.QuickSelect;
import com.dsa.examples.trees.BST;
import com.dsa.examples.trees.LevelOrderTraversal;
import com.dsa.examples.trees.SerializeBinaryTree;
import com.dsa.examples.heaps.BinaryHeap;
import com.dsa.examples.heaps.MeetingRoomsII;
import com.dsa.examples.heaps.PriorityQueue;
import com.dsa.examples.heaps.TopKFrequentElements;
import com.dsa.examples.trees.Trie;
import com.dsa.examples.linear.LRUCache;
import com.dsa.examples.linear.SlidingWindowMaximum;
import com.dsa.examples.linear.ValidParentheses;
import com.dsa.examples.searching.BinarySearch;
import com.dsa.examples.searching.TrappingRainWater;
import com.dsa.examples.searching.TwoSumII;
import com.dsa.examples.sorting.MergeIntervals;
import com.dsa.examples.strings.LongestSubstringWithoutRepeating;
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
    void unionFindSingleElementAndRedundantUnion() {
        UnionFind alone = new UnionFind(1);
        assertTrue(alone.connected(0, 0));
        UnionFind uf = new UnionFind(3);
        uf.union(0, 1);
        uf.union(0, 1);
        uf.union(1, 2);
        assertTrue(uf.connected(0, 2));
        assertTrue(uf.connected(1, 1));
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
    void slidingWindowPatternFixedAndVariableEdges() {
        assertEquals(List.of(1, 2), SlidingWindowMaximum.maxSlidingWindow(new int[] {1, 2}, 1));
        assertEquals(0, LongestSubstringWithoutRepeating.lengthOfLongestSubstring(""));
        assertEquals(1, LongestSubstringWithoutRepeating.lengthOfLongestSubstring("bbbbb"));
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

    @Test
    void twoSumIiSortedPairTargetNine() {
        assertArrayEquals(new int[] {1, 2}, TwoSumII.twoSumSorted(new int[] {2, 7, 11, 15}, 9));
    }

    @Test
    void maximumSubarrayKadaneClassic() {
        assertEquals(6, MaxSubarray.maxSubarray(new int[] {-2, 1, -3, 4, -1, 2, 1, -5, 4}));
    }

    @Test
    void validParenthesesNestedBrackets() {
        assertTrue(ValidParentheses.isValidParentheses("({[]})"));
    }

    @Test
    void meetingRoomsIiOverlappingSchedule() {
        assertEquals(2, MeetingRoomsII.minMeetingRooms(new int[][] {{0, 30}, {5, 10}, {15, 20}}));
    }

    @Test
    void numberOfIslandsClassicGrid() {
        char[][] grid = {
            {'1', '1', '0', '0', '0'},
            {'1', '1', '0', '0', '0'},
            {'0', '0', '1', '0', '0'},
            {'0', '0', '0', '1', '1'},
        };
        assertEquals(3, NumberOfIslands.numIslands(grid));
    }

    @Test
    void topKFrequentElementsTwoKeys() {
        assertEquals(List.of(1, 2), TopKFrequentElements.topKFrequent(new int[] {1, 1, 1, 2, 2, 3}, 2));
    }

    @Test
    void longestSubstringWithoutRepeatingPwwkew() {
        assertEquals(3, LongestSubstringWithoutRepeating.lengthOfLongestSubstring("pwwkew"));
    }

    @Test
    void mergeIntervalsOverlapChain() {
        assertArrayEquals(
                new int[][] {{1, 6}, {8, 10}, {15, 18}},
                MergeIntervals.mergeIntervals(new int[][] {{1, 3}, {2, 6}, {8, 10}, {15, 18}}));
    }

    @Test
    void coinChangeMinCoinsEleven() {
        assertEquals(3, CoinChange.minCoins(new int[] {1, 2, 5}, 11));
    }

    @Test
    void trappingRainWaterClassicHeights() {
        assertEquals(
                6,
                TrappingRainWater.trap(new int[] {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1}));
    }

    @Test
    void courseScheduleCycleNotFinishable() {
        assertFalse(CourseSchedule.canFinish(2, new int[][] {{1, 0}, {0, 1}}));
        assertTrue(CourseSchedule.canFinish(2, new int[][] {{1, 0}}));
    }

    @Test
    void wordSearchAbccedOnBoard() {
        char[][] board = {
            {'A', 'B', 'C', 'E'},
            {'S', 'F', 'C', 'S'},
            {'A', 'D', 'E', 'E'},
        };
        assertTrue(WordSearch.wordSearch(board, "ABCCED"));
        assertFalse(WordSearch.wordSearch(board, "ABCD"));
    }

    @Test
    void backtrackingWordSearchVacuousAndMissingPath() {
        assertTrue(WordSearch.wordSearch(new char[][] {{'A'}}, ""));
        assertTrue(WordSearch.wordSearch(new char[][] {{'A'}}, "A"));
        char[][] grid = {
            {'A', 'B', 'C'},
            {'D', 'E', 'F'},
            {'G', 'H', 'I'},
        };
        assertFalse(WordSearch.wordSearch(grid, "ABCG"));
    }

    @Test
    void binaryMinHeapInsertExtractWalkthrough() {
        BinaryHeap<Integer> heap = new BinaryHeap<>();
        for (int v : new int[] {5, 2, 8, 1, 2}) {
            heap.insert(v);
        }
        assertEquals(List.of(1, 2, 2, 5, 8), List.of(
                heap.extractMin(), heap.extractMin(), heap.extractMin(), heap.extractMin(), heap.extractMin()));
    }

    @Test
    void priorityQueueMinSchedulingWalkthrough() {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int v : new int[] {5, 3, 7, 1, 3}) {
            pq.insert(v);
        }
        assertEquals(List.of(1, 3, 3, 5, 7), List.of(
                pq.extractMin(), pq.extractMin(), pq.extractMin(), pq.extractMin(), pq.extractMin()));
    }

    @Test
    void triePrefixSearchWalkthrough() {
        Trie trie = new Trie();
        for (String w : List.of("cat", "car", "dog")) {
            trie.insert(w);
        }
        assertTrue(trie.search("cat"));
        assertFalse(trie.search("ca"));
        assertTrue(trie.startsWith("ca"));
        assertFalse(trie.search("cab"));
        assertTrue(trie.startsWith("do"));
        assertFalse(trie.startsWith("z"));
    }

    @Test
    void networkDelayMaxDistanceFromSource() {
        assertEquals(2, NetworkDelay.networkDelay(4, new int[][] {{1, 0, 1}, {1, 2, 1}, {2, 3, 1}}, 1));
    }

    @Test
    void kruskalMstChainFourVertices() {
        Graph g = new Graph(4, false, true);
        g.addEdge(0, 1, 1);
        g.addEdge(1, 2, 2);
        g.addEdge(2, 3, 3);
        g.addEdge(0, 3, 4);
        assertEquals(6, KruskalMST.totalWeight(g));
    }

    @Test
    void levelOrderFromHeapStyleArray() {
        assertEquals(
                List.of(List.of(3), List.of(9, 20), List.of(15, 7)),
                LevelOrderTraversal.levelOrder(new Integer[] {3, 9, 20, null, null, 15, 7}));
    }

    @Test
    void serializeBinaryTreeRoundTrip() {
        Integer[] values = {1, 2, 3, null, null, 4, 5};
        assertArrayEquals(
                values,
                SerializeBinaryTree.deserialize(SerializeBinaryTree.serialize(values)));
    }

    @Test
    void quickSelectKthSmallestAndLargestRank() {
        int[] nums = {3, 1, 4, 1, 5};
        assertEquals(1, QuickSelect.kthSmallest(nums, 2));
        assertEquals(4, QuickSelect.kthSmallest(nums, 4));
    }

    @Test
    void dfsDiscoveryTimesFromVertexZero() {
        Graph g = new Graph(4, false, false);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 3);
        DFS.DfsResult r = DFS.traverseRecursive(g, 0);
        assertArrayEquals(new int[] {0, 1, 5, 2}, r.discovery());
        assertArrayEquals(new int[] {7, 4, 6, 3}, r.finish());
    }

    @Test
    void lisPatienceSortingClassic() {
        assertEquals(4, LIS.length(new int[] {10, 9, 2, 5, 3, 7, 101, 18}));
    }

    @Test
    void bstInOrderAfterInserts() {
        BST<Integer, String> tree = new BST<>();
        tree.insert(5, "a");
        tree.insert(2, "b");
        tree.insert(7, "c");
        tree.insert(1, "d");
        assertEquals(List.of(1, 2, 5, 7), tree.inOrder());
        assertEquals("b", tree.search(2));
    }
}
