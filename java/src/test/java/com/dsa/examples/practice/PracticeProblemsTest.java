package com.dsa.examples.practice;

import com.dsa.examples.graphs.BellmanFord;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class PracticeProblemsTest {

    @Test
    void twoSumSorted() {
        assertArrayEquals(new int[] { 1, 2 }, TwoSumSorted.solve(new int[] { 2, 7, 11, 15 }, 9));
    }

    @Test
    void maxSubarray() {
        assertEquals(6, MaxSubarray.solve(new int[] { -2, 1, -3, 4, -1, 2, 1, -5, 4 }));
    }

    @Test
    void validParentheses() {
        assertTrue(ValidParentheses.solve("()[]{}"));
        assertFalse(ValidParentheses.solve("(]"));
    }

    @Test
    void meetingRooms() {
        assertEquals(2, MeetingRooms.minRooms(new int[][] { { 0, 30 }, { 5, 10 }, { 15, 20 } }));
    }

    @Test
    void numIslands() {
        char[][] grid = {
                { '1', '1', '0', '0', '0' },
                { '1', '1', '0', '0', '0' },
                { '0', '0', '1', '0', '0' },
                { '0', '0', '0', '1', '1' },
        };
        assertEquals(3, NumIslands.count(grid));
    }

    @Test
    void topKFrequent() {
        assertEquals(java.util.List.of(1, 2), TopKFrequent.solve(new int[] { 1, 1, 1, 2, 2, 3 }, 2));
    }

    @Test
    void courseSchedule() {
        assertTrue(CourseSchedule.canFinish(2, new int[][] { { 1, 0 } }));
        assertFalse(CourseSchedule.canFinish(2, new int[][] { { 1, 0 }, { 0, 1 } }));
    }

    @Test
    void longestSubstring() {
        assertEquals(3, LongestSubstring.lengthOfLongestSubstring("abcabcbb"));
    }

    @Test
    void coinChangePractice() {
        assertEquals(3, CoinChangePractice.minCoins(new int[] { 1, 2, 5 }, 11));
    }

    @Test
    void lruCacheDesign() {
        LRUCacheDesign cache = new LRUCacheDesign(2);
        cache.put(1, 1);
        cache.put(2, 2);
        assertEquals(1, cache.get(1));
        cache.put(3, 3);
        assertEquals(-1, cache.get(2));
        assertEquals(3, cache.get(3));
    }

    @Test
    void mergeIntervals() {
        int[][] merged = MergeIntervals.merge(new int[][] { { 1, 3 }, { 2, 6 }, { 8, 10 }, { 15, 18 } });
        assertArrayEquals(new int[] { 1, 6 }, merged[0]);
        assertArrayEquals(new int[] { 8, 10 }, merged[1]);
        assertArrayEquals(new int[] { 15, 18 }, merged[2]);
    }

    @Test
    void levelOrder() {
        List<List<Integer>> levels = LevelOrderTraversal.levelOrder(
                new Integer[] { 3, 9, 20, null, null, 15, 7 });
        assertEquals(List.of(List.of(3), List.of(9, 20), List.of(15, 7)), levels);
    }

    @Test
    void wordSearch() {
        assertTrue(WordSearch.exists(
                new char[][] {
                        { 'A', 'B', 'C', 'E' },
                        { 'S', 'F', 'C', 'S' },
                        { 'A', 'D', 'E', 'E' },
                },
                "ABCCED"));
        assertFalse(WordSearch.exists(
                new char[][] {
                        { 'A', 'B', 'C', 'E' },
                        { 'S', 'F', 'C', 'S' },
                        { 'A', 'D', 'E', 'E' },
                },
                "ABCD"));
    }

    @Test
    void kthLargest() {
        assertEquals(5, KthLargest.solve(new int[] { 3, 2, 1, 5, 6, 4 }, 2));
    }

    @Test
    void mstKruskalPractice() {
        int weight = MstKruskalPractice.totalWeight(
                4, new int[][] { { 0, 1, 1 }, { 1, 2, 2 }, { 2, 3, 3 }, { 0, 3, 4 } });
        assertEquals(6, weight);
    }

    @Test
    void trappingRainWater() {
        assertEquals(6, TrappingRainWater.trap(new int[] { 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 }));
    }

    @Test
    void editDistancePractice() {
        assertEquals(3, EditDistancePractice.editDistance("kitten", "sitting"));
    }

    @Test
    void treeCodecRoundTrip() {
        Integer[] values = new Integer[] { 3, 9, 20, null, null, 15, 7 };
        assertArrayEquals(values, TreeCodecPractice.deserialize(TreeCodecPractice.serialize(values)));
    }

    @Test
    void networkDelay() {
        assertEquals(
                2,
                NetworkDelay.networkDelay(
                        4, new int[][] { { 1, 0, 1 }, { 1, 2, 1 }, { 2, 3, 1 } }, 1));
    }

    @Test
    void slidingWindowMax() {
        assertArrayEquals(
                new int[] { 3, 3, 5, 5, 6, 7 },
                SlidingWindowMax.maxSlidingWindow(new int[] { 1, 3, -1, -3, 5, 3, 6, 7 }, 3));
    }

    @Test
    void binarySearchPractice() {
        assertEquals(3, BinarySearchPractice.findIndex(new int[] { 1, 3, 5, 7, 9, 11 }, 7));
        assertEquals(-1, BinarySearchPractice.findIndex(new int[] { 1, 3, 5, 7, 9, 11 }, 8));
    }

    @Test
    void knapsackPractice() {
        assertEquals(22, KnapsackPractice.maxValue(new int[] { 1, 2, 3 }, new int[] { 6, 10, 12 }, 5));
    }

    @Test
    void lcsPractice() {
        assertEquals(3, LcsPractice.length("abcde", "ace"));
    }

    @Test
    void kmpPractice() {
        assertEquals(0, KmpPractice.firstIndex("ababcababa", "aba"));
    }

    @Test
    void triePractice() {
        TriePractice trie = new TriePractice();
        trie.insert("cat");
        trie.insert("car");
        assertTrue(trie.search("cat"));
        assertFalse(trie.search("ca"));
        assertTrue(trie.startsWith("ca"));
    }

    @Test
    void bfsPractice() {
        assertArrayEquals(
                new int[] { 0, 1, 1, 2, -1 },
                BfsPractice.distances(5, new int[][] { { 0, 1 }, { 0, 2 }, { 1, 3 } }, 0));
    }

    @Test
    void unionFindPractice() {
        assertTrue(UnionFindPractice.connected(5, new int[][] { { 0, 1 }, { 2, 3 }, { 1, 2 } }, 0, 3));
        assertFalse(UnionFindPractice.connected(5, new int[][] { { 0, 1 }, { 2, 3 }, { 1, 2 } }, 0, 4));
    }

    @Test
    void binaryHeapPractice() {
        assertArrayEquals(new int[] { 1, 2, 2, 5, 8 }, BinaryHeapPractice.extractOrder(new int[] { 5, 2, 8, 1, 2 }));
    }

    @Test
    void dijkstraPractice() {
        assertArrayEquals(
                new int[] { 0, 1, 3, 4 },
                DijkstraPractice.shortestDistances(
                        4,
                        new int[][] {
                            { 0, 1, 1 }, { 0, 2, 4 }, { 1, 2, 2 }, { 1, 3, 5 }, { 2, 3, 1 }
                        },
                        0));
    }

    @Test
    void dfsPractice() {
        DfsPractice.Times t =
                DfsPractice.traverse(4, new int[][] { { 0, 1 }, { 0, 2 }, { 1, 3 } }, 0, false);
        assertArrayEquals(new int[] { 0, 1, 5, 2 }, t.discovery());
    }

    @Test
    void lisPractice() {
        assertEquals(4, LisPractice.length(new int[] { 10, 9, 2, 5, 3, 7, 101, 18 }));
    }

    @Test
    void mergeSortPractice() {
        assertArrayEquals(new int[] { 1, 2, 2, 5, 8 }, MergeSortPractice.sort(new int[] { 5, 2, 8, 1, 2 }));
    }

    @Test
    void topologicalSortPractice() {
        assertEquals(
                List.of(0, 1, 2, 3),
                TopologicalSortPractice.order(4, new int[][] { { 0, 1 }, { 0, 2 }, { 1, 3 } }));
    }

    @Test
    void priorityQueuePractice() {
        assertArrayEquals(new int[] { 1, 3, 3, 5, 7 }, PriorityQueuePractice.extractOrder(new int[] { 5, 3, 7, 1, 3 }));
    }

    @Test
    void monotonicStackPractice() {
        assertArrayEquals(new int[] { 4, 2, 4, -1, -1 }, MonotonicStackPractice.nextGreater(new int[] { 2, 1, 2, 4, 3 }));
    }

    @Test
    void quickSortPractice() {
        assertArrayEquals(new int[] { 1, 2, 3 }, QuickSortPractice.sort(new int[] { 3, 1, 2 }, false));
    }

    @Test
    void bstPractice() {
        BstPractice tree = new BstPractice();
        tree.insert(5, "a");
        tree.insert(2, "b");
        tree.insert(7, "c");
        assertEquals(List.of(2, 5, 7), tree.inOrderKeys());
        assertEquals("b", tree.search(2));
    }

    @Test
    void primMstPractice() {
        assertEquals(
                6,
                PrimMstPractice.totalWeight(
                        4, new int[][] { { 0, 1, 1 }, { 1, 2, 2 }, { 2, 3, 3 }, { 0, 3, 4 } }));
    }

    @Test
    void stackPractice() {
        StackPractice s = new StackPractice();
        s.push(1);
        s.push(2);
        assertEquals(2, s.pop());
        assertEquals(1, s.peek());
    }

    @Test
    void heapSortPractice() {
        assertArrayEquals(new int[] { 1, 2, 2, 5, 8 }, HeapSortPractice.sort(new int[] { 5, 2, 8, 1, 2 }));
    }

    @Test
    void queuePractice() {
        QueuePractice q = new QueuePractice();
        q.enqueue(1);
        q.enqueue(2);
        assertEquals(1, q.dequeue());
        assertEquals(2, q.peek());
    }

    @Test
    void dequePractice() {
        DequePractice dq = new DequePractice();
        dq.addLast(1);
        dq.addFirst(0);
        assertEquals(0, dq.removeFirst());
        assertEquals(1, dq.removeLast());
        assertTrue(dq.isEmpty());
    }

    @Test
    void countingSortPractice() {
        assertArrayEquals(new int[] { 0, 1, 2, 2, 2, 2, 3, 4 }, CountingSortPractice.sort(new int[] { 4, 2, 0, 2, 1, 3, 2, 2 }));
    }

    @Test
    void radixSortPractice() {
        assertArrayEquals(new int[] { 2, 24, 45 }, RadixSortPractice.sort(new int[] { 45, 2, 24 }));
    }

    @Test
    void rabinKarpPractice() {
        assertEquals(0, RabinKarpPractice.firstIndex("ababcababa", "aba"));
    }

    @Test
    void bellmanFordPractice() {
        BellmanFord.Result r =
                BellmanFordPractice.shortestPaths(
                        3, new int[][] { { 0, 1, 1 }, { 1, 2, -2 } }, 0);
        assertFalse(r.hasNegativeCycle());
        assertArrayEquals(new int[] { 0, 1, -1 }, r.distances());
    }

    @Test
    void segmentTreePractice() {
        SegmentTreePractice st = new SegmentTreePractice(new int[] { 1, 3, 5, 7 });
        assertEquals(9, st.rangeSum(0, 2));
        st.update(1, 10);
        assertEquals(11, st.rangeSum(0, 1));
    }
}
