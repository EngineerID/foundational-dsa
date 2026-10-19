package com.dsa.examples;

import com.dsa.examples.dp.LongestPalindromicSubsequence;
import com.dsa.examples.dp.MatrixChain;
import com.dsa.examples.dp.PartitionEqualSubset;
import com.dsa.examples.dp.RodCutting;
import com.dsa.examples.dp.TSPBitmask;
import com.dsa.examples.graphs.AStar;
import com.dsa.examples.graphs.ArticulationBridges;
import com.dsa.examples.graphs.BipartiteCheck;
import com.dsa.examples.graphs.EdmondsKarp;
import com.dsa.examples.graphs.Graph;
import com.dsa.examples.graphs.Hungarian;
import com.dsa.examples.graphs.Kosaraju;
import com.dsa.examples.graphs.TarjanSCC;
import com.dsa.examples.linear.LRUCache;
import com.dsa.examples.linear.SlidingWindowMaximum;
import com.dsa.examples.searching.ReservoirSampling;
import com.dsa.examples.strings.AhoCorasick;
import com.dsa.examples.strings.Manacher;
import com.dsa.examples.strings.SuffixArray;
import com.dsa.examples.trees.LCABinaryLifting;
import com.dsa.examples.trees.RedBlackTree;
import com.dsa.examples.trees.SparseTable;
import com.dsa.examples.trees.Treap;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class Wave2TopicsTest {

    @Test
    void wave2Smoke() {
        Graph g = new Graph(3, true, true);
        g.addEdge(0, 1, 2);
        g.addEdge(1, 2, 3);
        assertEquals(5, AStar.shortestPathLength(g, 0, 2));
        Graph scc = new Graph(5, true, false);
        scc.addEdge(0, 1);
        scc.addEdge(1, 2);
        scc.addEdge(2, 0);
        scc.addEdge(1, 3);
        scc.addEdge(3, 4);
        List<Integer> tSizes = TarjanSCC.stronglyConnectedComponents(scc).stream().map(List::size).sorted().toList();
        List<Integer> kSizes = Kosaraju.stronglyConnectedComponents(scc).stream().map(List::size).sorted().toList();
        assertEquals(tSizes, kSizes);
        Graph bi = new Graph(4, false, false);
        bi.addEdge(0, 1);
        bi.addEdge(1, 2);
        bi.addEdge(2, 3);
        bi.addEdge(3, 0);
        assertTrue(BipartiteCheck.isBipartite(bi));
        assertEquals(3, EdmondsKarp.maxFlow(4, new int[][] {{0, 1, 3}, {1, 2, 2}, {0, 2, 1}, {2, 3, 3}}, 0, 3));
        assertEquals(3, Hungarian.minCost(new int[][] {{4, 1}, {2, 3}}));
        RedBlackTree rb = new RedBlackTree();
        rb.insert(5, 50);
        assertEquals(50, rb.search(5));
        Treap tr = new Treap(1);
        tr.insert(3, 30);
        assertEquals(30, tr.search(3));
        assertEquals(1, new LCABinaryLifting(new int[] {0, 0, 1}).query(2, 1));
        assertEquals(2, new SparseTable(new int[] {1, 3, 2, 5}).query(1, 3));
        assertEquals(3, Manacher.longestPalindromeLength("babad"));
        assertEquals(5, SuffixArray.build("banana")[0]);
        assertTrue(AhoCorasick.search("ushers", new String[] {"he", "she", "his", "hers"}).contains(1));
        assertEquals(4500, MatrixChain.minMultiplications(new int[] {10, 30, 5, 60}));
        assertEquals(4, LongestPalindromicSubsequence.length("bbbab"));
        assertTrue(PartitionEqualSubset.canPartition(new int[] {1, 5, 11, 5}));
        assertEquals(10, RodCutting.maxProfit(new int[] {1, 5, 8, 9}, 4));
        int[][] dist = {{0, 10, 15, 20}, {10, 0, 35, 25}, {15, 35, 0, 30}, {20, 25, 30, 0}};
        assertEquals(80, TSPBitmask.minCost(dist));
        assertEquals(3, ReservoirSampling.sample(new int[] {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}, 3, 42).size());
        assertEquals(List.of(3, 3, 5, 5, 6, 7), SlidingWindowMaximum.maxSlidingWindow(
                new int[] {1, 3, -1, -3, 5, 3, 6, 7}, 3));
        LRUCache cache = new LRUCache(2);
        cache.put(1, 1);
        cache.put(2, 2);
        assertEquals(1, cache.get(1));
        cache.put(3, 3);
        assertEquals(-1, cache.get(2));
    }
}
