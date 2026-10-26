package com.dsa.examples.practice;

import com.dsa.examples.support.PropertyHelpers;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

import static com.dsa.examples.practice.PracticeBruteforce.INF;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

/** Seeded property tests: practice vs {@link PracticeBruteforce} (sorting, search, graphs, dp). */
/** practice-property-topics: bubble-sort selection-sort insertion-sort merge-sort quick-sort heapsort counting-sort radix-sort linear-search binary-search two-sum-ii trapping-rain-water quick-select bfs union-find dijkstra number-of-islands course-schedule topological-sort kruskal-mst prim-mst bellman-ford floyd-warshall network-delay bipartite-check maximum-subarray coin-change knapsack lcs lis edit-distance matrix-chain rod-cutting partition-equal-subset longest-palindromic-subsequence tsp-bitmask */
class PracticePropertyTest {

    private static final int TRIALS = 25;

    @Test
    void propertySorting() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] original = randomIntArray(rng, 15);
            assertSort("bubble-sort", BubbleSortPractice.sort(copy(original)), original);
            assertSort("selection-sort", SelectionSortPractice.sort(copy(original)), original);
            assertSort("insertion-sort", InsertionSortPractice.sort(copy(original)), original);
            assertSort("merge-sort", MergeSortPractice.sort(original), original);
            assertSort("quick-sort", QuickSortPractice.sort(copy(original), false), original);
            assertSort("heapsort", HeapSortPractice.sort(copy(original)), original);
            int[] nn = nonNegative(original);
            assertSort("counting-sort", CountingSortPractice.sort(copy(nn)), nn);
            assertSort("radix-sort", RadixSortPractice.sort(copy(nn)), nn);
        }
    }

    @Test
    void propertyLinearSearch() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] arr = randomIntArray(rng, 15);
            int key = rng.nextDouble() < 0.5 && arr.length > 0 ? arr[rng.nextInt(arr.length)] : 999;
            assertEquals(
                    PracticeBruteforce.refLinearSearch(arr, key),
                    LinearSearchPractice.indexOf(arr, key));
        }
    }

    @Test
    void propertyBinarySearch() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] arr = randomSorted(rng, 15);
            int key = rng.nextDouble() < 0.5 && arr.length > 0 ? arr[rng.nextInt(arr.length)] : 999;
            assertEquals(
                    PracticeBruteforce.refBinarySearch(arr, key),
                    BinarySearchPractice.findIndex(arr, key));
        }
    }

    @Test
    void propertyTwoSumIi() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] arr = randomSorted(rng, 12);
            if (arr.length < 2) {
                continue;
            }
            int i = rng.nextInt(arr.length);
            int j = rng.nextInt(arr.length);
            while (j == i) {
                j = rng.nextInt(arr.length);
            }
            int lo = Math.min(i, j);
            int hi = Math.max(i, j);
            int target = arr[lo] + arr[hi];
            assertArrayEquals(
                    PracticeBruteforce.refTwoSumSorted(arr, target),
                    TwoSumSorted.solve(arr, target));
        }
    }

    @Test
    void propertyTrappingRainWater() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] h = nonNegative(randomIntArray(rng, 12));
            assertEquals(PracticeBruteforce.refTrap(h), TrappingRainWater.trap(h));
        }
    }

    @Test
    void propertyQuickSelect() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] nums = randomIntArray(rng, 12);
            if (nums.length == 0) {
                continue;
            }
            int k = 1 + rng.nextInt(nums.length);
            assertEquals(PracticeBruteforce.refKthLargest(nums, k), KthLargest.solve(nums, k));
        }
    }

    @Test
    void propertyMaximumSubarray() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] nums = randomIntArray(rng, 12);
            if (nums.length == 0) {
                continue;
            }
            assertEquals(PracticeBruteforce.refMaxSubarray(nums), MaxSubarray.solve(nums));
        }
    }

    @Test
    void propertyCoinChange() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] coins = positiveCoins(rng);
            if (coins.length == 0) {
                continue;
            }
            int amount = rng.nextInt(15);
            assertEquals(
                    PracticeBruteforce.refCoinChange(coins, amount),
                    CoinChangePractice.minCoins(coins, amount));
        }
    }

    @Test
    void propertyKnapsack() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 1 + rng.nextInt(8);
            int[] w = new int[n];
            int[] v = new int[n];
            for (int i = 0; i < n; i++) {
                w[i] = 1 + rng.nextInt(5);
                v[i] = rng.nextInt(10);
            }
            int cap = 1 + rng.nextInt(12);
            assertEquals(
                    PracticeBruteforce.refKnapsack(w, v, cap),
                    KnapsackPractice.maxValue(w, v, cap));
        }
    }

    @Test
    void propertyLcs() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            String a = randomString(rng);
            String b = randomString(rng);
            assertEquals(PracticeBruteforce.refLcs(a, b), LcsPractice.length(a, b));
        }
    }

    @Test
    void propertyLis() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] nums = randomIntArray(rng, 12);
            assertEquals(PracticeBruteforce.refLis(nums), LisPractice.length(nums));
        }
    }

    @Test
    void propertyEditDistance() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            String a = randomString(rng);
            String b = randomString(rng);
            assertEquals(PracticeBruteforce.refEditDistance(a, b), EditDistancePractice.editDistance(a, b));
        }
    }

    @Test
    void propertyMatrixChain() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 2 + rng.nextInt(4);
            int[] dims = new int[n + 1];
            for (int i = 0; i <= n; i++) {
                dims[i] = 2 + rng.nextInt(5);
            }
            assertEquals(PracticeBruteforce.refMatrixChain(dims), MatrixChainPractice.minMultiplications(dims));
        }
    }

    @Test
    void propertyRodCutting() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 1 + rng.nextInt(8);
            int[] prices = new int[n];
            for (int i = 0; i < n; i++) {
                prices[i] = rng.nextInt(10);
            }
            assertEquals(PracticeBruteforce.refRodCutting(prices, n), RodCuttingPractice.maxProfit(prices, n));
        }
    }

    @Test
    void propertyPartitionEqualSubset() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int[] nums = nonNegative(randomIntArray(rng, 10));
            if (nums.length == 0) {
                continue;
            }
            assertEquals(
                    PracticeBruteforce.refPartitionEqual(nums),
                    PartitionEqualSubsetPractice.canPartition(nums));
        }
    }

    @Test
    void propertyLongestPalindromicSubsequence() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            String s = randomString(rng);
            assertEquals(
                    PracticeBruteforce.refLps(s),
                    LongestPalindromicSubsequencePractice.length(s));
        }
    }

    @Test
    void propertyTspBitmask() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 2 + rng.nextInt(3);
            int[][] dist = new int[n][n];
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    if (i != j) {
                        dist[i][j] = 1 + rng.nextInt(9);
                    }
                }
            }
            assertEquals(PracticeBruteforce.refTsp(dist), TspBitmaskPractice.minCost(dist));
        }
    }

    @Test
    void propertyBfs() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 2 + rng.nextInt(6);
            List<int[]> edgeList = new ArrayList<>();
            for (int i = 1; i < n; i++) {
                edgeList.add(new int[] {i - 1, i});
            }
            if (rng.nextDouble() < 0.3 && n > 2) {
                edgeList.add(new int[] {0, n - 1});
            }
            int[][] edges = edgeList.toArray(new int[0][]);
            int src = rng.nextInt(n);
            assertArrayEquals(PracticeBruteforce.refBfs(n, edges, src), BfsPractice.distances(n, edges, src));
        }
    }

    @Test
    void propertyUnionFind() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 2 + rng.nextInt(6);
            int[][] unions = new int[n + 2][2];
            for (int i = 0; i < unions.length; i++) {
                unions[i][0] = rng.nextInt(n);
                unions[i][1] = rng.nextInt(n);
            }
            int a = rng.nextInt(n);
            int b = rng.nextInt(n);
            assertEquals(
                    PracticeBruteforce.refUfConnected(n, unions, a, b),
                    UnionFindPractice.connected(n, unions, a, b));
        }
    }

    @Test
    void propertyDijkstra() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 2 + rng.nextInt(5);
            int[][] edges = new int[n - 1][3];
            for (int i = 1; i < n; i++) {
                edges[i - 1] = new int[] {i - 1, i, 1 + rng.nextInt(5)};
            }
            int src = rng.nextInt(n);
            assertArrayEquals(
                    PracticeBruteforce.refDijkstra(n, edges, src),
                    DijkstraPractice.shortestDistances(n, edges, src));
        }
    }

    @Test
    void propertyNumberOfIslands() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int rows = 1 + rng.nextInt(4);
            int cols = 1 + rng.nextInt(4);
            char[][] grid = new char[rows][cols];
            for (int r = 0; r < rows; r++) {
                for (int c = 0; c < cols; c++) {
                    grid[r][c] = rng.nextDouble() < 0.4 ? '1' : '0';
                }
            }
            char[][] copy = copyGrid(grid);
            assertEquals(PracticeBruteforce.refNumIslands(grid), NumIslands.count(copy));
        }
    }

    @Test
    void propertyCourseSchedule() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 2 + rng.nextInt(5);
            List<int[]> list = new ArrayList<>();
            for (int i = 1; i < n; i++) {
                list.add(new int[] {i, i - 1});
            }
            if (rng.nextDouble() < 0.2) {
                list.add(new int[] {0, n - 1});
            }
            int[][] edges = list.toArray(new int[0][]);
            assertEquals(PracticeBruteforce.refCanFinish(n, edges), CourseSchedule.canFinish(n, edges));
        }
    }

    @Test
    void propertyTopologicalSort() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 2 + rng.nextInt(5);
            int[][] edges = new int[n - 1][2];
            for (int i = 1; i < n; i++) {
                edges[i - 1] = new int[] {i - 1, i};
            }
            List<Integer> order = TopologicalSortPractice.order(n, edges);
            if (!PracticeBruteforce.refCanFinish(n, edges)) {
                assertTrue(order.isEmpty());
            } else {
                assertTrue(PracticeBruteforce.refTopoValid(n, edges, order));
            }
        }
    }

    @Test
    void propertyKruskalMstAndPrimMst() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 2 + rng.nextInt(5);
            int[][] edges = new int[n - 1][3];
            for (int i = 1; i < n; i++) {
                edges[i - 1] = new int[] {i - 1, i, 1 + rng.nextInt(5)};
            }
            int want = PracticeBruteforce.refMstWeight(n, edges);
            assertEquals(want, MstKruskalPractice.totalWeight(n, edges));
            assertEquals(want, PrimMstPractice.totalWeight(n, edges));
        }
    }

    @Test
    void propertyBellmanFord() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 2 + rng.nextInt(4);
            int[][] edges = new int[n - 1][3];
            for (int i = 1; i < n; i++) {
                edges[i - 1] = new int[] {i - 1, i, 1 + rng.nextInt(3)};
            }
            var res = BellmanFordPractice.shortestPaths(n, edges, 0);
            assertFalse(res.hasNegativeCycle());
            assertArrayEquals(PracticeBruteforce.refDijkstra(n, edges, 0), res.distances());
        }
    }

    @Test
    void propertyFloydWarshall() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 2 + rng.nextInt(4);
            List<int[]> list = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                for (int j = i + 1; j < n; j++) {
                    if (rng.nextDouble() < 0.6) {
                        list.add(new int[] {i, j, 1 + rng.nextInt(4)});
                    }
                }
            }
            int[][] edges = list.toArray(new int[0][]);
            int[][] fw = FloydWarshallPractice.allPairsDistances(n, edges);
            for (int src = 0; src < n; src++) {
                assertArrayEquals(PracticeBruteforce.refDijkstra(n, edges, src), fw[src]);
            }
        }
    }

    @Test
    void propertyNetworkDelay() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 2 + rng.nextInt(5);
            int[][] edges = new int[n - 1][3];
            for (int i = 1; i < n; i++) {
                edges[i - 1] = new int[] {0, i, 1 + rng.nextInt(4)};
            }
            int[] dist = DijkstraPractice.shortestDistances(n, edges, 0);
            boolean unreachable = false;
            for (int d : dist) {
                if (d >= INF) {
                    unreachable = true;
                    break;
                }
            }
            if (unreachable) {
                assertEquals(-1, NetworkDelay.networkDelay(n, edges, 0));
            } else {
                int max = dist[0];
                for (int d : dist) {
                    max = Math.max(max, d);
                }
                assertEquals(max, NetworkDelay.networkDelay(n, edges, 0));
            }
        }
    }

    @Test
    void propertyBipartiteCheck() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < TRIALS; t++) {
            int n = 2 + rng.nextInt(6);
            List<int[]> list = new ArrayList<>();
            for (int i = 1; i < n; i++) {
                list.add(new int[] {i - 1, i});
            }
            if (rng.nextDouble() < 0.15 && n >= 3) {
                list.add(new int[] {0, 2});
            }
            int[][] edges = list.toArray(new int[0][]);
            assertEquals(
                    PracticeBruteforce.refBipartite(n, edges),
                    BipartiteCheckPractice.isBipartite(n, edges));
        }
    }

    private static void assertSort(String name, int[] got, int[] original) {
        int[] want = PracticeBruteforce.refSorted(original);
        assertTrue(PropertyHelpers.isSorted(got), name);
        assertTrue(PropertyHelpers.isPermutation(original, got), name);
        assertArrayEquals(want, got, name);
    }

    private static int[] copy(int[] a) {
        return Arrays.copyOf(a, a.length);
    }

    private static int[] randomIntArray(Random rng, int maxLen) {
        int n = rng.nextInt(maxLen + 1);
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = rng.nextInt(21) - 10;
        }
        return arr;
    }

    private static int[] randomSorted(Random rng, int maxLen) {
        int[] arr = randomIntArray(rng, maxLen);
        Arrays.sort(arr);
        return arr;
    }

    private static int[] nonNegative(int[] a) {
        int[] out = new int[a.length];
        for (int i = 0; i < a.length; i++) {
            out[i] = Math.abs(a[i]);
        }
        return out;
    }

    private static int[] positiveCoins(Random rng) {
        int n = rng.nextInt(6);
        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            int c = rng.nextInt(12);
            if (c > 0) {
                list.add(c);
            }
        }
        int[] out = new int[list.size()];
        for (int i = 0; i < list.size(); i++) {
            out[i] = list.get(i);
        }
        return out;
    }

    private static String randomString(Random rng) {
        int n = rng.nextInt(9);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < n; i++) {
            sb.append((char) ('a' + rng.nextInt(3)));
        }
        return sb.toString();
    }

    private static char[][] copyGrid(char[][] grid) {
        char[][] out = new char[grid.length][];
        for (int i = 0; i < grid.length; i++) {
            out[i] = grid[i].clone();
        }
        return out;
    }
}
