const { isPermutation, isSorted } = require('../_propertyHelpers');
const {
  PRACTICE_PROPERTY_TRIALS,
  seededRng,
  randomIntArray,
  randomSortedArray,
  randomNonNegative,
} = require('./_practicePropertyHelpers');
const bf = require('./practiceBruteforce');

const { bubbleSort } = require('../../src/practice/bubbleSortPractice');
const { selectionSort } = require('../../src/practice/selectionSortPractice');
const { insertionSort } = require('../../src/practice/insertionSortPractice');
const { mergeSort } = require('../../src/practice/mergeSortPractice');
const { quickSort } = require('../../src/practice/quickSortPractice');
const { heapSort } = require('../../src/practice/heapsortPractice');
const { countingSort } = require('../../src/practice/countingSortPractice');
const { radixSort } = require('../../src/practice/radixSortPractice');
const { findIndex: linearFind } = require('../../src/practice/linearSearchPractice');
const { findIndex: binaryFind } = require('../../src/practice/binarySearchPractice');
const { twoSumSorted } = require('../../src/practice/twoSumSorted');
const { trap } = require('../../src/practice/trappingRainWater');
const { kthLargest } = require('../../src/practice/kthLargest');
const { maxSubarray } = require('../../src/practice/maxSubarray');
const { coinChange } = require('../../src/practice/coinChange');
const { knapsackMaxValue } = require('../../src/practice/knapsackPractice');
const { lcsLength } = require('../../src/practice/lcsPractice');
const { lisLength } = require('../../src/practice/lisPractice');
const { editDistance } = require('../../src/practice/editDistancePractice');
const { minCost: matrixMinCost } = require('../../src/practice/matrixChainPractice');
const { maxRevenue: rodMaxRevenue } = require('../../src/practice/rodCuttingPractice');
const { canSplitEqualSubset } = require('../../src/practice/partitionEqualSubsetPractice');
const {
  longestPalindromicSubsequenceLength,
} = require('../../src/practice/longestPalindromicSubsequencePractice');
const { bfsDistances } = require('../../src/practice/bfsPractice');
const { connected: ufConnected } = require('../../src/practice/unionFindPractice');
const { shortestDistances } = require('../../src/practice/dijkstraPractice');
const { numIslands } = require('../../src/practice/numIslands');
const { canFinish } = require('../../src/practice/courseSchedule');
const { topologicalOrder } = require('../../src/practice/topologicalSortPractice');
const { mstTotalWeight } = require('../../src/practice/mstKruskal');
const { mstTotalWeight: primMst } = require('../../src/practice/primMstPractice');
const { bellmanFordResult } = require('../../src/practice/bellmanFordPractice');
const { allPairsDistances } = require('../../src/practice/floydWarshallPractice');
const { networkDelay } = require('../../src/practice/networkDelay');
const { checkBipartite } = require('../../src/practice/bipartiteCheckPractice');
const { tspMinCost } = require('../../src/practice/tspBitmaskPractice');
const { GRAPH_UNREACHABLE: INF } = require('../../src/graphs/graphInf');

const SORTERS = [
  ['bubble-sort', bubbleSort],
  ['selection-sort', selectionSort],
  ['insertion-sort', insertionSort],
  ['merge-sort', mergeSort],
  ['quick-sort', quickSort],
  ['heapsort', heapSort],
  ['counting-sort', countingSort],
  ['radix-sort', radixSort],
];

function randomString(rng, maxLen = 8) {
  const n = Math.floor(rng() * (maxLen + 1));
  let s = '';
  for (let i = 0; i < n; i++) s += String.fromCharCode(97 + Math.floor(rng() * 3));
  return s;
}

