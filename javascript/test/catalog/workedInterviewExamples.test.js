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
const { numIslands } = require('../../src/graphs/numberOfIslands');
const { shortestPaths: dijkstraPaths } = require('../../src/graphs/dijkstra');
const { kahn } = require('../../src/graphs/topologicalSort');
const { minMeetingRooms } = require('../../src/heaps/meetingRoomsII');
const { topKFrequent } = require('../../src/heaps/topKFrequentElements');
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
});
