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
});
