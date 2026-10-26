/**
 * Practice interview-style problems whose shared goldens are driven by
 * practiceInterviewGoldens* tests (not practiceSharedGoldens catalog topics).
 */
import { PRACTICE_PROBLEMS } from './practice-walkthrough-data.mjs';
import { practiceGoldenJsonForTopic } from './practice-golden-map.mjs';

/** Topics whose goldens are exercised via practiceGoldens / shared catalog tests only. */
const IN_SHARED_PRACTICE_GOLDENS = new Set([
  'binary-search',
  'knapsack',
  'lcs',
  'kmp',
  'trie',
  'bfs',
  'union-find',
  'binary-heap',
  'dijkstra',
  'dfs',
  'lis',
  'merge-sort',
  'topological-sort',
  'priority-queue',
  'monotonic-stack',
  'quick-sort',
  'bst',
  'kruskal-mst',
  'prim-mst',
  'stack',
  'heapsort',
  'queue',
  'deque',
  'counting-sort',
  'radix-sort',
  'rabin-karp',
  'bellman-ford',
  'segment-tree',
  'floyd-warshall',
  'fenwick-tree',
  'graph',
  'bipartite-check',
  'tarjan-scc',
  'kosaraju',
  'edmonds-karp',
  'matrix-chain',
  'rod-cutting',
  'partition-equal-subset',
  'longest-palindromic-subsequence',
  'dynamic-array',
  'linear-search',
  'bubble-sort',
  'insertion-sort',
  'selection-sort',
  'z-algorithm',
  'manacher',
  'aho-corasick',
  'avl-tree',
  'red-black-tree',
  'singly-linked-list',
  'doubly-linked-list',
  'tree-traversals',
  'separate-chaining',
  'open-addressing',
  'suffix-array',
  'treap',
  'order-statistic-tree',
  'interval-tree',
  'b-tree',
  'bloom-filter',
  'boruvka-mst',
  'a-star',
  'articulation-bridges',
  'hungarian',
  'lca-binary-lifting',
  'sparse-table',
  'tsp-bitmask',
  'reservoir-sampling',
]);

export const PRACTICE_INTERVIEW_GOLDEN_TOPICS = PRACTICE_PROBLEMS.filter(
  (row) => !IN_SHARED_PRACTICE_GOLDENS.has(row.catalogTopic),
).map((row) => ({
  n: row.n,
  catalogTopic: row.catalogTopic,
  json: practiceGoldenJsonForTopic(row.catalogTopic),
}));

export const PRACTICE_INTERVIEW_GOLDEN_JSON = [
  ...new Set(
    PRACTICE_INTERVIEW_GOLDEN_TOPICS.map((t) => t.json).filter(Boolean),
  ),
];
