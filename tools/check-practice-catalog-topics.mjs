#!/usr/bin/env node
/** Validates practice-problems metadata: catalogTopic ids and interview-priority coverage progress. */
import { ITEMS } from './items.mjs';
import { PRACTICE_PROBLEMS } from './practice-walkthrough-data.mjs';

/** Catalog topics expected to have a practice problem (expand toward 87). */
export const PRACTICE_TOPIC_TARGET = [
  'two-sum-ii',
  'maximum-subarray',
  'valid-parentheses',
  'meeting-rooms-ii',
  'number-of-islands',
  'top-k-frequent-elements',
  'course-schedule',
  'longest-substring-without-repeating',
  'coin-change',
  'lru-cache',
  'merge-intervals',
  'level-order-traversal',
  'word-search',
  'quick-select',
  'kruskal-mst',
  'trapping-rain-water',
  'edit-distance',
  'serialize-binary-tree',
  'network-delay',
  'sliding-window-maximum',
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
];

const itemIds = new Set(ITEMS.map((i) => i.id));

export function checkPracticeCatalogTopics() {
  const errors = [];
  const covered = new Set();
  for (const row of PRACTICE_PROBLEMS) {
    if (!row.catalogTopic) {
      errors.push(`#${row.n} ${row.docAnchor}: missing catalogTopic`);
      continue;
    }
    if (!itemIds.has(row.catalogTopic)) {
      errors.push(`#${row.n} ${row.docAnchor}: unknown catalogTopic "${row.catalogTopic}"`);
    }
    if (covered.has(row.catalogTopic)) {
      errors.push(`catalogTopic "${row.catalogTopic}" mapped by multiple practice problems`);
    }
    covered.add(row.catalogTopic);
  }
  for (const id of PRACTICE_TOPIC_TARGET) {
    if (!covered.has(id)) {
      errors.push(`PRACTICE_TOPIC_TARGET missing practice for catalog topic "${id}"`);
    }
  }
  return { errors, coveredCount: covered.size, targetCount: PRACTICE_TOPIC_TARGET.length };
}

function main() {
  const { errors, coveredCount, targetCount } = checkPracticeCatalogTopics();
  if (errors.length) {
    console.error('Practice catalog topic check failed:\n');
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log(
    `Practice catalog topic check passed (${coveredCount} topics with practice; target list ${targetCount}).`,
  );
}

main();