// practice-property-topics: bubble-sort selection-sort insertion-sort merge-sort quick-sort heapsort counting-sort radix-sort linear-search binary-search two-sum-ii trapping-rain-water quick-select bfs union-find dijkstra number-of-islands course-schedule topological-sort kruskal-mst prim-mst bellman-ford floyd-warshall network-delay bipartite-check maximum-subarray coin-change knapsack lcs lis edit-distance matrix-chain rod-cutting partition-equal-subset longest-palindromic-subsequence tsp-bitmask
describe('practice property vs brute force', () => {
  describe('sorting', () => {
    test('practice sorts match reference', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const original = randomIntArray(rng, 15);
        for (const [name, sortFn] of SORTERS) {
          const input =
            name === 'counting-sort' || name === 'radix-sort'
              ? randomNonNegative(rng, 12)
              : original;
          const got = sortFn([...input]);
          const want = bf.refSorted(input);
          expect(isSorted(got)).toBe(true);
          expect(isPermutation(input, got)).toBe(true);
          expect(got).toEqual(want);
        }
      }
    });
  });

  describe('searching', () => {
    test('linear-search', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const arr = randomIntArray(rng, 15);
        const key = rng() < 0.5 ? (arr.length ? arr[Math.floor(rng() * arr.length)] : 0) : 999;
        expect(linearFind(arr, key)).toBe(bf.refLinearSearch(arr, key));
      }
    });

    test('binary-search', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const arr = randomSortedArray(rng, 15);
        const key = rng() < 0.5 ? (arr.length ? arr[Math.floor(rng() * arr.length)] : 0) : 999;
        expect(binaryFind(arr, key)).toBe(bf.refBinarySearch(arr, key));
      }
    });

    test('two-sum-ii', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const arr = randomSortedArray(rng, 12);
        if (arr.length < 2) continue;
        const i = Math.floor(rng() * arr.length);
        let j = Math.floor(rng() * arr.length);
        while (j === i) j = Math.floor(rng() * arr.length);
        const lo = Math.min(i, j);
        const hi = Math.max(i, j);
        const target = arr[lo] + arr[hi];
        expect(twoSumSorted(arr, target)).toEqual(bf.refTwoSumSorted(arr, target));
      }
    });

    test('trapping-rain-water', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const h = randomNonNegative(rng, 12);
        expect(trap(h)).toBe(bf.refTrap(h));
      }
    });

    test('quick-select', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const nums = randomIntArray(rng, 12);
        if (!nums.length) continue;
        const k = 1 + Math.floor(rng() * nums.length);
        expect(kthLargest(nums, k)).toBe(bf.refKthLargest(nums, k));
      }
    });
  });

  describe('dp', () => {
    test('maximum-subarray', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const nums = randomIntArray(rng, 12);
        if (!nums.length) continue;
        expect(maxSubarray(nums)).toBe(bf.refMaxSubarray(nums));
      }
    });

    test('coin-change', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const coins = randomNonNegative(rng, 5).filter((c) => c > 0);
        if (!coins.length) continue;
        const amount = Math.floor(rng() * 15);
        expect(coinChange(coins, amount)).toBe(bf.refCoinChange(coins, amount));
      }
    });

    test('knapsack', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const n = 1 + Math.floor(rng() * 8);
        const weights = Array.from({ length: n }, () => 1 + Math.floor(rng() * 5));
        const values = Array.from({ length: n }, () => Math.floor(rng() * 10));
        const cap = Math.floor(rng() * 12) + 1;
        expect(knapsackMaxValue(weights, values, cap)).toBe(bf.refKnapsack(weights, values, cap));
      }
    });

    test('lcs', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const a = randomString(rng);
        const b = randomString(rng);
        expect(lcsLength(a, b)).toBe(bf.refLcs(a, b));
      }
    });

    test('lis', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const nums = randomIntArray(rng, 12);
        expect(lisLength(nums)).toBe(bf.refLis(nums));
      }
    });

    test('edit-distance', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const a = randomString(rng);
        const b = randomString(rng);
        expect(editDistance(a, b)).toBe(bf.refEditDistance(a, b));
      }
    });

    test('matrix-chain', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const n = 2 + Math.floor(rng() * 4);
        const dims = Array.from({ length: n + 1 }, () => 2 + Math.floor(rng() * 5));
        expect(matrixMinCost(dims)).toBe(bf.refMatrixChain(dims));
      }
    });

    test('rod-cutting', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const n = 1 + Math.floor(rng() * 8);
        const prices = Array.from({ length: n }, () => Math.floor(rng() * 10));
        expect(rodMaxRevenue(prices, n)).toBe(bf.refRodCutting(prices, n));
      }
    });

    test('partition-equal-subset', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const nums = randomNonNegative(rng, 10);
        if (!nums.length) continue;
        expect(canSplitEqualSubset(nums)).toBe(bf.refPartitionEqual(nums));
      }
    });

    test('longest-palindromic-subsequence', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const s = randomString(rng);
        expect(longestPalindromicSubsequenceLength(s)).toBe(bf.refLps(s));
      }
    });

    test('tsp-bitmask', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const n = 2 + Math.floor(rng() * 3);
        const dist = Array.from({ length: n }, () => Array(n).fill(0));
        for (let i = 0; i < n; i++) {
          for (let j = 0; j < n; j++) {
            if (i !== j) dist[i][j] = 1 + Math.floor(rng() * 9);
          }
        }
        expect(tspMinCost(dist)).toBe(bf.refTsp(dist));
      }
    });
  });

  describe('graphs', () => {
    test('bfs', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const n = 2 + Math.floor(rng() * 6);
        const edges = [];
        for (let i = 1; i < n; i++) edges.push([i - 1, i]);
        if (rng() < 0.3 && n > 2) edges.push([0, n - 1]);
        const src = Math.floor(rng() * n);
        expect(bfsDistances(n, edges, src)).toEqual(bf.refBfs(n, edges, src));
      }
    });

    test('union-find', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const n = 2 + Math.floor(rng() * 6);
        const unions = [];
        for (let i = 0; i < n + 2; i++) {
          unions.push([Math.floor(rng() * n), Math.floor(rng() * n)]);
        }
        const a = Math.floor(rng() * n);
        const b = Math.floor(rng() * n);
        expect(ufConnected(n, unions, a, b)).toBe(bf.refUfConnected(n, unions, a, b));
      }
    });

    test('dijkstra', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const n = 2 + Math.floor(rng() * 5);
        const edges = [];
        for (let i = 1; i < n; i++) {
          edges.push([i - 1, i, 1 + Math.floor(rng() * 5)]);
        }
        const src = Math.floor(rng() * n);
        expect(shortestDistances(n, edges, src)).toEqual(bf.refDijkstra(n, edges, src));
      }
    });

    test('number-of-islands', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const rows = 1 + Math.floor(rng() * 4);
        const cols = 1 + Math.floor(rng() * 4);
        const grid = Array.from({ length: rows }, () =>
          Array.from({ length: cols }, () => (rng() < 0.4 ? '1' : '0')),
        );
        expect(numIslands(grid.map((row) => row.slice()))).toBe(bf.refNumIslands(grid));
      }
    });

    test('course-schedule', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const n = 2 + Math.floor(rng() * 5);
        const edges = [];
        for (let i = 1; i < n; i++) edges.push([i, i - 1]);
        if (rng() < 0.2) edges.push([0, n - 1]);
        expect(canFinish(n, edges)).toBe(bf.refCanFinish(n, edges));
      }
    });

    test('topological-sort', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const n = 2 + Math.floor(rng() * 5);
        const edges = [];
        for (let i = 1; i < n; i++) edges.push([i - 1, i]);
        const order = topologicalOrder(n, edges);
        if (!bf.refCanFinish(n, edges)) {
          expect(order).toEqual([]);
        } else {
          expect(bf.refTopoValid(n, edges, order)).toBe(true);
        }
      }
    });

    test('kruskal-mst and prim-mst', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const n = 2 + Math.floor(rng() * 5);
        const edges = [];
        for (let i = 1; i < n; i++) {
          edges.push([i - 1, i, 1 + Math.floor(rng() * 5)]);
        }
        const want = bf.refMstWeight(n, edges);
        expect(mstTotalWeight(n, edges)).toBe(want);
        expect(primMst(n, edges)).toBe(want);
      }
    });

    test('bellman-ford vs dijkstra (non-negative)', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const n = 2 + Math.floor(rng() * 4);
        const edges = [];
        for (let i = 1; i < n; i++) edges.push([i - 1, i, 1 + Math.floor(rng() * 3)]);
        const src = 0;
        const bfRes = bellmanFordResult(n, edges, src);
        expect(bfRes.hasNegativeCycle).toBe(false);
        expect(bfRes.distances).toEqual(bf.refDijkstra(n, edges, src));
      }
    });

    test('floyd-warshall vs repeated dijkstra', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const n = 2 + Math.floor(rng() * 4);
        const edges = [];
        for (let i = 0; i < n; i++) {
          for (let j = i + 1; j < n; j++) {
            if (rng() < 0.6) edges.push([i, j, 1 + Math.floor(rng() * 4)]);
          }
        }
        const fw = allPairsDistances(n, edges);
        for (let src = 0; src < n; src++) {
          expect(fw[src]).toEqual(bf.refDijkstra(n, edges, src));
        }
      }
    });

    test('network-delay', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const n = 2 + Math.floor(rng() * 5);
        const edges = [];
        for (let i = 1; i < n; i++) edges.push([0, i, 1 + Math.floor(rng() * 4)]);
        const dist = shortestDistances(n, edges, 0);
        if (dist.some((d) => d >= INF)) {
          expect(networkDelay(n, edges, 0)).toBe(-1);
        } else {
          expect(networkDelay(n, edges, 0)).toBe(Math.max(...dist));
        }
      }
    });

    test('bipartite-check', () => {
      const rng = seededRng();
      for (let t = 0; t < PRACTICE_PROPERTY_TRIALS; t++) {
        const n = 2 + Math.floor(rng() * 6);
        const edges = [];
        for (let i = 1; i < n; i++) edges.push([i - 1, i]);
        if (rng() < 0.15 && n >= 3) edges.push([0, 2]);
        expect(checkBipartite(n, edges)).toBe(bf.refBipartite(n, edges));
      }
    });
  });
});
