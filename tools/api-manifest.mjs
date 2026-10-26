/**
 * Canonical public API per item: explicit java / python / javascript symbol names.
 */
import { ITEMS } from './items.mjs';

export const API_MANIFEST = {
  'linear-search': {
    type: 'static',
    java: ['indexOf'],
    python: ['index_of'],
    javascript: ['indexOf'],
  },
  'binary-search': {
    type: 'static',
    java: ['search', 'firstOccurrence', 'lastOccurrence'],
    python: ['search', 'first_occurrence', 'last_occurrence'],
    javascript: ['search', 'firstOccurrence', 'lastOccurrence'],
  },
  'two-sum-ii': {
    type: 'static',
    java: ['twoSumSorted'],
    python: ['two_sum_sorted'],
    javascript: ['twoSumSorted'],
  },
  'trapping-rain-water': {
    type: 'static',
    java: ['trap'],
    python: ['trap'],
    javascript: ['trap'],
  },
  'quick-select': {
    type: 'static',
    java: ['kthSmallest'],
    python: ['kth_smallest'],
    javascript: ['kthSmallest'],
  },
  'bubble-sort': {
    type: 'static',
    java: ['sort'],
    python: ['sort'],
    javascript: ['sort'],
  },
  'selection-sort': {
    type: 'static',
    java: ['sort'],
    python: ['sort'],
    javascript: ['sort'],
  },
  'insertion-sort': {
    type: 'static',
    java: ['sort'],
    python: ['sort'],
    javascript: ['sort'],
  },
  'merge-sort': {
    type: 'static',
    java: ['sort', 'sortBottomUp'],
    python: ['sort', 'sort_bottom_up'],
    javascript: ['sort', 'sortBottomUp'],
  },
  'quick-sort': {
    type: 'static',
    java: ['sort', 'sort3Way'],
    python: ['sort', 'sort_3way'],
    javascript: ['sort', 'sort3Way'],
  },
  heapsort: {
    type: 'static',
    java: ['sort'],
    python: ['sort'],
    javascript: ['sort'],
  },
  'counting-sort': {
    type: 'static',
    java: ['sort', 'sortByDigit'],
    python: ['sort', 'sort_by_digit'],
    javascript: ['sort', 'sortByDigit'],
  },
  'radix-sort': {
    type: 'static',
    java: ['sort'],
    python: ['sort'],
    javascript: ['sort'],
  },
  'merge-intervals': {
    type: 'static',
    java: ['mergeIntervals'],
    python: ['merge_intervals'],
    javascript: ['mergeIntervals'],
  },
  kmp: {
    type: 'static',
    java: ['search'],
    python: ['search'],
    javascript: ['search'],
  },
  'dynamic-array': {
    type: 'instance',
    java: ['size', 'add', 'get', 'set', 'remove'],
    python: ['size', 'add', 'get', 'set', 'remove'],
    javascript: ['size', 'add', 'get', 'set', 'remove'],
  },
  'singly-linked-list': {
    type: 'instance',
    java: ['size', 'addFirst', 'addLast', 'get', 'remove', 'reverse'],
    python: ['size', 'add_first', 'add_last', 'get', 'remove', 'reverse'],
    javascript: ['size', 'addFirst', 'addLast', 'get', 'remove', 'reverse'],
  },
  'doubly-linked-list': {
    type: 'instance',
    java: ['size', 'addFirst', 'addLast', 'get', 'remove', 'reverse'],
    python: ['size', 'add_first', 'add_last', 'get', 'remove', 'reverse'],
    javascript: ['size', 'addFirst', 'addLast', 'get', 'remove', 'reverse'],
  },
  stack: {
    type: 'instance',
    java: ['push', 'pop', 'peek', 'isEmpty'],
    python: ['push', 'pop', 'peek', 'is_empty'],
    javascript: ['push', 'pop', 'peek', 'isEmpty'],
  },
  queue: {
    type: 'instance',
    java: ['enqueue', 'dequeue', 'peek', 'isEmpty'],
    python: ['enqueue', 'dequeue', 'peek', 'is_empty'],
    javascript: ['enqueue', 'dequeue', 'peek', 'isEmpty'],
  },
  deque: {
    type: 'instance',
    java: ['addFirst', 'addLast', 'removeFirst', 'removeLast', 'isEmpty'],
    python: ['add_first', 'add_last', 'remove_first', 'remove_last', 'is_empty'],
    javascript: ['addFirst', 'addLast', 'removeFirst', 'removeLast', 'isEmpty'],
  },
  'binary-heap': {
    type: 'instance',
    java: ['size', 'peek', 'insert', 'extractMin', 'decreaseKey', 'indexOf', 'heapify'],
    python: ['size', 'peek', 'insert', 'extract_min', 'decrease_key', 'index_of', 'heapify'],
    javascript: ['size', 'peek', 'insert', 'extractMin', 'decreaseKey', 'indexOf', 'heapify'],
  },
  'priority-queue': {
    type: 'instance',
    java: ['insert', 'peek', 'extractMin', 'decreaseKey', 'isEmpty', 'size', 'heap'],
    python: ['insert', 'peek', 'extract_min', 'decrease_key', 'is_empty', 'size', 'heap'],
    javascript: ['insert', 'peek', 'extractMin', 'decreaseKey', 'isEmpty', 'size', 'heap'],
  },
  bst: {
    type: 'instance',
    java: ['insert', 'search', 'delete', 'successor', 'predecessor', 'inOrder', 'getRoot'],
    python: ['insert', 'search', 'delete', 'successor', 'predecessor', 'in_order', 'get_root'],
    javascript: ['insert', 'search', 'delete', 'successor', 'predecessor', 'inOrder', 'getRoot'],
  },
  'tree-traversals': {
    type: 'static',
    java: [
      'inOrderRecursive',
      'preOrderRecursive',
      'postOrderRecursive',
      'inOrderIterative',
      'preOrderIterative',
      'postOrderIterative',
      'levelOrder',
    ],
    python: [
      'in_order_recursive',
      'pre_order_recursive',
      'post_order_recursive',
      'in_order_iterative',
      'pre_order_iterative',
      'post_order_iterative',
      'level_order',
    ],
    javascript: [
      'inOrderRecursive',
      'preOrderRecursive',
      'postOrderRecursive',
      'inOrderIterative',
      'preOrderIterative',
      'postOrderIterative',
      'levelOrder',
    ],
  },
  'avl-tree': {
    type: 'instance',
    java: ['insert', 'delete'],
    python: ['insert', 'delete'],
    javascript: ['insert', 'delete'],
  },
  'order-statistic-tree': {
    type: 'instance',
    java: ['insert', 'select', 'rank'],
    python: ['insert', 'select', 'rank'],
    javascript: ['insert', 'select', 'rank'],
  },
  'interval-tree': {
    type: 'instance',
    java: ['insert', 'overlapSearch'],
    python: ['insert', 'overlap_search'],
    javascript: ['insert', 'overlapSearch'],
  },
  trie: {
    type: 'instance',
    java: ['insert', 'search', 'startsWith'],
    python: ['insert', 'search', 'starts_with'],
    javascript: ['insert', 'search', 'startsWith'],
  },
  'b-tree': {
    type: 'instance',
    java: ['search', 'insert'],
    python: ['search', 'insert'],
    javascript: ['search', 'insert'],
  },
  'separate-chaining': {
    type: 'instance',
    java: ['put', 'get', 'remove', 'size'],
    python: ['put', 'get', 'remove', 'size'],
    javascript: ['put', 'get', 'remove', 'size'],
  },
  'open-addressing': {
    type: 'instance',
    java: ['put', 'get', 'remove'],
    python: ['put', 'get', 'remove'],
    javascript: ['put', 'get', 'remove'],
  },
  'bloom-filter': {
    type: 'instance',
    java: ['add', 'mightContain'],
    python: ['add', 'might_contain'],
    javascript: ['add', 'mightContain'],
  },
  'union-find': {
    type: 'instance',
    java: ['find', 'union', 'connected', 'countComponents'],
    python: ['find', 'union', 'connected', 'count_components'],
    javascript: ['find', 'union', 'connected', 'countComponents'],
  },
  graph: {
    type: 'instance',
    java: ['addEdge', 'vertices', 'neighbors', 'allEdges', 'isDirected', 'isWeighted'],
    python: ['add_edge', 'vertices', 'neighbors', 'all_edges', 'is_directed', 'is_weighted'],
    javascript: ['addEdge', 'vertices', 'neighbors', 'allEdges', 'isDirected', 'isWeighted'],
  },
  bfs: {
    type: 'static',
    java: ['distances'],
    python: ['distances'],
    javascript: ['distances'],
  },
  dfs: {
    type: 'static',
    java: ['traverseRecursive', 'traverseIterative'],
    python: ['traverse_recursive', 'traverse_iterative'],
    javascript: ['traverseRecursive', 'traverseIterative'],
  },
  'topological-sort': {
    type: 'static',
    java: ['kahn'],
    python: ['kahn'],
    javascript: ['kahn'],
  },
  dijkstra: {
    type: 'static',
    java: ['shortestPaths'],
    python: ['shortest_paths'],
    javascript: ['shortestPaths'],
  },
  'bellman-ford': {
    type: 'static',
    java: ['shortestPaths'],
    python: ['shortest_paths'],
    javascript: ['shortestPaths'],
  },
  'floyd-warshall': {
    type: 'static',
    java: ['allPairsShortestPaths'],
    python: ['all_pairs_shortest_paths'],
    javascript: ['allPairsShortestPaths'],
  },
  'kruskal-mst': {
    type: 'static',
    java: ['mst', 'totalWeight'],
    python: ['mst', 'total_weight'],
    javascript: ['mst', 'totalWeight'],
  },
  'prim-mst': {
    type: 'static',
    java: ['totalWeight'],
    python: ['total_weight'],
    javascript: ['totalWeight'],
  },
  'boruvka-mst': {
    type: 'static',
    java: ['totalWeight'],
    python: ['total_weight'],
    javascript: ['totalWeight'],
  },
  'segment-tree': {
    type: 'instance',
    java: ['update', 'rangeSum'],
    python: ['update', 'range_sum'],
    javascript: ['update', 'rangeSum'],
  },
  'fenwick-tree': {
    type: 'instance',
    java: ['add', 'prefixSum', 'rangeSum'],
    python: ['add', 'prefix_sum', 'range_sum'],
    javascript: ['add', 'prefixSum', 'rangeSum'],
  },
  'z-algorithm': {
    type: 'static',
    java: ['zArray', 'search'],
    python: ['z_array', 'search'],
    javascript: ['zArray', 'search'],
  },
  'rabin-karp': {
    type: 'static',
    java: ['search'],
    python: ['search'],
    javascript: ['search'],
  },
  'longest-substring-without-repeating': {
    type: 'static',
    java: ['lengthOfLongestSubstring'],
    python: ['length_of_longest_substring'],
    javascript: ['lengthOfLongestSubstring'],
  },
  lis: {
    type: 'static',
    java: ['length'],
    python: ['length'],
    javascript: ['length'],
  },
  lcs: {
    type: 'static',
    java: ['length'],
    python: ['length'],
    javascript: ['length'],
  },
  knapsack: {
    type: 'static',
    java: ['maxValue'],
    python: ['max_value'],
    javascript: ['maxValue'],
  },
  'edit-distance': {
    type: 'static',
    java: ['distance'],
    python: ['distance'],
    javascript: ['distance'],
  },
  'coin-change': {
    type: 'static',
    java: ['minCoins'],
    python: ['min_coins'],
    javascript: ['minCoins'],
  },
  'maximum-subarray': {
    type: 'static',
    java: ['maxSubarray'],
    python: ['max_subarray'],
    javascript: ['maxSubarray'],
  },
  'a-star': {
    type: 'static',
    java: ['shortestPathLength'],
    python: ['shortest_path_length'],
    javascript: ['shortestPathLength'],
  },
  'tarjan-scc': {
    type: 'static',
    java: ['stronglyConnectedComponents'],
    python: ['strongly_connected_components'],
    javascript: ['stronglyConnectedComponents'],
  },
  kosaraju: {
    type: 'static',
    java: ['stronglyConnectedComponents'],
    python: ['strongly_connected_components'],
    javascript: ['stronglyConnectedComponents'],
  },
  'bipartite-check': {
    type: 'static',
    java: ['isBipartite'],
    python: ['is_bipartite'],
    javascript: ['isBipartite'],
  },
  'articulation-bridges': {
    type: 'static',
    java: ['find'],
    python: ['find'],
    javascript: ['find'],
  },
  'edmonds-karp': {
    type: 'static',
    java: ['maxFlow'],
    python: ['max_flow'],
    javascript: ['maxFlow'],
  },
  hungarian: {
    type: 'static',
    java: ['minCost'],
    python: ['min_cost'],
    javascript: ['minCost'],
  },
  'red-black-tree': {
    type: 'instance',
    java: ['search', 'insert'],
    python: ['search', 'insert'],
    javascript: ['search', 'insert'],
  },
  'lca-binary-lifting': {
    type: 'instance',
    java: ['query'],
    python: ['query'],
    javascript: ['query'],
  },
  treap: {
    type: 'instance',
    java: ['search', 'insert'],
    python: ['search', 'insert'],
    javascript: ['search', 'insert'],
  },
  'sparse-table': {
    type: 'instance',
    java: ['query'],
    python: ['query'],
    javascript: ['query'],
  },
  manacher: {
    type: 'static',
    java: ['longestPalindromeLength'],
    python: ['longest_palindrome_length'],
    javascript: ['longestPalindromeLength'],
  },
  'suffix-array': {
    type: 'static',
    java: ['build'],
    python: ['build'],
    javascript: ['build'],
  },
  'aho-corasick': {
    type: 'static',
    java: ['search'],
    python: ['search'],
    javascript: ['search'],
  },
  'matrix-chain': {
    type: 'static',
    java: ['minMultiplications'],
    python: ['min_multiplications'],
    javascript: ['minMultiplications'],
  },
  'longest-palindromic-subsequence': {
    type: 'static',
    java: ['length'],
    python: ['length'],
    javascript: ['length'],
  },
  'partition-equal-subset': {
    type: 'static',
    java: ['canPartition'],
    python: ['can_partition'],
    javascript: ['canPartition'],
  },
  'rod-cutting': {
    type: 'static',
    java: ['maxProfit'],
    python: ['max_profit'],
    javascript: ['maxProfit'],
  },
  'tsp-bitmask': {
    type: 'static',
    java: ['minCost'],
    python: ['min_cost'],
    javascript: ['minCost'],
  },
  'reservoir-sampling': {
    type: 'static',
    java: ['sample'],
    python: ['sample'],
    javascript: ['sample'],
  },
  'valid-parentheses': {
    type: 'static',
    java: ['isValidParentheses'],
    python: ['is_valid_parentheses'],
    javascript: ['isValidParentheses'],
  },
  'monotonic-stack': {
    type: 'static',
    java: ['nextGreaterElement'],
    python: ['next_greater_element'],
    javascript: ['nextGreaterElement'],
  },
  'sliding-window-maximum': {
    type: 'static',
    java: ['maxSlidingWindow'],
    python: ['max_sliding_window'],
    javascript: ['maxSlidingWindow'],
  },
  'lru-cache': {
    type: 'instance',
    java: ['get', 'put'],
    python: ['get', 'put'],
    javascript: ['get', 'put'],
  },
};

export function expectedJavaSymbols(item) {
  const spec = API_MANIFEST[item.id];
  if (!spec) return [];
  if (spec.type === 'static') {
    return spec.java.map((m) => `${item.java}.${m}`);
  }
  return spec.java.map((m) => `${item.java}#${m}`);
}

export function expectedPySymbols(item) {
  const spec = API_MANIFEST[item.id];
  if (!spec) return [];
  return spec.python;
}

export function expectedJsSymbols(item) {
  const spec = API_MANIFEST[item.id];
  if (!spec) return [];
  return spec.javascript;
}

export function allItemIds() {
  return ITEMS.map((i) => i.id);
}
