package com.dsa.examples.catalog;

import com.dsa.examples.graphs.*;
import com.dsa.examples.hashing.BloomFilter;
import com.dsa.examples.hashing.HashTableChaining;
import com.dsa.examples.hashing.HashTableOpenAddressing;
import com.dsa.examples.heaps.PriorityQueue;
import com.dsa.examples.linear.*;
import com.dsa.examples.dp.CoinChange;
import com.dsa.examples.dp.EditDistance;
import com.dsa.examples.dp.Knapsack01;
import com.dsa.examples.dp.LCS;
import com.dsa.examples.dp.LIS;
import com.dsa.examples.searching.BinarySearch;
import com.dsa.examples.strings.RabinKarp;
import com.dsa.examples.strings.ZAlgorithm;
import com.dsa.examples.sorting.*;
import com.dsa.examples.trees.*;
import com.dsa.examples.trees.FenwickTree;
import com.dsa.examples.trees.SegmentTree;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

/** Catalog edge themes for items beyond EdgeCaseThemesTest. */
class CatalogItemEdgesTest {

    private static final int LARGE_N = 256;

    private static void sortBattery(Sorter sorter) {
        int[] empty = {};
        sorter.sort(empty);
        assertArrayEquals(new int[]{}, empty);
        int[] single = {7};
        sorter.sort(single);
        assertArrayEquals(new int[]{7}, single);
        int[] dup = {2, 2, 1};
        sorter.sort(dup);
        assertArrayEquals(new int[]{1, 2, 2}, dup);
        int[] large = new int[LARGE_N];
        for (int i = 0; i < LARGE_N; i++) {
            large[i] = LARGE_N - i;
        }
        sorter.sort(large);
        for (int i = 0; i < LARGE_N; i++) {
            assertEquals(i + 1, large[i]);
        }
    }

    @Test
    void remainingSortsEdgeThemes() {
        sortBattery(SelectionSort::sort);
        sortBattery(InsertionSort::sort);
        sortBattery(HeapSort::sort);
        int[] radix = {170, 45, 75, 90, 802, 24, 2, 66};
        RadixSort.sort(radix);
        assertArrayEquals(new int[]{2, 24, 45, 66, 75, 90, 170, 802}, radix);
    }

    @Test
    void binarySearchBoundaryEdgeThemes() {
        assertEquals(-1, BinarySearch.firstOccurrence(new int[]{}, 1));
        assertEquals(0, BinarySearch.firstOccurrence(new int[]{2}, 2));
        assertEquals(1, BinarySearch.firstOccurrence(new int[]{1, 2, 2, 3}, 2));
        assertEquals(2, BinarySearch.lastOccurrence(new int[]{1, 2, 2, 3}, 2));
        assertEquals(-1, BinarySearch.search(new int[]{3, 1}, 1));
    }

    @Test
    void linearStructuresEdgeThemes() {
        SinglyLinkedList<Integer> sll = new SinglyLinkedList<>();
        assertEquals(0, sll.size());
        sll.addFirst(1);
        assertEquals(1, sll.get(0));
        sll.addLast(1);
        for (int i = 0; i < LARGE_N; i++) {
            sll.addLast(i);
        }
        assertThrows(IndexOutOfBoundsException.class, () -> sll.get(-1));

        DoublyLinkedList<Integer> dll = new DoublyLinkedList<>();
        dll.addFirst(1);
        dll.addLast(2);
        assertEquals(1, dll.remove(0));
        for (int i = 0; i < LARGE_N; i++) {
            dll.addLast(i);
        }
        assertThrows(IndexOutOfBoundsException.class, () -> dll.get(dll.size()));

        Queue<Integer> q = new Queue<>();
        assertTrue(q.isEmpty());
        q.enqueue(1);
        q.enqueue(1);
        assertEquals(1, q.dequeue());
        for (int i = 0; i < LARGE_N; i++) {
            q.enqueue(i);
        }
        assertThrows(IllegalStateException.class, () -> new Queue<Integer>().dequeue());

        Deque<Integer> dq = new Deque<>();
        dq.addLast(1);
        dq.addFirst(2);
        assertEquals(2, dq.removeFirst());
        for (int i = 0; i < LARGE_N; i++) {
            dq.addLast(i);
        }
        assertThrows(IllegalStateException.class, () -> new Deque<Integer>().removeLast());
    }

    @Test
    void priorityQueueEdgeThemes() {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        assertTrue(pq.isEmpty());
        pq.insert(3);
        pq.insert(1);
        assertEquals(1, pq.peek());
        pq.insert(1);
        assertEquals(1, pq.extractMin());
        for (int i = 0; i < LARGE_N; i++) {
            pq.insert(i);
        }
        assertThrows(IllegalStateException.class, () -> new PriorityQueue<Integer>().extractMin());
    }

