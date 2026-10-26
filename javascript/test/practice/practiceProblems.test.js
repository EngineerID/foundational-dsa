const { twoSumSorted } = require('../../src/practice/twoSumSorted');
const { maxSubarray } = require('../../src/practice/maxSubarray');
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
const { mstTotalWeight } = require('../../src/practice/mstKruskal');
const { trap } = require('../../src/practice/trappingRainWater');
const { editDistance } = require('../../src/practice/editDistancePractice');
const { serialize, deserialize } = require('../../src/practice/treeCodec');
const { networkDelay } = require('../../src/practice/networkDelay');
const { maxSlidingWindow } = require('../../src/practice/slidingWindowMax');
const { findIndex } = require('../../src/practice/binarySearchPractice');
const { knapsackMaxValue } = require('../../src/practice/knapsackPractice');
const { lcsLength } = require('../../src/practice/lcsPractice');
const { firstIndex } = require('../../src/practice/kmpPractice');
const { TriePractice } = require('../../src/practice/triePractice');
const { bfsDistances } = require('../../src/practice/bfsPractice');
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
const { findIndex: zFindIndex } = require('../../src/practice/zAlgorithmPractice');
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

describe('practice problems', () => {
  test('two sum sorted', () => {
    expect(twoSumSorted([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });

  test('max subarray', () => {
    expect(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  test('valid parentheses', () => {
    expect(isValidParentheses('()[]{}')).toBe(true);
    expect(isValidParentheses('(]')).toBe(false);
  });

  test('meeting rooms', () => {
    expect(
      minMeetingRooms([
        [0, 30],
        [5, 10],
        [15, 20],
      ]),
    ).toBe(2);
  });

  test('num islands', () => {
    const grid = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ];
    expect(numIslands(grid.map((row) => row.slice()))).toBe(3);
  });

  test('top k frequent', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
  });

  test('course schedule', () => {
    expect(canFinish(2, [[1, 0]])).toBe(true);
    expect(canFinish(2, [[1, 0], [0, 1]])).toBe(false);
  });

  test('longest substring', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  test('coin change', () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3);
  });

  test('lru design', () => {
    const cache = new LRUCacheDesign(2);
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1);
    cache.put(3, 3);
    expect(cache.get(2)).toBe(-1);
    expect(cache.get(3)).toBe(3);
  });

  test('merge intervals', () => {
    expect(
      mergeIntervals([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ]),
    ).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });

  test('level order', () => {
    expect(levelOrder([3, 9, 20, null, null, 15, 7])).toEqual([[3], [9, 20], [15, 7]]);
  });

  test('word search', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ];
    expect(wordSearch(board.map((r) => r.slice()), 'ABCCED')).toBe(true);
    expect(wordSearch(board.map((r) => r.slice()), 'ABCD')).toBe(false);
  });

  test('kth largest', () => {
    expect(kthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  });

  test('mst kruskal', () => {
    expect(
      mstTotalWeight(4, [
        [0, 1, 1],
        [1, 2, 2],
        [2, 3, 3],
        [0, 3, 4],
      ]),
    ).toBe(6);
  });

  test('trapping rain water', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });

  test('edit distance', () => {
    expect(editDistance('kitten', 'sitting')).toBe(3);
  });

  test('tree codec', () => {
    const values = [3, 9, 20, null, null, 15, 7];
    expect(deserialize(serialize(values))).toEqual(values);
  });

  test('network delay', () => {
    expect(
      networkDelay(
        4,
        [
          [1, 0, 1],
          [1, 2, 1],
          [2, 3, 1],
        ],
        1,
      ),
    ).toBe(2);
  });

  test('sliding window max', () => {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, 3, 5, 5, 6, 7]);
  });

  test('binary search practice', () => {
    expect(findIndex([1, 3, 5, 7, 9, 11], 7)).toBe(3);
    expect(findIndex([1, 3, 5, 7, 9, 11], 8)).toBe(-1);
  });

  test('knapsack practice', () => {
    expect(knapsackMaxValue([1, 2, 3], [6, 10, 12], 5)).toBe(22);
  });

  test('lcs practice', () => {
    expect(lcsLength('abcde', 'ace')).toBe(3);
  });

  test('kmp practice', () => {
    expect(firstIndex('ababcababa', 'aba')).toBe(0);
  });

  test('trie practice', () => {
    const trie = new TriePractice();
    trie.insert('cat');
    trie.insert('car');
    expect(trie.search('cat')).toBe(true);
    expect(trie.search('ca')).toBe(false);
    expect(trie.startsWith('ca')).toBe(true);
  });

  test('bfs practice', () => {
    expect(
      bfsDistances(
        5,
        [
          [0, 1],
          [0, 2],
          [1, 3],
        ],
        0,
      ),
    ).toEqual([0, 1, 1, 2, -1]);
  });

  test('union–find practice', () => {
    const unions = [
      [0, 1],
      [2, 3],
      [1, 2],
    ];
    expect(ufConnected(5, unions, 0, 3)).toBe(true);
    expect(ufConnected(5, unions, 0, 4)).toBe(false);
  });

  test('binary heap practice', () => {
    expect(extractOrder([5, 2, 8, 1, 2])).toEqual([1, 2, 2, 5, 8]);
  });

  test('Dijkstra practice', () => {
    expect(
      shortestDistances(
        4,
        [
          [0, 1, 1],
          [0, 2, 4],
          [1, 2, 2],
          [1, 3, 5],
          [2, 3, 1],
        ],
        0,
      ),
    ).toEqual([0, 1, 3, 4]);
  });

  test('DFS practice', () => {
    const t = dfsTraverse(
      4,
      [
        [0, 1],
        [0, 2],
        [1, 3],
      ],
      0,
      false,
    );
    expect(t.discovery).toEqual([0, 1, 5, 2]);
  });

  test('LIS practice', () => {
    expect(lisLength([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
  });

  test('merge sort practice', () => {
    expect(mergeSort([5, 2, 8, 1, 2])).toEqual([1, 2, 2, 5, 8]);
  });

  test('topological sort practice', () => {
    expect(
      topologicalOrder(4, [
        [0, 1],
        [0, 2],
        [1, 3],
      ]),
    ).toEqual([0, 1, 2, 3]);
  });

  test('priority queue practice', () => {
    expect(pqExtractOrder([5, 3, 7, 1, 3])).toEqual([1, 3, 3, 5, 7]);
  });

  test('monotonic stack practice', () => {
    expect(nextGreater([2, 1, 2, 4, 3])).toEqual([4, 2, 4, -1, -1]);
  });

  test('quick sort practice', () => {
    expect(quickSort([3, 1, 2])).toEqual([1, 2, 3]);
  });

  test('BST practice', () => {
    const tree = new BstPractice();
    tree.insert(5, 'a');
    tree.insert(2, 'b');
    tree.insert(7, 'c');
    expect(tree.inOrderKeys()).toEqual([2, 5, 7]);
    expect(tree.search(2)).toBe('b');
  });

  test('Prim MST practice', () => {
    expect(
      primMstTotalWeight(4, [
        [0, 1, 1],
        [1, 2, 2],
        [2, 3, 3],
        [0, 3, 4],
      ]),
    ).toBe(6);
  });

  test('stack practice', () => {
    const s = new StackPractice();
    s.push(1);
    s.push(2);
    expect(s.pop()).toBe(2);
    expect(s.peek()).toBe(1);
  });

  test('heapsort practice', () => {
    expect(heapSort([5, 2, 8, 1, 2])).toEqual([1, 2, 2, 5, 8]);
  });

  test('queue practice', () => {
    const q = new QueuePractice();
    q.enqueue(1);
    q.enqueue(2);
    expect(q.dequeue()).toBe(1);
    expect(q.peek()).toBe(2);
  });

  test('deque practice', () => {
    const dq = new DequePractice();
    dq.addLast(1);
    dq.addFirst(0);
    expect(dq.removeFirst()).toBe(0);
    expect(dq.removeLast()).toBe(1);
    expect(dq.isEmpty()).toBe(true);
  });

  test('counting sort practice', () => {
    expect(countingSort([4, 2, 0, 2, 1, 3, 2, 2])).toEqual([0, 1, 2, 2, 2, 2, 3, 4]);
  });

  test('radix sort practice', () => {
    expect(radixSort([45, 2, 24])).toEqual([2, 24, 45]);
  });

  test('Rabin-Karp practice', () => {
    expect(rabinFirstIndex('ababcababa', 'aba')).toBe(0);
  });

  test('Bellman-Ford practice', () => {
    const result = bellmanFordResult(
      3,
      [
        [0, 1, 1],
        [1, 2, -2],
      ],
      0,
    );
    expect(result.hasNegativeCycle).toBe(false);
    expect(result.distances).toEqual([0, 1, -1]);
  });

  test('segment tree practice', () => {
    const st = new SegmentTreePractice([1, 3, 5, 7]);
    expect(st.rangeSum(0, 2)).toBe(9);
    st.update(1, 10);
    expect(st.rangeSum(0, 1)).toBe(11);
  });

  test('Floyd-Warshall practice', () => {
    const dist = allPairsDistances(3, [
      [0, 1, 1],
      [1, 2, 2],
      [0, 2, 10],
    ]);
    expect(dist[0][2]).toBe(3);
  });

  test('Fenwick tree practice', () => {
    const ft = new FenwickTreePractice(5);
    ft.add(1, 3);
    ft.add(3, 2);
    expect(ft.prefixSum(3)).toBe(5);
  });

  test('graph practice', () => {
    const g = buildGraph(2, true, true, [[0, 1, 1]]);
    expect(g.vertices()).toBe(2);
    expect(g.neighbors(0).length).toBe(1);
  });

  test('bipartite check practice', () => {
    expect(
      checkBipartite(4, [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0],
      ]),
    ).toBe(true);
  });

  test('Tarjan SCC practice', () => {
    expect(
      tarjanComponentSizes(3, [
        [0, 1],
        [1, 2],
        [2, 0],
      ]),
    ).toEqual([3]);
  });

  test('Kosaraju SCC practice', () => {
    expect(
      kosarajuComponentSizes(3, [
        [0, 1],
        [1, 2],
        [2, 0],
      ]),
    ).toEqual([3]);
  });

  test('Edmonds-Karp practice', () => {
    expect(
      maxFlowValue(
        4,
        [
          [0, 1, 3],
          [0, 2, 2],
          [1, 2, 1],
          [1, 3, 3],
          [2, 3, 2],
        ],
        0,
        3,
      ),
    ).toBe(5);
  });

  test('matrix chain practice', () => {
    expect(matrixMinCost([10, 30, 5, 60])).toBe(4500);
  });

  test('rod cutting practice', () => {
    expect(rodMaxRevenue([1, 5, 8, 9, 10, 17, 17, 20], 4)).toBe(10);
  });

  test('partition equal subset practice', () => {
    expect(canSplitEqualSubset([1, 5, 11, 5])).toBe(true);
  });

  test('longest palindromic subsequence practice', () => {
    expect(longestPalindromicSubsequenceLength('bbbab')).toBe(4);
  });

  test('dynamic array practice', () => {
    const arr = new DynamicArrayPractice();
    arr.add(10);
    arr.add(20);
    expect(arr.size()).toBe(2);
    expect(arr.get(0)).toBe(10);
  });

  test('linear search practice', () => {
    expect(linearFindIndex([1, 2, 3], 2)).toBe(1);
  });

  test('bubble sort practice', () => {
    expect(bubbleSort([5, 2, 8, 1, 2])).toEqual([1, 2, 2, 5, 8]);
  });

  test('insertion sort practice', () => {
    expect(insertionSort([5, 2, 8, 1, 2])).toEqual([1, 2, 2, 5, 8]);
  });

  test('selection sort practice', () => {
    expect(selectionSort([5, 2, 8, 1, 2])).toEqual([1, 2, 2, 5, 8]);
  });

  test('z-algorithm practice', () => {
    expect(zFindIndex('aabaa', 'aa')).toBe(0);
  });

  test('manacher practice', () => {
    expect(longestPalindromeLength('babad')).toBe(3);
  });

  test('aho-corasick practice', () => {
    expect(findHits('ushers', ['he', 'she', 'his', 'hers'])).toEqual([1, 2]);
  });

  test('avl tree practice', () => {
    const tree = new AvlTreePractice();
    tree.insert(5, 'a');
    tree.insert(2, 'b');
    expect(tree.search(2)).toBe('b');
  });

  test('red-black tree practice', () => {
    const tree = new RedBlackTreePractice();
    tree.insert(1, 10);
    expect(tree.search(1)).toBe(10);
  });

  test('singly linked list practice', () => {
    const list = new SinglyLinkedListPractice();
    list.addLast(2);
    list.addLast(3);
    expect(list.get(1)).toBe(3);
  });

  test('doubly linked list practice', () => {
    const list = new DoublyLinkedListPractice();
    list.addLast(2);
    list.addFirst(1);
    expect(list.get(1)).toBe(2);
  });

  test('tree traversals practice', () => {
    const tree = new TreeTraversalsPractice();
    tree.insert(2, 'b');
    tree.insert(1, 'a');
    expect(tree.inOrder()).toEqual([1, 2]);
  });

  test('separate chaining practice', () => {
    const table = new SeparateChainingPractice();
    table.put('a', 1);
    expect(table.get('a')).toBe(1);
  });

  test('open addressing practice', () => {
    const table = new OpenAddressingPractice();
    table.put(1, 'one');
    expect(table.get(1)).toBe('one');
  });

  test('suffix array practice', () => {
    expect(suffixArray('banana')).toEqual([5, 3, 1, 0, 4, 2]);
  });

  test('treap practice', () => {
    const treap = new TreapPractice(0);
    treap.insert(3, 30);
    expect(treap.search(3)).toBe(30);
  });
});
