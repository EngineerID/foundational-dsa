/**
 * Practice implementations compared to brute-force references in property tests (phase 1).
 * CI: check:practice-property-coverage
 */

export const PRACTICE_PROPERTY_TRIALS = 25;
export const PRACTICE_PROPERTY_SEED = 42;

/** @type {readonly string[]} */
export const PRACTICE_PROPERTY_SORTING = [
  'bubble-sort',
  'selection-sort',
  'insertion-sort',
  'merge-sort',
  'quick-sort',
  'heapsort',
  'counting-sort',
  'radix-sort',
];

/** @type {readonly string[]} */
export const PRACTICE_PROPERTY_SEARCHING = [
  'linear-search',
  'binary-search',
  'two-sum-ii',
  'trapping-rain-water',
  'quick-select',
];

/** @type {readonly string[]} */
export const PRACTICE_PROPERTY_GRAPHS = [
  'bfs',
  'union-find',
  'dijkstra',
  'number-of-islands',
  'course-schedule',
  'topological-sort',
  'kruskal-mst',
  'prim-mst',
  'bellman-ford',
  'floyd-warshall',
  'network-delay',
  'bipartite-check',
];

/** @type {readonly string[]} */
export const PRACTICE_PROPERTY_DP = [
  'maximum-subarray',
  'coin-change',
  'knapsack',
  'lcs',
  'lis',
  'edit-distance',
  'matrix-chain',
  'rod-cutting',
  'partition-equal-subset',
  'longest-palindromic-subsequence',
  'tsp-bitmask',
];

export const PRACTICE_PROPERTY_ALL = [
  ...PRACTICE_PROPERTY_SORTING,
  ...PRACTICE_PROPERTY_SEARCHING,
  ...PRACTICE_PROPERTY_GRAPHS,
  ...PRACTICE_PROPERTY_DP,
];
