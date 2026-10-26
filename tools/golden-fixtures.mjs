/** Shared golden JSON fixtures that must have trilingual *Goldens* test entrypoints. */

/** @typedef {{ id: string, json: string, py: string, js: string, java: string }} GoldenFixture */

/** Deterministic / shared regression (see item-doc-parity-data GOLDENS). */
export const CORE_GOLDENS = {
  'linear-search': {
    json: 'linear-search-goldens.json',
    py: 'python/tests/searching/test_linear_search_goldens.py',
    js: 'javascript/test/searching/linearSearchGoldens.test.js',
    java: 'java/src/test/java/com/dsa/examples/searching/LinearSearchGoldensTest.java',
  },
  'binary-search': {
    json: 'binary-search-goldens.json',
    py: 'python/tests/searching/test_binary_search_goldens.py',
    js: 'javascript/test/searching/binarySearchGoldens.test.js',
    java: 'java/src/test/java/com/dsa/examples/searching/BinarySearchGoldensTest.java',
  },
  kmp: {
    json: 'kmp-goldens.json',
    py: 'python/tests/strings/test_kmp_goldens.py',
    js: 'javascript/test/strings/kmpGoldens.test.js',
    java: 'java/src/test/java/com/dsa/examples/strings/KMPGoldensTest.java',
  },
};

/** Randomized or stateful topics locked with shared JSON (batch 5–6). */
export const STATEFUL_GOLDENS = [
  {
    id: 'binary-search-boundary',
    json: 'binary-search-boundary-goldens.json',
    py: 'python/tests/searching/test_binary_search_boundary_goldens.py',
    js: 'javascript/test/searching/binarySearchBoundaryGoldens.test.js',
    java: 'java/src/test/java/com/dsa/examples/searching/BinarySearchBoundaryGoldensTest.java',
  },
  {
    id: 'reservoir-sampling',
    json: 'reservoir-sampling-goldens.json',
    py: 'python/tests/searching/test_reservoir_sampling_goldens.py',
    js: 'javascript/test/searching/reservoirSamplingGoldens.test.js',
    java: 'java/src/test/java/com/dsa/examples/searching/ReservoirSamplingGoldensTest.java',
  },
  {
    id: 'treap',
    json: 'treap-goldens.json',
    py: 'python/tests/trees/test_treap_goldens.py',
    js: 'javascript/test/trees/treapGoldens.test.js',
    java: 'java/src/test/java/com/dsa/examples/trees/TreapGoldensTest.java',
  },
  {
    id: 'bloom-filter',
    json: 'bloom-filter-goldens.json',
    py: 'python/tests/hashing/test_bloom_filter_goldens.py',
    js: 'javascript/test/hashing/bloomFilterGoldens.test.js',
    java: 'java/src/test/java/com/dsa/examples/hashing/BloomFilterGoldensTest.java',
  },
  {
    id: 'lru-cache',
    json: 'lru-cache-goldens.json',
    py: 'python/tests/linear/test_lru_cache_goldens.py',
    js: 'javascript/test/linear/lruCacheGoldens.test.js',
    java: 'java/src/test/java/com/dsa/examples/linear/LRUCacheGoldensTest.java',
  },
  {
    id: 'quick-select',
    json: 'quick-select-goldens.json',
    py: 'python/tests/searching/test_quick_select_goldens.py',
    js: 'javascript/test/searching/quickSelectGoldens.test.js',
    java: 'java/src/test/java/com/dsa/examples/searching/QuickSelectGoldensTest.java',
  },
  {
    id: 'quick-sort',
    json: 'quick-sort-goldens.json',
    py: 'python/tests/sorting/test_quick_sort_goldens.py',
    js: 'javascript/test/sorting/quickSortGoldens.test.js',
    java: 'java/src/test/java/com/dsa/examples/sorting/QuickSortGoldensTest.java',
  },
  {
    id: 'union-find',
    json: 'union-find-goldens.json',
    py: 'python/tests/unionfind/test_union_find_goldens.py',
    js: 'javascript/test/unionfind/unionFindGoldens.test.js',
    java: 'java/src/test/java/com/dsa/examples/unionfind/UnionFindGoldensTest.java',
  },
  {
    id: 'binary-heap',
    json: 'binary-heap-goldens.json',
    py: 'python/tests/heaps/test_binary_heap_goldens.py',
    js: 'javascript/test/heaps/binaryHeapGoldens.test.js',
    java: 'java/src/test/java/com/dsa/examples/heaps/BinaryHeapGoldensTest.java',
  },
  {
    id: 'topological-sort',
    json: 'topological-sort-goldens.json',
    py: 'python/tests/graphs/test_topological_sort_goldens.py',
    js: 'javascript/test/graphs/topologicalSortGoldens.test.js',
    java: 'java/src/test/java/com/dsa/examples/graphs/TopologicalSortGoldensTest.java',
  },
  {
    id: 'trie',
    json: 'trie-goldens.json',
    py: 'python/tests/trees/test_trie_goldens.py',
    js: 'javascript/test/trees/trieGoldens.test.js',
    java: 'java/src/test/java/com/dsa/examples/trees/TrieGoldensTest.java',
  },
];
