const fs = require('fs');
const path = require('path');

const { findIndex } = require('../../src/practice/binarySearchPractice');
const { bfsDistances } = require('../../src/practice/bfsPractice');
const { firstIndex } = require('../../src/practice/kmpPractice');
const { knapsackMaxValue } = require('../../src/practice/knapsackPractice');
const { lcsLength } = require('../../src/practice/lcsPractice');
const { TriePractice } = require('../../src/practice/triePractice');
const { connected: ufConnected } = require('../../src/practice/unionFindPractice');
const { extractOrder } = require('../../src/practice/binaryHeapPractice');
const { shortestDistances } = require('../../src/practice/dijkstraPractice');
const { traverse: dfsTraverse } = require('../../src/practice/dfsPractice');
const { lisLength } = require('../../src/practice/lisPractice');
const { mergeSort } = require('../../src/practice/mergeSortPractice');
const { topologicalOrder } = require('../../src/practice/topologicalSortPractice');
const { extractOrder: pqExtractOrder } = require('../../src/practice/priorityQueuePractice');
const { nextGreater } = require('../../src/practice/monotonicStackPractice');
const { quickSort } = require('../../src/practice/quickSortPractice');
const { BstPractice } = require('../../src/practice/bstPractice');
const { mstTotalWeight: primMstTotalWeight } = require('../../src/practice/primMstPractice');
const { StackPractice } = require('../../src/practice/stackPractice');
const { heapSort } = require('../../src/practice/heapsortPractice');
const { QueuePractice } = require('../../src/practice/queuePractice');
const { DequePractice } = require('../../src/practice/dequePractice');
const { countingSort } = require('../../src/practice/countingSortPractice');
const { radixSort } = require('../../src/practice/radixSortPractice');
const { firstIndex: rabinFirstIndex } = require('../../src/practice/rabinKarpPractice');
const { bellmanFordResult } = require('../../src/practice/bellmanFordPractice');
const { SegmentTreePractice } = require('../../src/practice/segmentTreePractice');
const { buildGraph } = require('../../src/practice/graphPractice');
const { allPairsDistances } = require('../../src/practice/floydWarshallPractice');
const { FenwickTreePractice } = require('../../src/practice/fenwickTreePractice');
const { checkBipartite } = require('../../src/practice/bipartiteCheckPractice');
const { componentSizesSorted: tarjanComponentSizes } = require('../../src/practice/tarjanSccPractice');
const { componentSizesSorted: kosarajuComponentSizes } = require('../../src/practice/kosarajuPractice');
const { maxFlowValue } = require('../../src/practice/edmondsKarpPractice');
const { minCost: matrixMinCost } = require('../../src/practice/matrixChainPractice');
const { maxRevenue: rodMaxRevenue } = require('../../src/practice/rodCuttingPractice');
const { canSplitEqualSubset } = require('../../src/practice/partitionEqualSubsetPractice');
const {
  longestPalindromicSubsequenceLength,
} = require('../../src/practice/longestPalindromicSubsequencePractice');
const { DynamicArrayPractice } = require('../../src/practice/dynamicArrayPractice');
const { findIndex: linearFindIndex } = require('../../src/practice/linearSearchPractice');
const { bubbleSort } = require('../../src/practice/bubbleSortPractice');
const { insertionSort } = require('../../src/practice/insertionSortPractice');
const { selectionSort } = require('../../src/practice/selectionSortPractice');
const { findIndex: zFindIndex, zValues } = require('../../src/practice/zAlgorithmPractice');
const { longestPalindromeLength } = require('../../src/practice/manacherPractice');
const { findHits } = require('../../src/practice/ahoCorasickPractice');
const { AvlTreePractice } = require('../../src/practice/avlTreePractice');
const { RedBlackTreePractice } = require('../../src/practice/redBlackTreePractice');

const tools = path.join(__dirname, '../../../tools');

function cases(name) {
  return JSON.parse(fs.readFileSync(path.join(tools, name), 'utf8'));
}

