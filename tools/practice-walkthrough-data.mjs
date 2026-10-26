/**
 * Canonical practice-problem doc anchors and worked-examples walkthrough slugs.
 * Used by check-practice-walkthrough-coverage.mjs and check-readme-index.mjs.
 */
export const PRACTICE_WALKTHROUGH_EXEMPT = Object.freeze({
  /** docAnchor → human-readable reason (must appear in practice-problems.md). */
});

/** @type {{ n: number, docAnchor: string, walkthroughSlug: string, catalogTopic: string }[]} */
export const PRACTICE_PROBLEMS = [
  { n: 1, docAnchor: '1-two-sum-ii', walkthroughSlug: 'two-sum-ii-sorted-pair', catalogTopic: 'two-sum-ii' },
  { n: 2, docAnchor: '2-maximum-subarray', walkthroughSlug: 'maximum-subarray-kadane', catalogTopic: 'maximum-subarray' },
  { n: 3, docAnchor: '3-valid-parentheses', walkthroughSlug: 'valid-parentheses-stack', catalogTopic: 'valid-parentheses' },
  { n: 4, docAnchor: '4-meeting-rooms-ii', walkthroughSlug: 'meeting-rooms-ii-min-heap', catalogTopic: 'meeting-rooms-ii' },
  { n: 5, docAnchor: '5-number-of-islands', walkthroughSlug: 'number-of-islands-grid-dfs', catalogTopic: 'number-of-islands' },
  { n: 6, docAnchor: '6-top-k-frequent-elements', walkthroughSlug: 'top-k-frequent-elements', catalogTopic: 'top-k-frequent-elements' },
  { n: 7, docAnchor: '7-course-schedule', walkthroughSlug: 'course-schedule-canfinish', catalogTopic: 'course-schedule' },
  {
    n: 8,
    docAnchor: '8-longest-substring-without-repeating-characters',
    walkthroughSlug: 'longest-substring-without-repeating',
    catalogTopic: 'longest-substring-without-repeating',
  },
  { n: 9, docAnchor: '9-coin-change', walkthroughSlug: 'coin-change-min-coins', catalogTopic: 'coin-change' },
  { n: 10, docAnchor: '10-lru-cache-design', walkthroughSlug: 'lru-cache-capacity-2', catalogTopic: 'lru-cache' },
  { n: 11, docAnchor: '11-merge-intervals', walkthroughSlug: 'merge-intervals', catalogTopic: 'merge-intervals' },
  { n: 12, docAnchor: '12-binary-tree-level-order-traversal', walkthroughSlug: 'level-order-traversal-heap-array', catalogTopic: 'level-order-traversal' },
  { n: 13, docAnchor: '13-word-search', walkthroughSlug: 'word-search-grid-backtracking', catalogTopic: 'word-search' },
  { n: 14, docAnchor: '14-kth-largest-element', walkthroughSlug: 'quick-select-k-th-order-statistic', catalogTopic: 'quick-select' },
  { n: 15, docAnchor: '15-minimum-spanning-tree-kruskal', walkthroughSlug: 'kruskal-mst-union-find', catalogTopic: 'kruskal-mst' },
  { n: 16, docAnchor: '16-trapping-rain-water', walkthroughSlug: 'trapping-rain-water-two-pointers', catalogTopic: 'trapping-rain-water' },
  { n: 17, docAnchor: '17-edit-distance', walkthroughSlug: 'edit-distance-kitten-to-sitting', catalogTopic: 'edit-distance' },
  { n: 18, docAnchor: '18-serialize-and-deserialize-binary-tree', walkthroughSlug: 'serialize-binary-tree-level-order-codec', catalogTopic: 'serialize-binary-tree' },
  { n: 19, docAnchor: '19-network-delay-time', walkthroughSlug: 'network-delay-time', catalogTopic: 'network-delay' },
  { n: 20, docAnchor: '20-sliding-window-maximum', walkthroughSlug: 'sliding-window-maximum', catalogTopic: 'sliding-window-maximum' },
  { n: 21, docAnchor: '21-binary-search', walkthroughSlug: 'binary-search-on-a-sorted-array', catalogTopic: 'binary-search' },
  { n: 22, docAnchor: '22-01-knapsack', walkthroughSlug: 'knapsack-01-classic', catalogTopic: 'knapsack' },
  { n: 23, docAnchor: '23-longest-common-subsequence', walkthroughSlug: 'longest-common-subsequence', catalogTopic: 'lcs' },
  { n: 24, docAnchor: '24-kmp-pattern-search', walkthroughSlug: 'kmp-pattern-search', catalogTopic: 'kmp' },
  { n: 25, docAnchor: '25-trie-prefix-tree', walkthroughSlug: 'trie-prefix-search', catalogTopic: 'trie' },
  { n: 26, docAnchor: '26-bfs-shortest-paths', walkthroughSlug: 'bfs-unweighted-shortest-paths', catalogTopic: 'bfs' },
  { n: 27, docAnchor: '27-union-find-connectivity', walkthroughSlug: 'union-find-connectivity', catalogTopic: 'union-find' },
  { n: 28, docAnchor: '28-binary-min-heap', walkthroughSlug: 'binary-min-heap-insert-and-extract', catalogTopic: 'binary-heap' },
  { n: 29, docAnchor: '29-dijkstra-shortest-paths', walkthroughSlug: 'dijkstra-non-negative-weights', catalogTopic: 'dijkstra' },
  { n: 30, docAnchor: '30-dfs-discovery-times', walkthroughSlug: 'dfs-discovery-times', catalogTopic: 'dfs' },
  { n: 31, docAnchor: '31-longest-increasing-subsequence', walkthroughSlug: 'longest-increasing-subsequence', catalogTopic: 'lis' },
  { n: 32, docAnchor: '32-merge-sort', walkthroughSlug: 'merge-sort-top-down', catalogTopic: 'merge-sort' },
  { n: 33, docAnchor: '33-topological-sort', walkthroughSlug: 'topological-sort-kahn-course-schedule', catalogTopic: 'topological-sort' },
  { n: 34, docAnchor: '34-priority-queue-scheduling', walkthroughSlug: 'priority-queue-min-scheduling', catalogTopic: 'priority-queue' },
  { n: 35, docAnchor: '35-next-greater-element', walkthroughSlug: 'monotonic-stack', catalogTopic: 'monotonic-stack' },
  { n: 36, docAnchor: '36-quicksort', walkthroughSlug: 'quick-sort', catalogTopic: 'quick-sort' },
  { n: 37, docAnchor: '37-binary-search-tree', walkthroughSlug: 'bst-search-and-in-order-walk', catalogTopic: 'bst' },
  { n: 38, docAnchor: '38-prim-mst-weight', walkthroughSlug: 'prim-mst-greedy-grow', catalogTopic: 'prim-mst' },
  { n: 39, docAnchor: '39-stack-operations', walkthroughSlug: 'valid-parentheses-stack', catalogTopic: 'stack' },
  { n: 40, docAnchor: '40-heapsort', walkthroughSlug: 'heapsort-in-place', catalogTopic: 'heapsort' },
  { n: 41, docAnchor: '41-queue-operations', walkthroughSlug: 'queue-fifo-enqueue-and-dequeue', catalogTopic: 'queue' },
  { n: 42, docAnchor: '42-deque-operations', walkthroughSlug: 'deque-two-ended-operations', catalogTopic: 'deque' },
  { n: 43, docAnchor: '43-counting-sort', walkthroughSlug: 'counting-sort-non-negative-keys', catalogTopic: 'counting-sort' },
  { n: 44, docAnchor: '44-radix-sort', walkthroughSlug: 'radix-sort-lsd-by-digit', catalogTopic: 'radix-sort' },
  { n: 45, docAnchor: '45-rabin-karp-search', walkthroughSlug: 'rabin-karp-rolling-hash', catalogTopic: 'rabin-karp' },
  { n: 46, docAnchor: '46-bellman-ford-paths', walkthroughSlug: 'bellman-ford-negative-edges', catalogTopic: 'bellman-ford' },
  { n: 47, docAnchor: '47-segment-tree-range-sum', walkthroughSlug: 'segment-tree-range-sum', catalogTopic: 'segment-tree' },
  { n: 48, docAnchor: '48-floyd-warshall-distances', walkthroughSlug: 'floyd-warshall-all-pairs-shortest-paths', catalogTopic: 'floyd-warshall' },
  { n: 49, docAnchor: '49-fenwick-tree-prefix-sums', walkthroughSlug: 'fenwick-tree-prefix-sums', catalogTopic: 'fenwick-tree' },
  { n: 50, docAnchor: '50-graph-adjacency', walkthroughSlug: 'graph-adjacency-list', catalogTopic: 'graph' },
  { n: 51, docAnchor: '51-bipartite-check', walkthroughSlug: 'bipartite-check-2-coloring', catalogTopic: 'bipartite-check' },
  { n: 52, docAnchor: '52-tarjan-scc-sizes', walkthroughSlug: 'tarjan-scc-strongly-connected-components', catalogTopic: 'tarjan-scc' },
  { n: 53, docAnchor: '53-kosaraju-scc-sizes', walkthroughSlug: 'kosaraju-scc-strongly-connected-components', catalogTopic: 'kosaraju' },
  { n: 54, docAnchor: '54-edmonds-karp-max-flow', walkthroughSlug: 'edmonds-karp-max-flow', catalogTopic: 'edmonds-karp' },
];

export const PRACTICE_DOC_ANCHORS = PRACTICE_PROBLEMS.map((p) => p.docAnchor);
