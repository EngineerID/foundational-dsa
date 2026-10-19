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
};
