/** Edge themes phase 2 on practice wrappers (empty, single, duplicate, large, invalid). */
// practice-edge-theme-topics: two-sum-ii maximum-subarray valid-parentheses meeting-rooms-ii number-of-islands top-k-frequent-elements course-schedule longest-substring-without-repeating coin-change lru-cache merge-intervals level-order-traversal word-search quick-select kruskal-mst trapping-rain-water edit-distance serialize-binary-tree network-delay sliding-window-maximum binary-search knapsack lcs kmp trie bfs union-find binary-heap dijkstra dfs lis merge-sort topological-sort priority-queue monotonic-stack quick-sort bst prim-mst stack heapsort queue deque counting-sort radix-sort rabin-karp bellman-ford segment-tree floyd-warshall fenwick-tree graph bipartite-check tarjan-scc kosaraju edmonds-karp matrix-chain rod-cutting partition-equal-subset longest-palindromic-subsequence dynamic-array linear-search bubble-sort insertion-sort selection-sort z-algorithm manacher aho-corasick avl-tree red-black-tree singly-linked-list doubly-linked-list tree-traversals separate-chaining open-addressing suffix-array treap order-statistic-tree interval-tree b-tree bloom-filter boruvka-mst a-star articulation-bridges hungarian lca-binary-lifting sparse-table tsp-bitmask reservoir-sampling

const LARGE_N = 256;
const fs = require('fs');
const path = require('path');

const { twoSumSorted } = require('../../src/practice/twoSumSorted');
const { isValidParentheses } = require('../../src/practice/validParentheses');
const { minMeetingRooms } = require('../../src/practice/meetingRooms');
const { numIslands } = require('../../src/practice/numIslands');
const { topKFrequent } = require('../../src/practice/topKFrequent');
const { canFinish } = require('../../src/practice/courseSchedule');
const { lengthOfLongestSubstring } = require('../../src/practice/longestSubstring');
const { coinChange } = require('../../src/practice/coinChange');
const { LRUCacheDesign } = require('../../src/practice/lruDesign');
const { mergeIntervals } = require('../../src/practice/mergeIntervals');
const { levelOrder } = require('../../src/practice/levelOrder');
const { wordSearch } = require('../../src/practice/wordSearch');
const { kthLargest } = require('../../src/practice/kthLargest');
const { trap } = require('../../src/practice/trappingRainWater');
const { editDistance } = require('../../src/practice/editDistancePractice');
const { serialize, deserialize } = require('../../src/practice/treeCodec');
const { networkDelay } = require('../../src/practice/networkDelay');
const { maxSlidingWindow } = require('../../src/practice/slidingWindowMax');
const { knapsackMaxValue } = require('../../src/practice/knapsackPractice');
const { lcsLength } = require('../../src/practice/lcsPractice');
const { firstIndex: kmpFirst } = require('../../src/practice/kmpPractice');
const { TriePractice } = require('../../src/practice/triePractice');
const { bfsDistances } = require('../../src/practice/bfsPractice');
const { connected: ufConnected } = require('../../src/practice/unionFindPractice');
const { shortestDistances } = require('../../src/practice/dijkstraPractice');
const { traverse: dfsTraverse } = require('../../src/practice/dfsPractice');
const { lisLength } = require('../../src/practice/lisPractice');
const { topologicalOrder } = require('../../src/practice/topologicalSortPractice');
const { extractOrder: pqExtractOrder } = require('../../src/practice/priorityQueuePractice');
const { quickSort } = require('../../src/practice/quickSortPractice');
const { BstPractice } = require('../../src/practice/bstPractice');
const { mstTotalWeight } = require('../../src/practice/mstKruskal');
const { mstTotalWeight: primMstTotalWeight } = require('../../src/practice/primMstPractice');
const { heapSort } = require('../../src/practice/heapsortPractice');
const { QueuePractice } = require('../../src/practice/queuePractice');
const { DequePractice } = require('../../src/practice/dequePractice');
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
const { insertionSort } = require('../../src/practice/insertionSortPractice');
const { selectionSort } = require('../../src/practice/selectionSortPractice');
const { findIndex: zFindIndex, zValues } = require('../../src/practice/zAlgorithmPractice');
const { longestPalindromeLength } = require('../../src/practice/manacherPractice');
const { findHits } = require('../../src/practice/ahoCorasickPractice');
const { AvlTreePractice } = require('../../src/practice/avlTreePractice');
const { RedBlackTreePractice } = require('../../src/practice/redBlackTreePractice');
const { SinglyLinkedListPractice } = require('../../src/practice/singlyLinkedListPractice');
const { DoublyLinkedListPractice } = require('../../src/practice/doublyLinkedListPractice');
const { TreeTraversalsPractice } = require('../../src/practice/treeTraversalsPractice');
const { SeparateChainingPractice } = require('../../src/practice/separateChainingPractice');
const { OpenAddressingPractice } = require('../../src/practice/openAddressingPractice');
const { suffixArray } = require('../../src/practice/suffixArrayPractice');
const { TreapPractice } = require('../../src/practice/treapPractice');
const { OrderStatisticTreePractice } = require('../../src/practice/orderStatisticTreePractice');
const { IntervalTreePractice } = require('../../src/practice/intervalTreePractice');
const { BTreePractice } = require('../../src/practice/bTreePractice');
const { BloomFilterPractice } = require('../../src/practice/bloomFilterPractice');
const { mstTotalWeight: boruvkaMstTotalWeight } = require('../../src/practice/boruvkaMstPractice');
const { pathLength: aStarPathLength } = require('../../src/practice/aStarPractice');
const { articulationAndBridges } = require('../../src/practice/articulationBridgesPractice');
const { assignmentMinCost } = require('../../src/practice/hungarianPractice');
const { LcaBinaryLiftingPractice } = require('../../src/practice/lcaBinaryLiftingPractice');
const { SparseTablePractice } = require('../../src/practice/sparseTablePractice');
const { tspMinCost } = require('../../src/practice/tspBitmaskPractice');
const { reservoirSample } = require('../../src/practice/reservoirSamplingPractice');

