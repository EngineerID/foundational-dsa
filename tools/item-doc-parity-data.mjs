/** Metadata for docs/items parity pages (behavior, edges, worked examples, test links). */

export const GOLDENS = {
  'linear-search': 'linear-search-goldens.json',
  'binary-search': 'binary-search-goldens.json',
  kmp: 'kmp-goldens.json',
};

export const GOLDEN_JAVA_TEST = {
  'linear-search': 'LinearSearchGoldensTest.java',
  'binary-search': 'BinarySearchGoldensTest.java',
  kmp: 'KMPGoldensTest.java',
};

export const GOLDEN_JS_TEST = {
  'linear-search': 'linearSearchGoldens.test.js',
  'binary-search': 'binarySearchGoldens.test.js',
  kmp: 'kmpGoldens.test.js',
};

export const GOLDEN_PY_TEST = {
  'linear-search': 'test_linear_search_goldens.py',
  'binary-search': 'test_binary_search_goldens.py',
  kmp: 'test_kmp_goldens.py',
};

/** Items exercised in catalog edge-theme tests (see EdgeCaseThemesTest / test_edge_case_themes). */
/** @deprecated Use `npm run check:catalog-items` — catalog tests now cover all ITEMS. */
export const EDGE_CATALOG_ITEMS = new Set([
  'bubble-sort',
  'merge-sort',
  'counting-sort',
  'linear-search',
  'binary-search',
  'quick-select',
  'dynamic-array',
  'stack',
  'graph',
  'bfs',
  'kmp',
  'union-find',
  'binary-heap',
]);

export const EDGE_NOTES = {
  'linear-search': '`indexOf` / `index_of` returns the **first** matching index, or `-1`. `null` array → `-1`.',
  'binary-search': 'Requires a **sorted** array. `firstOccurrence` / `lastOccurrence` bound duplicate runs. `null` or empty → `-1`.',
  'quick-select': '**`k` is 1-based** (`k=1` is the minimum). Empty array or `k` outside `1..n` **raises** in all three languages. Input is not mutated (defensive copy).',
  kmp: '**Empty `pattern` returns `0`** (vacuous match, like `str.find` / `String.indexOf`). Empty `text` with non-empty `pattern` → `-1`. `null` → `-1`.',
  'counting-sort': '**Non-negative keys only**; negative values raise.',
  'radix-sort': '**Non-negative integers**; behavior follows digit passes (see implementation).',
  'bubble-sort': 'Sorts **in place** ascending; empty array is a no-op.',
  'merge-sort': 'Returns a **new sorted array** (stable); does not require in-place mutation of the input.',
  'quick-sort': 'Sorts **in place**; optional randomized pivot and 3-way partition variants.',
  graph: 'Vertex ids are `0 .. n-1`. Invalid vertex indices raise when querying neighbors.',
  bfs: 'Unweighted shortest-path distances; invalid source index raises.',
  'topological-sort': '**DAG only** — Kahn returns an **empty** list when a cycle is present.',
  'lru-cache': 'Capacity must be **positive**; `get` returns **-1** for missing keys.',
  'sliding-window-maximum': 'Window size `k` must be **positive** and `k <= n`.',
  'edit-distance': '`null` strings treated as empty; classic Levenshtein DP.',
  'union-find': 'Vertices `0 .. n-1`; out-of-range `find`/`union` raises.',
  'dynamic-array': 'Out-of-range `get` raises; empty structure has `size() == 0`.',
  stack: 'Pop/peek on empty stack raises.',
  dijkstra: 'Edge weights must be **non-negative**; uses a min-heap / priority queue.',
  'bellman-ford': 'Handles **negative** edge weights; detects reachable negative cycles.',
  'floyd-warshall': 'All-pairs shortest paths; accepts negative edges when no negative cycles.',
  'bloom-filter': '**No false negatives**; false positives possible. Membership is probabilistic.',
  'open-addressing': 'Deleted slots are **tombstoned**; load factor capped before resize.',
  'separate-chaining': 'Resizes when load factor exceeds threshold (see implementation).',
  trie: 'Empty string key is stored at the root when inserted.',
  bst: 'Duplicate keys typically follow left-or-right policy defined in the implementation.',
};