describe('practice shared goldens', () => {
  test('binary search practice', () => {
    for (const row of cases('binary-search-goldens.json')) {
      expect(findIndex(row.arr, row.key)).toBe(row.expected);
    }
  });

  test('knapsack practice', () => {
    for (const row of cases('knapsack-goldens.json')) {
      expect(knapsackMaxValue(row.weights, row.values, row.capacity)).toBe(row.expected);
    }
  });

  test('lcs practice', () => {
    for (const row of cases('lcs-goldens.json')) {
      expect(lcsLength(row.a, row.b)).toBe(row.expected);
    }
  });

  test('kmp practice', () => {
    for (const row of cases('kmp-goldens.json')) {
      expect(firstIndex(row.text, row.pattern)).toBe(row.expected);
    }
  });

  test('trie practice', () => {
    for (const row of cases('trie-goldens.json')) {
      const trie = new TriePractice();
      for (const w of row.inserts ?? []) {
        trie.insert(w);
      }
      for (const s of row.search ?? []) {
        expect(trie.search(s.word)).toBe(s.expected);
      }
      for (const s of row.startsWith ?? []) {
        expect(trie.startsWith(s.prefix)).toBe(s.expected);
      }
    }
  });

  test('bfs practice', () => {
    for (const row of cases('practice-bfs-goldens.json')) {
      expect(bfsDistances(row.n, row.edges, row.source)).toEqual(row.expected);
    }
  });

  test('union–find practice', () => {
    for (const row of cases('union-find-goldens.json')) {
      for (const q of row.connected) {
        expect(ufConnected(row.n, row.unions, q.a, q.b)).toBe(q.expected);
      }
    }
  });

  test('binary heap practice', () => {
    for (const row of cases('binary-heap-goldens.json')) {
      if (row.inserts === undefined) continue;
      expect(extractOrder(row.inserts)).toEqual(row.extractOrder);
    }
  });

  test('Dijkstra practice', () => {
    for (const row of cases('dijkstra-goldens.json')) {
      expect(shortestDistances(row.n, row.edges, row.source)).toEqual(row.distances);
    }
  });

  test('DFS practice', () => {
    for (const row of cases('dfs-goldens.json')) {
      const t = dfsTraverse(row.n, row.edges, row.source, row.directed);
      expect(t.discovery).toEqual(row.discovery);
      expect(t.finish).toEqual(row.finish);
    }
  });

  test('LIS practice', () => {
    for (const row of cases('lis-goldens.json')) {
      expect(lisLength(row.arr)).toBe(row.expected);
    }
  });

  test('merge sort practice', () => {
    for (const row of cases('merge-sort-goldens.json')) {
      expect(mergeSort(row.input)).toEqual(row.sorted);
    }
  });

  test('topological sort practice', () => {
    for (const row of cases('topological-sort-goldens.json')) {
      expect(topologicalOrder(row.n, row.edges)).toEqual(row.expectedOrder);
    }
  });

  test('priority queue practice', () => {
    for (const row of cases('priority-queue-goldens.json')) {
      expect(pqExtractOrder(row.inserts)).toEqual(row.extractOrder);
    }
  });

  test('monotonic stack practice', () => {
    for (const row of cases('monotonic-stack-goldens.json')) {
      if (row.expectError) {
        expect(() => nextGreater(row.nums)).toThrow();
      } else {
        expect(nextGreater(row.nums)).toEqual(row.expected);
      }
    }
  });

  test('quick sort practice', () => {
    for (const row of cases('quick-sort-goldens.json')) {
      expect(quickSort(row.input, row.mode === 'sort3Way')).toEqual(row.expected);
    }
  });

  test('BST practice', () => {
    for (const row of cases('bst-goldens.json')) {
      const tree = new BstPractice();
      for (const [key, value] of row.inserts ?? []) {
        tree.insert(key, value);
      }
      expect(tree.inOrderKeys()).toEqual(row.inOrderKeys);
      expect(tree.search(row.searchKey)).toBe(row.searchValue);
    }
  });

  test('Prim MST practice', () => {
    for (const row of cases('mst-goldens.json')) {
      expect(primMstTotalWeight(row.n, row.edges)).toBe(row.primWeight);
    }
  });

  test('stack practice', () => {
    for (const row of cases('stack-goldens.json')) {
      const stack = new StackPractice();
      for (const v of row.push ?? []) {
        stack.push(v);
      }
      for (const expected of row.popValues ?? []) {
        expect(stack.pop()).toBe(expected);
      }
      if (row.peek == null || row.empty) {
        expect(stack.isEmpty()).toBe(true);
        expect(() => stack.peek()).toThrow();
      } else {
        expect(stack.peek()).toBe(row.peek);
      }
    }
  });

  test('heapsort practice', () => {
    for (const row of cases('heapsort-goldens.json')) {
      expect(heapSort(row.input)).toEqual(row.sorted);
    }
  });

  test('queue practice', () => {
    for (const row of cases('queue-goldens.json')) {
      const q = new QueuePractice();
      for (const v of row.enqueue ?? []) {
        q.enqueue(v);
      }
      for (const expected of row.dequeueValues ?? []) {
        expect(q.dequeue()).toBe(expected);
      }
      if (row.peek == null || row.empty) {
        expect(q.isEmpty()).toBe(true);
        expect(() => q.peek()).toThrow();
      } else {
        expect(q.peek()).toBe(row.peek);
      }
    }
  });

  test('deque practice', () => {
    for (const row of cases('deque-goldens.json')) {
      const dq = new DequePractice();
      const addLast = row.addLast ?? [];
      const addFirst = row.addFirst ?? [];
      if (row.empty && addLast.length === 0 && addFirst.length === 0) {
        expect(dq.isEmpty()).toBe(true);
        continue;
      }
      for (const v of addLast) {
        dq.addLast(v);
      }
      for (const v of addFirst) {
        dq.addFirst(v);
      }
      if (row.removeFirst != null) {
        expect(dq.removeFirst()).toBe(row.removeFirst);
      }
      if (row.removeLast != null) {
        expect(dq.removeLast()).toBe(row.removeLast);
      }
      if (row.remainingValue != null) {
        expect(dq.removeFirst()).toBe(row.remainingValue);
      }
      expect(dq.isEmpty()).toBe(true);
    }
  });

  test('counting sort practice', () => {
    for (const row of cases('counting-sort-goldens.json')) {
      expect(countingSort(row.input)).toEqual(row.sorted);
    }
  });

  test('radix sort practice', () => {
    for (const row of cases('radix-sort-goldens.json')) {
      expect(radixSort(row.input)).toEqual(row.sorted);
    }
  });

  test('Rabin-Karp practice', () => {
    for (const row of cases('rabin-karp-goldens.json')) {
      expect(rabinFirstIndex(row.text, row.pattern)).toBe(row.expected);
    }
  });

  test('Bellman-Ford practice', () => {
    for (const row of cases('bellman-ford-goldens.json')) {
      const result = bellmanFordResult(row.n, row.edges, row.source);
      expect(result.hasNegativeCycle).toBe(row.hasNegativeCycle);
      if (row.distances !== undefined) {
        expect(result.distances).toEqual(row.distances);
      }
    }
  });

  test('segment tree practice', () => {
    for (const row of cases('segment-tree-goldens.json')) {
      const st = new SegmentTreePractice(row.initial);
      for (const q of row.rangeSum ?? []) {
        expect(st.rangeSum(q.left, q.right)).toBe(q.sum);
      }
      st.update(row.update.index, row.update.value);
      for (const q of row.rangeSumAfter ?? []) {
        expect(st.rangeSum(q.left, q.right)).toBe(q.sum);
      }
    }
  });

  test('graph practice', () => {
    for (const row of cases('graph-goldens.json')) {
      const g = buildGraph(row.n, row.directed, row.weighted, row.edges);
      expect(g.vertices()).toBe(row.vertices);
      for (const [vStr, count] of Object.entries(row.neighborCount)) {
        expect(g.neighbors(Number(vStr)).length).toBe(count);
      }
      for (const [vStr, expected] of Object.entries(row.edgeTo)) {
        const actual = g.neighbors(Number(vStr)).map((e) => e.to);
        expect(actual).toEqual(expected);
      }
    }
  });

  test('Floyd-Warshall practice', () => {
    for (const row of cases('floyd-warshall-goldens.json')) {
      const dist = allPairsDistances(row.n, row.edges);
      for (const [i, j, expected] of row.pairs) {
        expect(dist[i][j]).toBe(expected);
      }
    }
  });

  test('Fenwick tree practice', () => {
    for (const row of cases('fenwick-tree-goldens.json')) {
      const ft = new FenwickTreePractice(row.n);
      for (const [idx, delta] of row.adds ?? []) {
        ft.add(idx, delta);
      }
      for (const check of row.checks ?? []) {
        if (check.prefixAt !== undefined) {
          expect(ft.prefixSum(check.prefixAt)).toBe(check.expected);
        }
        if (check.rangeLeft !== undefined) {
          expect(ft.rangeSum(check.rangeLeft, check.rangeRight)).toBe(check.expected);
        }
      }
    }
  });

  test('bipartite check practice', () => {
    for (const row of cases('bipartite-check-goldens.json')) {
      expect(checkBipartite(row.n, row.edges)).toBe(row.expected);
    }
  });

  test('Tarjan SCC practice', () => {
    for (const row of cases('tarjan-scc-goldens.json')) {
      const sizes = tarjanComponentSizes(row.n, row.edges);
      expect(sizes.length).toBe(row.componentCount);
      expect(sizes).toEqual([...row.componentSizes].sort((a, b) => a - b));
    }
  });

  test('Kosaraju SCC practice', () => {
    for (const row of cases('kosaraju-goldens.json')) {
      const sizes = kosarajuComponentSizes(row.n, row.edges);
      expect(sizes.length).toBe(row.componentCount);
      expect(sizes).toEqual([...row.componentSizes].sort((a, b) => a - b));
    }
  });

  test('Edmonds-Karp practice', () => {
    for (const row of cases('edmonds-karp-goldens.json')) {
      expect(maxFlowValue(row.n, row.edges, row.source, row.sink)).toBe(row.maxFlow);
    }
  });

  test('matrix chain practice', () => {
    for (const row of cases('matrix-chain-goldens.json')) {
      expect(matrixMinCost(row.dimensions)).toBe(row.expected);
    }
  });

  test('rod cutting practice', () => {
    for (const row of cases('rod-cutting-goldens.json')) {
      if (row.expectError) {
        expect(() => rodMaxRevenue(row.prices, row.length)).toThrow();
      } else {
        expect(rodMaxRevenue(row.prices, row.length)).toBe(row.expected);
      }
    }
  });

  test('partition equal subset practice', () => {
    for (const row of cases('partition-equal-subset-goldens.json')) {
      expect(canSplitEqualSubset(row.nums)).toBe(row.expected);
    }
  });

  test('longest palindromic subsequence practice', () => {
    for (const row of cases('longest-palindromic-subsequence-goldens.json')) {
      expect(longestPalindromicSubsequenceLength(row.s)).toBe(row.expected);
    }
  });

  test('dynamic array practice', () => {
    for (const row of cases('dynamic-array-goldens.json')) {
      const arr = new DynamicArrayPractice();
      for (const v of row.append ?? []) {
        arr.add(v);
      }
      expect(arr.size()).toBe(row.size);
      for (const pair of row.get ?? []) {
        expect(arr.get(pair.index)).toBe(pair.value);
      }
    }
  });

  test('linear search practice', () => {
    for (const row of cases('linear-search-goldens.json')) {
      expect(linearFindIndex(row.arr, row.target)).toBe(row.expected);
    }
  });

  test('bubble sort practice', () => {
    for (const row of cases('bubble-sort-goldens.json')) {
      expect(bubbleSort(row.input)).toEqual(row.sorted);
    }
  });

  test('insertion sort practice', () => {
    for (const row of cases('insertion-sort-goldens.json')) {
      expect(insertionSort(row.input)).toEqual(row.sorted);
    }
  });

  test('selection sort practice', () => {
    for (const row of cases('selection-sort-goldens.json')) {
      expect(selectionSort(row.input)).toEqual(row.sorted);
    }
  });

  test('z-algorithm practice', () => {
    for (const row of cases('z-algorithm-goldens.json')) {
      expect(zFindIndex(row.text, row.pattern)).toBe(row.index);
      expect(zValues(row.text)).toEqual(row.z);
    }
  });

  test('manacher practice', () => {
    for (const row of cases('manacher-goldens.json')) {
      expect(longestPalindromeLength(row.s)).toBe(row.expected);
    }
  });

  test('aho-corasick practice', () => {
    for (const row of cases('aho-corasick-goldens.json')) {
      expect(findHits(row.text, row.patterns)).toEqual(row.hits);
    }
  });

  test('avl tree practice', () => {
    for (const row of cases('avl-tree-goldens.json')) {
      const tree = new AvlTreePractice();
      for (const [key, value] of row.inserts ?? []) {
        tree.insert(key, value);
      }
      expect(tree.inOrderKeys()).toEqual(row.inOrderKeys);
      expect(tree.search(row.searchKey)).toBe(row.searchValue);
    }
  });

  test('red-black tree practice', () => {
    for (const row of cases('red-black-tree-goldens.json')) {
      const tree = new RedBlackTreePractice();
      for (const [key, value] of row.inserts ?? []) {
        tree.insert(key, value);
      }
      for (const [key, value] of row.searches ?? []) {
        expect(tree.search(key)).toBe(value);
      }
      expect(tree.search(row.searchMiss)).toBeNull();
    }
  });
});
