/**
 * Numeric scenarios aligned with docs/worked-examples.md interview walkthroughs.
 */
const { minCoins } = require('../../src/dp/coinChange');
const { maxValue: knapsackMaxValue } = require('../../src/dp/knapsack');
const { length: lcsLength } = require('../../src/dp/lcs');
const { maxSubarray } = require('../../src/dp/maxSubarray');
const { distance: editDistance } = require('../../src/dp/editDistance');
const { distances: bfsDistances } = require('../../src/graphs/bfs');
const { Graph } = require('../../src/graphs/graph');
const { canFinish } = require('../../src/graphs/courseSchedule');
const { traverseRecursive } = require('../../src/graphs/dfs');
const { totalWeight: kruskalWeight } = require('../../src/graphs/kruskalMst');
const { networkDelay } = require('../../src/graphs/networkDelay');
const { numIslands } = require('../../src/graphs/numberOfIslands');
const { wordSearch } = require('../../src/graphs/wordSearch');
const { length: lisLength } = require('../../src/dp/lis');
const { kthSmallest } = require('../../src/searching/quickSelect');
const { BST } = require('../../src/trees/bst');
const { levelOrder } = require('../../src/trees/levelOrderTraversal');
const { deserialize, serialize } = require('../../src/trees/serializeBinaryTree');
const { shortestPaths: dijkstraPaths } = require('../../src/graphs/dijkstra');
const { kahn } = require('../../src/graphs/topologicalSort');
const { BinaryHeap } = require('../../src/heaps/binaryHeap');
const { minMeetingRooms } = require('../../src/heaps/meetingRoomsII');
const { PriorityQueue } = require('../../src/heaps/priorityQueue');
const { topKFrequent } = require('../../src/heaps/topKFrequentElements');
const { Trie } = require('../../src/trees/trie');
const { LRUCache } = require('../../src/linear/lruCache');
const { maxSlidingWindow } = require('../../src/linear/slidingWindowMaximum');
const { isValidParentheses } = require('../../src/linear/validParentheses');
const { firstOccurrence, search } = require('../../src/searching/binarySearch');
const { trap } = require('../../src/searching/trappingRainWater');
const { twoSumSorted } = require('../../src/searching/twoSumII');
const { mergeIntervals } = require('../../src/sorting/mergeIntervals');
const { lengthOfLongestSubstring } = require('../../src/strings/longestSubstringWithoutRepeating');
const { UnionFind } = require('../../src/unionfind/unionFind');