export const PROPERTY_LINKS = {
  searching: {
    java: ['property/PropertySearchingTest.java'],
    py: ['property/test_search_sort_hypothesis.py'],
    js: ['property/searchSort.property.test.js'],
  },
  kmp: {
    java: ['property/PropertyStringsTest.java'],
    py: ['property/test_strings_hypothesis.py'],
    js: ['property/strings.property.test.js'],
  },
  sorting: {
    java: ['property/PropertySortsTest.java'],
    py: ['test_property_sorts.py'],
    js: ['property/sorts.test.js'],
  },
  linear: {
    java: [],
    py: ['property/test_search_sort_hypothesis.py'],
    js: ['property/searchSort.property.test.js'],
  },
  heaps: {
    java: ['property/PropertyHeapsTest.java'],
    py: ['test_property_heaps.py'],
    js: ['property/heaps.test.js'],
  },
  trees: {
    java: ['property/PropertyTreesTest.java'],
    py: ['test_property_trees.py'],
    js: ['property/trees.test.js'],
  },
  hashing: {
    java: ['property/PropertyHashingTest.java'],
    py: ['test_property_hashing.py'],
    js: ['property/hashing.test.js'],
  },
  unionfind: {
    java: ['property/PropertyUnionFindTest.java'],
    py: ['test_property_unionfind.py'],
    js: ['property/unionfind.test.js'],
  },
  graphs: {
    java: ['property/PropertyGraphsTest.java'],
    py: ['test_property_graphs.py'],
    js: ['property/graphs.test.js'],
  },
};

export const JAVA_PACKAGE_TEST = {
  sorting: 'sorting/SortingTest.java',
  linear: 'linear/LinearStructuresTest.java',
  heaps: 'heaps/HeapTest.java',
  trees: 'trees/TreesTest.java',
  hashing: 'hashing/HashingTest.java',
  graphs: 'graphs/GraphsTest.java',
  unionfind: 'unionfind/UnionFindTest.java',
};

