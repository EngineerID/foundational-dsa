/**
 * Practice property-test topic ids (full 87 catalog topics with practice).
 * CI: check:practice-property-coverage
 */
import { PRACTICE_TOPIC_TARGET } from './check-practice-catalog-topics.mjs';

export const PRACTICE_PROPERTY_TRIALS = 25;
export const PRACTICE_PROPERTY_SEED = 42;

/** @deprecated grouped ids — kept for docs; full list is {@link PRACTICE_PROPERTY_ALL}. */
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

export const PRACTICE_PROPERTY_SEARCHING = [
  'linear-search',
  'binary-search',
  'two-sum-ii',
  'trapping-rain-water',
  'quick-select',
];

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

/** All catalog topics with practice implementations (87). */
export const PRACTICE_PROPERTY_ALL = PRACTICE_TOPIC_TARGET;