describe('worked interview examples (docs parity)', () => {
  test('binary search — index of 7 in sorted array', () => {
    expect(search([1, 3, 5, 7, 9, 11], 7)).toBe(3);
  });

  test('binary search on answer — first index with value >= 7', () => {
    expect(firstOccurrence([1, 3, 5, 7, 9, 11], 7)).toBe(3);
  });

  test('Dijkstra — shortest distance to vertex 2', () => {
    const g = new Graph(4, true, true);
    g.addEdge(0, 1, 1);
    g.addEdge(1, 2, 2);
    g.addEdge(0, 2, 4);
    expect(dijkstraPaths(g, 0)[2]).toBe(3);
  });

  test('union–find — connectivity after merges', () => {
    const uf = new UnionFind(5);
    uf.union(0, 1);
    uf.union(2, 3);
    uf.union(1, 2);
    expect(uf.connected(0, 3)).toBe(true);
    expect(uf.connected(0, 4)).toBe(false);
  });

  test('union–find — single element and redundant union', () => {
    const alone = new UnionFind(1);
    expect(alone.connected(0, 0)).toBe(true);
    const uf = new UnionFind(3);
    uf.union(0, 1);
    uf.union(0, 1);
    uf.union(1, 2);
    expect(uf.connected(0, 2)).toBe(true);
    expect(uf.connected(1, 1)).toBe(true);
  });

  test('LRU cache — capacity 2 eviction pattern', () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1);
    cache.put(3, 3);
    expect(cache.get(2)).toBe(-1);
    cache.put(4, 4);
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(3)).toBe(3);
    expect(cache.get(4)).toBe(4);
  });

  test('topological sort — course schedule DAG', () => {
    const dag = new Graph(4, true, false);
    dag.addEdge(0, 1);
    dag.addEdge(0, 2);
    dag.addEdge(1, 3);
    expect(kahn(dag)).toEqual([0, 1, 2, 3]);
  });

  test('sliding window maximum — window size 3', () => {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([
      3, 3, 5, 5, 6, 7,
    ]);
  });

  test('sliding window patterns — fixed and variable edges', () => {
    expect(maxSlidingWindow([1, 2], 1)).toEqual([1, 2]);
    expect(lengthOfLongestSubstring('')).toBe(0);
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  test('BFS — unweighted distances from vertex 0', () => {
    const g = new Graph(5, false, false);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 3);
    expect(bfsDistances(g, 0)).toEqual([0, 1, 1, 2, -1]);
  });

  test('edit distance — kitten to sitting', () => {
    expect(editDistance('kitten', 'sitting')).toBe(3);
  });

  test('knapsack — 0/1 classic capacity 5', () => {
    expect(knapsackMaxValue([1, 2, 3], [6, 10, 12], 5)).toBe(22);
  });

  test('LCS — abcde and ace', () => {
    expect(lcsLength('abcde', 'ace')).toBe(3);
  });

  test('two sum II — sorted pair target 9', () => {
    expect(twoSumSorted([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });

  test('maximum subarray — Kadane classic', () => {
    expect(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  test('valid parentheses — nested brackets', () => {
    expect(isValidParentheses('({[]})')).toBe(true);
  });

  test('meeting rooms II — overlapping schedule', () => {
    expect(minMeetingRooms([[0, 30], [5, 10], [15, 20]])).toBe(2);
  });

  test('number of islands — classic grid', () => {
    const grid = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ];
    expect(numIslands(grid)).toBe(3);
  });

  test('top K frequent — two keys', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
  });

  test('longest substring — pwwkew', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  test('merge intervals — overlap chain', () => {
    expect(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });

  test('coin change — min coins for 11', () => {
    expect(minCoins([1, 2, 5], 11)).toBe(3);
  });

  test('trapping rain water — classic heights', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });

  test('course schedule — cycle not finishable', () => {
    expect(canFinish(2, [[1, 0], [0, 1]])).toBe(false);
    expect(canFinish(2, [[1, 0]])).toBe(true);
  });

  test('word search — ABCCED on board', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ];
    expect(wordSearch(board, 'ABCCED')).toBe(true);
    expect(wordSearch(board, 'ABCD')).toBe(false);
  });

  test('backtracking — vacuous and missing path', () => {
    expect(wordSearch([['A']], '')).toBe(true);
    expect(wordSearch([['A']], 'A')).toBe(true);
    const grid = [
      ['A', 'B', 'C'],
      ['D', 'E', 'F'],
      ['G', 'H', 'I'],
    ];
    expect(wordSearch(grid, 'ABCG')).toBe(false);
  });

  test('binary min-heap — insert and extract walkthrough', () => {
    const heap = new BinaryHeap();
    for (const v of [5, 2, 8, 1, 2]) {
      heap.insert(v);
    }
    expect([
      heap.extractMin(),
      heap.extractMin(),
      heap.extractMin(),
      heap.extractMin(),
      heap.extractMin(),
    ]).toEqual([1, 2, 2, 5, 8]);
  });

  test('priority queue — min scheduling walkthrough', () => {
    const pq = new PriorityQueue();
    for (const v of [5, 3, 7, 1, 3]) {
      pq.insert(v);
    }
    expect([
      pq.extractMin(),
      pq.extractMin(),
      pq.extractMin(),
      pq.extractMin(),
      pq.extractMin(),
    ]).toEqual([1, 3, 3, 5, 7]);
  });

  test('trie — prefix search walkthrough', () => {
    const trie = new Trie();
    for (const w of ['cat', 'car', 'dog']) {
      trie.insert(w);
    }
    expect(trie.search('cat')).toBe(true);
    expect(trie.search('ca')).toBe(false);
    expect(trie.startsWith('ca')).toBe(true);
    expect(trie.search('cab')).toBe(false);
    expect(trie.startsWith('do')).toBe(true);
    expect(trie.startsWith('z')).toBe(false);
  });

  test('network delay — max distance from source', () => {
    expect(networkDelay(4, [[1, 0, 1], [1, 2, 1], [2, 3, 1]], 1)).toBe(2);
  });

  test('Kruskal MST — chain four vertices', () => {
    const g = new Graph(4, false, true);
    g.addEdge(0, 1, 1);
    g.addEdge(1, 2, 2);
    g.addEdge(2, 3, 3);
    g.addEdge(0, 3, 4);
    expect(kruskalWeight(g)).toBe(6);
  });

  test('level order — heap-style array', () => {
    expect(levelOrder([3, 9, 20, null, null, 15, 7])).toEqual([[3], [9, 20], [15, 7]]);
  });

  test('serialize binary tree — round trip', () => {
    const values = [1, 2, 3, null, null, 4, 5];
    expect(deserialize(serialize(values))).toEqual(values);
  });

  test('quick select — k-th smallest and largest rank', () => {
    const nums = [3, 1, 4, 1, 5];
    expect(kthSmallest(nums, 2)).toBe(1);
    expect(kthSmallest(nums, 4)).toBe(4);
  });

  test('DFS — discovery times from vertex 0', () => {
    const g = new Graph(4, false, false);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 3);
    const r = traverseRecursive(g, 0);
    expect(r.discovery).toEqual([0, 1, 5, 2]);
    expect(r.finish).toEqual([7, 4, 6, 3]);
  });

  test('LIS — patience sorting classic', () => {
    expect(lisLength([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
  });

  test('BST — in-order after inserts', () => {
    const tree = new BST();
    tree.insert(5, 'a');
    tree.insert(2, 'b');
    tree.insert(7, 'c');
    tree.insert(1, 'd');
    expect(tree.inOrder()).toEqual([1, 2, 5, 7]);
    expect(tree.search(2)).toBe('b');
  });
});
