#!/usr/bin/env node
/**
 * Ensures each catalog item id appears in trilingual catalog edge test sources.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { ITEMS } from './items.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const CORPUS = [
  path.join(ROOT, 'python', 'tests', 'catalog', 'test_edge_case_themes.py'),
  path.join(ROOT, 'python', 'tests', 'catalog', 'catalog_item_edges.py'),
  path.join(ROOT, 'java', 'src', 'test', 'java', 'com', 'dsa', 'examples', 'catalog', 'EdgeCaseThemesTest.java'),
  path.join(ROOT, 'java', 'src', 'test', 'java', 'com', 'dsa', 'examples', 'catalog', 'CatalogItemEdgesTest.java'),
  path.join(ROOT, 'javascript', 'test', 'catalog', 'edgeCaseThemes.test.js'),
  path.join(ROOT, 'javascript', 'test', 'catalog', 'catalogItemEdges.test.js'),
]
  .filter((p) => fs.existsSync(p))
  .map((p) => fs.readFileSync(p, 'utf8'))
  .join('\n');

const ALIASES = {
  'singly-linked-list': ['SinglyLinkedList', 'singly_linked_list', 'singlyLinkedList'],
  'doubly-linked-list': ['DoublyLinkedList', 'doubly_linked_list', 'doublyLinkedList'],
  'binary-heap': ['BinaryHeap', 'binary_heap', 'binaryHeap'],
  'priority-queue': ['PriorityQueue', 'priority_queue', 'priorityQueue'],
  'union-find': ['UnionFind', 'union_find', 'unionFind'],
  'tree-traversals': ['TreeTraversals', 'tree_traversals', 'treeTraversals', 'in_order', 'inOrder'],
  'order-statistic-tree': ['OrderStatisticTree', 'order_statistic_tree', 'orderStatisticTree'],
  'interval-tree': ['IntervalTree', 'interval_tree', 'intervalTree'],
  'b-tree': ['BTree', 'b_tree', 'bTree'],
  'separate-chaining': ['HashTableChaining', 'separate_chaining', 'separateChaining'],
  'open-addressing': ['HashTableOpenAddressing', 'open_addressing', 'openAddressing'],
  'bloom-filter': ['BloomFilter', 'bloom_filter', 'bloomFilter'],
  'topological-sort': ['TopologicalSort', 'topological_sort', 'topologicalSort', 'kahn', 'Kahn'],
  'bellman-ford': ['BellmanFord', 'bellman_ford', 'bellmanFord'],
  'floyd-warshall': ['FloydWarshall', 'floyd_warshall', 'floydWarshall'],
  'kruskal-mst': ['KruskalMST', 'kruskal_mst', 'kruskalMst'],
  'prim-mst': ['PrimMST', 'prim_mst', 'primMst'],
  'boruvka-mst': ['BoruvkaMST', 'boruvka_mst', 'boruvkaMst'],
  'segment-tree': ['SegmentTree', 'segment_tree', 'segmentTree'],
  'fenwick-tree': ['FenwickTree', 'fenwick_tree', 'fenwickTree'],
  'z-algorithm': ['ZAlgorithm', 'z_algorithm', 'zAlgorithm'],
  'rabin-karp': ['RabinKarp', 'rabin_karp', 'rabinKarp'],
  lis: ['LIS', 'lis', 'lis'],
  lcs: ['LCS', 'lcs', 'lcs'],
  knapsack: ['Knapsack01', 'knapsack', 'knapsack'],
  'edit-distance': ['EditDistance', 'edit_distance', 'editDistance'],
  'coin-change': ['CoinChange', 'coin_change', 'coinChange'],
  'maximum-subarray': ['MaxSubarray', 'max_subarray', 'maxSubarray'],
  'two-sum-ii': ['TwoSumII', 'two_sum_ii', 'twoSumII'],
  'merge-intervals': ['MergeIntervals', 'merge_intervals', 'mergeIntervals'],
  'trapping-rain-water': ['TrappingRainWater', 'trapping_rain_water', 'trappingRainWater'],
  'meeting-rooms-ii': ['MeetingRoomsII', 'meeting_rooms_ii', 'meetingRoomsII'],
  'top-k-frequent-elements': ['TopKFrequentElements', 'top_k_frequent_elements', 'topKFrequentElements'],
  'number-of-islands': ['NumberOfIslands', 'number_of_islands', 'numberOfIslands'],
  'course-schedule': ['CourseSchedule', 'course_schedule', 'courseSchedule'],
  'word-search': ['WordSearch', 'word_search', 'wordSearch'],
  'level-order-traversal': ['LevelOrderTraversal', 'level_order_traversal', 'levelOrderTraversal'],
  'serialize-binary-tree': ['SerializeBinaryTree', 'serialize_binary_tree', 'serializeBinaryTree'],
  'network-delay': ['NetworkDelay', 'network_delay', 'networkDelay'],
  'longest-substring-without-repeating': [
    'LongestSubstringWithoutRepeating',
    'longest_substring_without_repeating',
    'longestSubstringWithoutRepeating',
  ],
  'valid-parentheses': ['ValidParentheses', 'valid_parentheses', 'validParentheses'],
  'monotonic-stack': ['MonotonicStack', 'monotonic_stack', 'monotonicStack'],
  'a-star': ['AStar', 'a_star', 'aStar'],
  'tarjan-scc': ['TarjanSCC', 'tarjan_scc', 'tarjanScc'],
  kosaraju: ['Kosaraju', 'kosaraju', 'kosaraju'],
  'bipartite-check': ['BipartiteCheck', 'bipartite_check', 'bipartiteCheck'],
  'articulation-bridges': ['ArticulationBridges', 'articulation_bridges', 'articulationBridges'],
  'edmonds-karp': ['EdmondsKarp', 'edmonds_karp', 'edmondsKarp'],
  hungarian: ['Hungarian', 'hungarian', 'hungarian'],
  'red-black-tree': ['RedBlackTree', 'red_black_tree', 'redBlackTree'],
  'lca-binary-lifting': ['LCABinaryLifting', 'lca_binary_lifting', 'lcaBinaryLifting'],
  treap: ['Treap', 'treap', 'treap'],
  'sparse-table': ['SparseTable', 'sparse_table', 'sparseTable'],
  manacher: ['Manacher', 'manacher', 'manacher'],
  'suffix-array': ['SuffixArray', 'suffix_array', 'suffixArray'],
  'aho-corasick': ['AhoCorasick', 'aho_corasick', 'ahoCorasick'],
  'matrix-chain': ['MatrixChain', 'matrix_chain', 'matrixChain'],
  'longest-palindromic-subsequence': [
    'LongestPalindromicSubsequence',
    'longest_palindromic_subsequence',
    'longestPalindromicSubsequence',
  ],
  'partition-equal-subset': ['PartitionEqualSubset', 'partition_equal_subset', 'partitionEqualSubset'],
  'rod-cutting': ['RodCutting', 'rod_cutting', 'rodCutting'],
  'tsp-bitmask': ['TSPBitmask', 'tsp_bitmask', 'tspBitmask'],
  'reservoir-sampling': ['ReservoirSampling', 'reservoir_sampling', 'reservoirSampling'],
  'sliding-window-maximum': ['SlidingWindowMaximum', 'sliding_window_maximum', 'slidingWindowMaximum'],
  'lru-cache': ['LRUCache', 'lru_cache', 'lruCache'],
};

function needlesFor(item) {
  const extra = ALIASES[item.id] ?? [];
  const fromItem = [item.java, item.py, item.js, item.id.replace(/-/g, '')];
  return [...new Set([...extra, ...fromItem])];
}

function main() {
  const missing = [];
  for (const item of ITEMS) {
    const needles = needlesFor(item);
    if (!needles.some((n) => CORPUS.includes(n))) {
      missing.push(item.id);
    }
  }
  if (missing.length) {
    console.error('Catalog coverage missing items:\n');
    for (const id of missing) console.error(`  - ${id}`);
    process.exit(1);
  }
  console.log(`Catalog edge tests mention all ${ITEMS.length} items.`);
}

main();