export const WORKED_EXAMPLES = {
  'linear-search': {
    title: 'Linear search (first match)',
    body: 'Scan `[4, 2, 7, 2]` for `2`: index **1** (first occurrence). For `9` → **-1**.',
  },
  'binary-search': { anchor: 'binary-search-on-a-sorted-array', detailed: true },
  'quick-select': {
    title: 'Quick select (k-th smallest)',
    body: 'Array `[3, 1, 4, 1, 5]`, `k=2` (1-based): partition around a pivot until rank `2` is found → **1** (second smallest).',
  },
  'bubble-sort': {
    title: 'Bubble sort',
    body: 'Pass adjacent swaps on `[3, 1, 2]` → `[1, 2, 3]` in place after sufficient passes.',
  },
  'merge-sort': { anchor: 'merge-sort-top-down', detailed: true },
  kmp: { anchor: 'kmp-pattern-search', detailed: true },
  dijkstra: { anchor: 'dijkstra-non-negative-weights', detailed: true },
  'union-find': { anchor: 'union-find-connectivity', detailed: true },
  knapsack: { anchor: 'knapsack-01-classic', detailed: true },
  lcs: { anchor: 'longest-common-subsequence', detailed: true },
  'lru-cache': { anchor: 'lru-cache-capacity-2', detailed: true },
  'topological-sort': { anchor: 'topological-sort-kahn-course-schedule', detailed: true },
  'sliding-window-maximum': { anchor: 'sliding-window-maximum', detailed: true },
  bfs: { anchor: 'bfs-unweighted-shortest-paths', detailed: true },
  'edit-distance': { anchor: 'edit-distance-kitten-to-sitting', detailed: true },
  'two-sum-ii': { anchor: 'two-sum-ii-sorted-pair', detailed: true },
  'maximum-subarray': { anchor: 'maximum-subarray-kadane', detailed: true },
  'valid-parentheses': { anchor: 'valid-parentheses-stack', detailed: true },
  'meeting-rooms-ii': { anchor: 'meeting-rooms-ii-min-heap', detailed: true },
  'number-of-islands': { anchor: 'number-of-islands-grid-dfs', detailed: true },
  'top-k-frequent-elements': { anchor: 'top-k-frequent-elements', detailed: true },
  'longest-substring-without-repeating': {
    anchor: 'longest-substring-without-repeating',
    detailed: true,
  },
  'merge-intervals': { anchor: 'merge-intervals', detailed: true },
  'coin-change': { anchor: 'coin-change-min-coins', detailed: true },
  'trapping-rain-water': { anchor: 'trapping-rain-water-two-pointers', detailed: true },
  'course-schedule': { anchor: 'course-schedule-canfinish', detailed: true },
  'word-search': { anchor: 'word-search-grid-backtracking', detailed: true },
  'network-delay': { anchor: 'network-delay-time', detailed: true },
  'kruskal-mst': { anchor: 'kruskal-mst-union-find', detailed: true },
  'prim-mst': { anchor: 'prim-mst-greedy-grow', detailed: true },
  heapsort: { anchor: 'heapsort-in-place', detailed: true },
  queue: { anchor: 'queue-fifo-enqueue-and-dequeue', detailed: true },
  deque: { anchor: 'deque-two-ended-operations', detailed: true },
  'counting-sort': { anchor: 'counting-sort-non-negative-keys', detailed: true },
  'radix-sort': { anchor: 'radix-sort-lsd-by-digit', detailed: true },
  'rabin-karp': { anchor: 'rabin-karp-rolling-hash', detailed: true },
  'bellman-ford': { anchor: 'bellman-ford-negative-edges', detailed: true },
  'segment-tree': { anchor: 'segment-tree-range-sum', detailed: true },
  'level-order-traversal': { anchor: 'level-order-traversal-heap-array', detailed: true },
  'serialize-binary-tree': { anchor: 'serialize-binary-tree-level-order-codec', detailed: true },
  'quick-select': { anchor: 'quick-select-k-th-order-statistic', detailed: true },
  dfs: { anchor: 'dfs-discovery-times', detailed: true },
  lis: { anchor: 'longest-increasing-subsequence', detailed: true },
  bst: { anchor: 'bst-search-and-in-order-walk', detailed: true },
  'binary-heap': { anchor: 'binary-min-heap-insert-and-extract', detailed: true },
  'priority-queue': { anchor: 'priority-queue-min-scheduling', detailed: true },
  trie: { anchor: 'trie-prefix-search', detailed: true },
  'floyd-warshall': { anchor: 'floyd-warshall-all-pairs-shortest-paths', detailed: true },
  'fenwick-tree': { anchor: 'fenwick-tree-prefix-sums', detailed: true },
  graph: { anchor: 'graph-adjacency-list', detailed: true },
  'bipartite-check': { anchor: 'bipartite-check-2-coloring', detailed: true },
  'tarjan-scc': { anchor: 'tarjan-scc-strongly-connected-components', detailed: true },
  kosaraju: { anchor: 'kosaraju-scc-strongly-connected-components', detailed: true },
  'edmonds-karp': { anchor: 'edmonds-karp-max-flow', detailed: true },
  'matrix-chain': { anchor: 'matrix-chain-min-scalar-multiplications', detailed: true },
  'rod-cutting': { anchor: 'rod-cutting-max-revenue', detailed: true },
  'partition-equal-subset': { anchor: 'partition-equal-subset-01-knapsack', detailed: true },
  'longest-palindromic-subsequence': {
    anchor: 'longest-palindromic-subsequence-length',
    detailed: true,
  },
  'dynamic-array': { anchor: 'dynamic-array-append-and-get', detailed: true },
  'linear-search': { anchor: 'linear-search-first-match-index', detailed: true },
  'bubble-sort': { anchor: 'bubble-sort-in-place-ascending', detailed: true },
};