const tools = path.join(__dirname, '../../../tools');

function cases(name) {
  return JSON.parse(fs.readFileSync(path.join(tools, name), 'utf8'));
}

function sortCopyBattery(sortFn, allowNegative = true) {
  expect(sortFn([])).toEqual([]);
  expect(sortFn([7])).toEqual([7]);
  expect(sortFn([2, 2, 1])).toEqual([1, 2, 2]);
  expect(sortFn(Array.from({ length: LARGE_N }, (_, i) => LARGE_N - i))).toEqual(
    Array.from({ length: LARGE_N }, (_, i) => i + 1),
  );
  if (!allowNegative) expect(() => sortFn([-1])).toThrow();
}

describe('practice interview golden edge themes phase2', () => {
  test('two-sum-ii-goldens.json', () => {
    for (const row of cases('two-sum-ii-goldens.json')) {
      if (row.expectError) {
        expect(() => twoSumSorted(row.nums, row.target)).toThrow();
      } else {
        expect(twoSumSorted(row.nums, row.target)).toEqual(row.expected);
      }
    }
  });

  test('valid-parentheses-goldens.json', () => {
    for (const row of cases('valid-parentheses-goldens.json')) {
      expect(isValidParentheses(row.s)).toBe(row.expected);
    }
  });

  test('meeting-rooms-ii-goldens.json', () => {
    for (const row of cases('meeting-rooms-ii-goldens.json')) {
      expect(minMeetingRooms(row.intervals)).toBe(row.expected);
    }
  });

  test('number-of-islands-goldens.json', () => {
    for (const row of cases('number-of-islands-goldens.json')) {
      const grid = (row.grid || []).map((r) => r.slice());
      expect(numIslands(grid)).toBe(row.expected);
    }
  });

  test('top-k-frequent-elements-goldens.json', () => {
    for (const row of cases('top-k-frequent-elements-goldens.json')) {
      if (row.expectError) {
        expect(() => topKFrequent(row.nums, row.k)).toThrow();
      } else {
        expect(topKFrequent(row.nums, row.k)).toEqual(row.expected);
      }
    }
  });

  test('course-schedule-goldens.json', () => {
    for (const row of cases('course-schedule-goldens.json')) {
      expect(canFinish(row.numCourses, row.prerequisites)).toBe(row.expected);
    }
  });

  test('longest-substring-without-repeating-goldens.json', () => {
    for (const row of cases('longest-substring-without-repeating-goldens.json')) {
      expect(lengthOfLongestSubstring(row.s)).toBe(row.expected);
    }
  });

  test('coin-change-goldens.json', () => {
    for (const row of cases('coin-change-goldens.json')) {
      expect(coinChange(row.coins, row.amount)).toBe(row.expected);
    }
  });

  test('lru-cache-goldens.json', () => {
    for (const { capacity, steps } of cases('lru-cache-goldens.json')) {
      const cache = new LRUCacheDesign(capacity);
      for (const step of steps) {
        if (step.op === 'put') {
          cache.put(step.key, step.value);
        } else if (step.op === 'get') {
          expect(cache.get(step.key)).toBe(step.expected);
        }
      }
    }
  });

  test('merge-intervals-goldens.json', () => {
    for (const row of cases('merge-intervals-goldens.json')) {
      expect(mergeIntervals(row.intervals)).toEqual(row.expected);
    }
  });

  test('level-order-traversal-goldens.json', () => {
    for (const row of cases('level-order-traversal-goldens.json')) {
      expect(levelOrder(row.values)).toEqual(row.expected);
    }
  });

  test('word-search-goldens.json', () => {
    for (const row of cases('word-search-goldens.json')) {
      const board = (row.board || []).map((r) => r.slice());
      expect(wordSearch(board, row.word)).toBe(row.expected);
    }
  });

  test('quick-select-goldens.json', () => {
    for (const row of cases('quick-select-goldens.json')) {
      if (row.expectError) {
        expect(() => kthLargest(row.arr, row.k)).toThrow();
      } else {
        const kLargest = row.arr.length - row.k + 1;
        expect(kthLargest(row.arr, kLargest)).toBe(row.expected);
      }
    }
  });

  test('trapping-rain-water-goldens.json', () => {
    for (const row of cases('trapping-rain-water-goldens.json')) {
      expect(trap(row.height)).toBe(row.expected);
    }
  });

  test('edit-distance-goldens.json', () => {
    for (const row of cases('edit-distance-goldens.json')) {
      expect(editDistance(row.a, row.b)).toBe(row.expected);
    }
  });

  test('serialize-binary-tree-goldens.json', () => {
    for (const row of cases('serialize-binary-tree-goldens.json')) {
      expect(deserialize(serialize(row.values))).toEqual(row.expected);
    }
  });

  test('network-delay-goldens.json', () => {
    for (const row of cases('network-delay-goldens.json')) {
      expect(networkDelay(row.n, row.times, row.source)).toBe(row.expected);
    }
  });

  test('sliding-window-maximum-goldens.json', () => {
    for (const row of cases('sliding-window-maximum-goldens.json')) {
      expect(maxSlidingWindow(row.nums, row.k)).toEqual(row.expected);
    }
  });
});