    @Test
    void treesAndHashingEdgeThemes() {
        BST<Integer, String> bst = new BST<>();
        assertNull(bst.search(1));
        bst.insert(5, "v");
        bst.insert(5, "dup");
        assertEquals("dup", bst.search(5));
        for (int i = 0; i < 16; i++) {
            bst.insert(i, "v");
        }
        assertFalse(TreeTraversals.inOrderRecursive(bst.getRoot()).isEmpty());

        AVLTree<Integer, String> avl = new AVLTree<>();
        avl.insert(10, "a");
        avl.insert(5, "dup");
        assertEquals("dup", avl.search(5));

        OrderStatisticTree<Integer, String> ost = new OrderStatisticTree<>();
        ost.insert(3, "x");
        assertEquals(3, ost.select(1));
        assertThrows(IllegalArgumentException.class, () -> ost.select(0));

        IntervalTree it = new IntervalTree();
        it.insert(new Interval(0, 10));
        assertFalse(it.overlapSearch(new Interval(5, 5)).isEmpty());

        BTree bt = new BTree(2);
        bt.insert(1);
        assertTrue(bt.search(1));

        Trie trie = new Trie();
        assertFalse(trie.search(""));
        trie.insert("a");
        assertTrue(trie.search("a"));
        String longWord = "a".repeat(8);
        trie.insert(longWord);
        assertTrue(trie.search(longWord));

        HashTableChaining<String, Integer> ht = new HashTableChaining<>();
        ht.put("a", 1);
        ht.put("a", 2);
        assertEquals(2, ht.get("a"));

        HashTableOpenAddressing<String, Integer> oa =
                new HashTableOpenAddressing<>(HashTableOpenAddressing.ProbingStrategy.LINEAR);
        oa.put("k", 1);
        assertEquals(1, oa.get("k"));

        BloomFilter bf = new BloomFilter(10, 0.01);
        assertFalse(bf.mightContain("missing"));
        bf.add("x");
        assertTrue(bf.mightContain("x"));
    }

    @Test
    void newTreesStringsDpEdgeThemes() {
        SegmentTree st = new SegmentTree(new int[] {1, 2, 3});
        assertEquals(6, st.rangeSum(0, 2));
        FenwickTree ft = new FenwickTree(2);
        ft.add(0, 1);
        ft.add(1, 2);
        assertEquals(3, ft.rangeSum(0, 1));
        assertEquals(0, ZAlgorithm.search("abc", ""));
        assertEquals(1, RabinKarp.search("abc", "b"));
        assertEquals(3, LIS.length(new int[] {1, 2, 3}));
        assertEquals(1, LCS.length("ab", "a"));
        assertEquals(5, Knapsack01.maxValue(new int[] {1}, new int[] {5}, 1));
        assertEquals(1, EditDistance.distance("a", "b"));
        assertEquals(0, CoinChange.minCoins(new int[] {1}, 0));
    }

    @Test
    void graphAlgorithmsEdgeThemes() {
        Graph g0 = new Graph(0, false, false);
        assertThrows(IndexOutOfBoundsException.class, () -> DFS.traverseRecursive(g0, 0));

        Graph g1 = new Graph(1, false, false);
        assertEquals(1, DFS.traverseIterative(g1, 0).discovery().length);

        Graph dag = new Graph(3, true, false);
        dag.addEdge(0, 1);
        dag.addEdge(1, 2);
        assertEquals(3, TopologicalSort.kahn(dag).size());

        Graph cyclic = new Graph(2, true, false);
        cyclic.addEdge(0, 1);
        cyclic.addEdge(1, 0);
        assertTrue(TopologicalSort.kahn(cyclic).isEmpty());

        Graph wg = new Graph(3, false, true);
        wg.addEdge(0, 1, 1);
        wg.addEdge(1, 2, 2);
        assertEquals(3, Dijkstra.shortestPaths(wg, 0)[2]);

        Graph neg = new Graph(2, true, true);
        neg.addEdge(0, 1, -1);
        BellmanFord.Result bf = BellmanFord.shortestPaths(neg, 0);
        assertFalse(bf.hasNegativeCycle());
        assertEquals(-1, bf.distances()[1]);

        assertEquals(3, FloydWarshall.allPairsShortestPaths(wg)[0][2]);

        Graph mstG = new Graph(3, false, true);
        mstG.addEdge(0, 1, 1);
        mstG.addEdge(1, 2, 2);
        mstG.addEdge(0, 2, 4);
        assertEquals(3, KruskalMST.totalWeight(mstG));
        assertEquals(3, PrimMST.totalWeight(mstG));
        assertEquals(3, BoruvkaMST.totalWeight(mstG));

        Graph gl = new Graph(LARGE_N, false, false);
        for (int i = 0; i < LARGE_N - 1; i++) {
            gl.addEdge(i, i + 1);
        }
        assertEquals(LARGE_N - 1, BFS.distances(gl, 0)[LARGE_N - 1]);
        assertThrows(IndexOutOfBoundsException.class, () -> Dijkstra.shortestPaths(wg, 99));
    }

    private interface Sorter {
        void sort(int[] arr);
    }
}