describe('practice shared golden edge themes phase2', () => {


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
      expect(kmpFirst(row.text, row.pattern)).toBe(row.expected);
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

  test('singly linked list practice', () => {
    for (const row of cases('singly-linked-list-goldens.json')) {
      const list = new SinglyLinkedListPractice();
      const addLast = row.addLast ?? [];
      if (addLast.length === 0) {
        expect(list.size()).toBe(0);
        continue;
      }
      for (const n of addLast) list.addLast(n);
      expect(list.get(row.getIndex)).toBe(row.getValue);
      expect(list.remove(row.removeIndex)).toBe(row.removeValue);
      expect(list.size()).toBe(row.sizeAfter);
    }
  });

  test('doubly linked list practice', () => {
    for (const row of cases('doubly-linked-list-goldens.json')) {
      const list = new DoublyLinkedListPractice();
      const addLast = row.addLast ?? [];
      const addFirst = row.addFirst ?? [];
      if (row.empty && addLast.length === 0 && addFirst.length === 0) {
        expect(list.size()).toBe(0);
        continue;
      }
      for (const n of addLast) list.addLast(n);
      for (const n of addFirst) list.addFirst(n);
      expect(list.get(row.getIndex)).toBe(row.getValue);
      expect(list.remove(row.removeIndex)).toBe(row.removeValue);
      expect(list.size()).toBe(row.sizeAfter);
    }
  });

  test('tree traversals practice', () => {
    for (const row of cases('tree-traversals-goldens.json')) {
      const tree = new TreeTraversalsPractice();
      for (const [key, value] of row.inserts ?? []) {
        tree.insert(key, value);
      }
      expect(tree.inOrder()).toEqual(row.inOrder);
      expect(tree.preOrder()).toEqual(row.preOrder);
      expect(tree.postOrder()).toEqual(row.postOrder);
    }
  });

  test('separate chaining practice', () => {
    for (const row of cases('separate-chaining-goldens.json')) {
      const table = new SeparateChainingPractice();
      for (const op of row.ops ?? []) {
        table.put(op[1], op[2]);
      }
      const expected = row.get.value;
      if (expected == null) {
        expect(table.get(row.get.key)).toBeNull();
      } else {
        expect(table.get(row.get.key)).toBe(expected);
      }
      if (row.getMissing) {
        expect(table.get(row.getMissing.key)).toBeNull();
      }
    }
  });

  test('open addressing practice', () => {
    for (const row of cases('open-addressing-goldens.json')) {
      const table = new OpenAddressingPractice();
      for (const op of row.ops ?? []) {
        table.put(op[1], op[2]);
      }
      expect(table.get(row.get.key)).toBe(row.get.value);
      expect(table.remove(row.remove.key)).toBe(row.remove.present);
      expect(table.get(row.getAfterRemove.key)).toBeNull();
    }
  });

  test('suffix array practice', () => {
    for (const row of cases('suffix-array-goldens.json')) {
      expect(suffixArray(row.s)).toEqual(row.sa);
    }
  });

  test('treap practice', () => {
    for (const row of cases('treap-goldens.json')) {
      const treap = new TreapPractice(row.seed);
      for (const [key, value] of row.inserts ?? []) {
        treap.insert(key, value);
      }
      for (const { key, value } of row.searchResults ?? []) {
        expect(treap.search(key)).toBe(value);
      }
    }
  });

  test('order statistic tree practice', () => {
    for (const row of cases('order-statistic-tree-goldens.json')) {
      const tree = new OrderStatisticTreePractice();
      const inserts = row.inserts ?? [];
      if (inserts.length === 0) {
        expect(() => tree.select(1)).toThrow();
        expect(tree.rank(5)).toBe(row.rank5);
        continue;
      }
      for (const [key, value] of inserts) tree.insert(key, value);
      if (row.selectK != null) {
        expect(tree.select(row.selectK)).toBe(row.selectKey);
        expect(tree.rank(row.rankKey)).toBe(1);
        continue;
      }
      expect(tree.select(3)).toBe(row.select3);
      expect(tree.rank(5)).toBe(row.rank5);
    }
  });

  test('interval tree practice', () => {
    for (const row of cases('interval-tree-goldens.json')) {
      if (row.expectError) {
        const tree = new IntervalTreePractice();
        expect(() => {
          for (const [low, high] of row.inserts) tree.insert(low, high);
        }).toThrow();
        continue;
      }
      const tree = new IntervalTreePractice();
      for (const [low, high] of row.inserts ?? []) tree.insert(low, high);
      expect(tree.overlapSorted(row.query[0], row.query[1])).toEqual(row.overlaps);
    }
  });

  test('b-tree practice', () => {
    for (const row of cases('b-tree-goldens.json')) {
      if (row.expectError) {
        expect(() => new BTreePractice(row.t)).toThrow();
        continue;
      }
      const tree = new BTreePractice(row.t);
      for (const key of row.inserts ?? []) tree.insert(key);
      for (const spec of row.searches ?? []) {
        expect(tree.search(spec.key)).toBe(spec.found);
      }
    }
  });

  test('bloom filter practice', () => {
    for (const row of cases('bloom-filter-goldens.json')) {
      const bf = new BloomFilterPractice(row.expectedItems, row.falsePositiveRate);
      for (const item of row.add ?? []) bf.add(item);
      for (const q of row.queries ?? []) {
        expect(bf.mightContain(q.item)).toBe(q.expected);
      }
    }
  });

  test('boruvka MST practice', () => {
    for (const row of cases('boruvka-mst-goldens.json')) {
      expect(boruvkaMstTotalWeight(row.n, row.edges)).toBe(row.totalWeight);
    }
  });

  test('a-star practice', () => {
    for (const row of cases('a-star-goldens.json')) {
      expect(aStarPathLength(row.n, row.edges, row.source, row.goal)).toBe(row.length);
    }
  });

  test('articulation bridges practice', () => {
    for (const row of cases('articulation-bridges-goldens.json')) {
      const result = articulationAndBridges(row.n, row.edges);
      expect(result.articulationPoints).toEqual(row.articulationPoints);
      expect(result.bridges).toEqual(row.bridges);
    }
  });

  test('hungarian practice', () => {
    for (const row of cases('hungarian-goldens.json')) {
      const got = assignmentMinCost(row.cost);
      expect(Object.is(got, -0) ? 0 : got).toBe(row.minCost);
    }
  });

  test('lca binary lifting practice', () => {
    for (const row of cases('lca-binary-lifting-goldens.json')) {
      const lca = new LcaBinaryLiftingPractice(row.parent);
      for (const [u, v, expected] of row.queries ?? []) {
        expect(lca.query(u, v)).toBe(expected);
      }
    }
  });

  test('sparse table practice', () => {
    for (const row of cases('sparse-table-goldens.json')) {
      const st = new SparseTablePractice(row.initial);
      for (const [left, right, expected] of row.queries ?? []) {
        expect(st.query(left, right)).toBe(expected);
      }
    }
  });

  test('tsp bitmask practice', () => {
    for (const row of cases('tsp-bitmask-goldens.json')) {
      expect(tspMinCost(row.dist)).toBe(row.expected);
    }
  });

  test('reservoir sampling practice', () => {
    for (const row of cases('reservoir-sampling-goldens.json')) {
      expect(reservoirSample(row.stream, row.k, row.seed)).toEqual(row.expected);
    }
  });
});

describe('practice edge themes phase 2 sorting large', () => {
  test('insertion-sort selection-sort quick-sort heapsort radix-sort', () => {
    sortCopyBattery(insertionSort);
    sortCopyBattery(selectionSort);
    sortCopyBattery((a) => quickSort(a, false));
    sortCopyBattery(heapSort);
    sortCopyBattery(radixSort);
  });
});

describe('practice edge themes phase 2 mst', () => {
  test('kruskal-mst and prim-mst golden edge themes', () => {
    for (const row of cases('mst-goldens.json')) {
      expect(mstTotalWeight(row.n, row.edges)).toBe(row.kruskalWeight);
      expect(primMstTotalWeight(row.n, row.edges)).toBe(row.primWeight);
    }
  });
});
