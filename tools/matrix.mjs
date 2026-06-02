#!/usr/bin/env node
/**
 * Regenerates COVERAGE.md from filesystem + optional test results.
 * Usage: node tools/matrix.mjs [--check] [--strict]
 */

import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const ITEMS = [
  { topic: 'searching', id: 'linear-search', java: 'LinearSearch', py: 'linear_search', js: 'linearSearch' },
  { topic: 'searching', id: 'binary-search', java: 'BinarySearch', py: 'binary_search', js: 'binarySearch' },
  { topic: 'searching', id: 'quick-select', java: 'QuickSelect', py: 'quick_select', js: 'quickSelect' },
  { topic: 'sorting', id: 'bubble-sort', java: 'BubbleSort', py: 'bubble_sort', js: 'bubbleSort' },
  { topic: 'sorting', id: 'selection-sort', java: 'SelectionSort', py: 'selection_sort', js: 'selectionSort' },
  { topic: 'sorting', id: 'insertion-sort', java: 'InsertionSort', py: 'insertion_sort', js: 'insertionSort' },
  { topic: 'sorting', id: 'merge-sort', java: 'MergeSort', py: 'merge_sort', js: 'mergeSort' },
  { topic: 'sorting', id: 'quick-sort', java: 'QuickSort', py: 'quick_sort', js: 'quickSort' },
  { topic: 'linear', id: 'dynamic-array', java: 'DynamicArray', py: 'dynamic_array', js: 'dynamicArray' },
  { topic: 'linear', id: 'singly-linked-list', java: 'SinglyLinkedList', py: 'singly_linked_list', js: 'singlyLinkedList' },
  { topic: 'linear', id: 'doubly-linked-list', java: 'DoublyLinkedList', py: 'doubly_linked_list', js: 'doublyLinkedList' },
  { topic: 'linear', id: 'stack', java: 'Stack', py: 'stack', js: 'stack' },
  { topic: 'linear', id: 'queue', java: 'Queue', py: 'queue', js: 'queue' },
  { topic: 'linear', id: 'deque', java: 'Deque', py: 'deque', js: 'deque' },
  { topic: 'heaps', id: 'binary-heap', java: 'BinaryHeap', py: 'binary_heap', js: 'binaryHeap' },
  { topic: 'heaps', id: 'priority-queue', java: 'PriorityQueue', py: 'priority_queue', js: 'priorityQueue' },
  { topic: 'trees', id: 'bst', java: 'BST', py: 'bst', js: 'bst' },
  { topic: 'trees', id: 'tree-traversals', java: 'TreeTraversals', py: 'tree_traversals', js: 'treeTraversals' },
  { topic: 'trees', id: 'avl-tree', java: 'AVLTree', py: 'avl_tree', js: 'avlTree' },
  { topic: 'trees', id: 'order-statistic-tree', java: 'OrderStatisticTree', py: 'order_statistic_tree', js: 'orderStatisticTree' },
  { topic: 'trees', id: 'interval-tree', java: 'IntervalTree', py: 'interval_tree', js: 'intervalTree' },
  { topic: 'trees', id: 'trie', java: 'Trie', py: 'trie', js: 'trie' },
  { topic: 'trees', id: 'b-tree', java: 'BTree', py: 'b_tree', js: 'bTree' },
  { topic: 'hashing', id: 'separate-chaining', java: 'HashTableChaining', py: 'separate_chaining', js: 'separateChaining' },
  { topic: 'hashing', id: 'open-addressing', java: 'HashTableOpenAddressing', py: 'open_addressing', js: 'openAddressing' },
  { topic: 'hashing', id: 'bloom-filter', java: 'BloomFilter', py: 'bloom_filter', js: 'bloomFilter' },
  { topic: 'unionfind', id: 'union-find', java: 'UnionFind', py: 'union_find', js: 'unionFind' },
  { topic: 'graphs', id: 'graph', java: 'Graph', py: 'graph', js: 'graph' },
  { topic: 'graphs', id: 'bfs', java: 'BFS', py: 'bfs', js: 'bfs' },
  { topic: 'graphs', id: 'dfs', java: 'DFS', py: 'dfs', js: 'dfs' },
  { topic: 'graphs', id: 'topological-sort', java: 'TopologicalSort', py: 'topological_sort', js: 'topologicalSort' },
  { topic: 'graphs', id: 'dijkstra', java: 'Dijkstra', py: 'dijkstra', js: 'dijkstra' },
  { topic: 'graphs', id: 'bellman-ford', java: 'BellmanFord', py: 'bellman_ford', js: 'bellmanFord' },
  { topic: 'graphs', id: 'floyd-warshall', java: 'FloydWarshall', py: 'floyd_warshall', js: 'floydWarshall' },
  { topic: 'graphs', id: 'kruskal-mst', java: 'KruskalMST', py: 'kruskal_mst', js: 'kruskalMst' },
  { topic: 'graphs', id: 'prim-mst', java: 'PrimMST', py: 'prim_mst', js: 'primMst' },
  { topic: 'graphs', id: 'boruvka-mst', java: 'BoruvkaMST', py: 'boruvka_mst', js: 'boruvkaMst' },
];

const JAVA_SPECIAL = {
  'HashTableChaining': 'hashing/HashTableChaining',
  'HashTableOpenAddressing': 'hashing/HashTableOpenAddressing',
  'KruskalMST': 'graphs/KruskalMST',
  'PrimMST': 'graphs/PrimMST',
  'BoruvkaMST': 'graphs/BoruvkaMST',
  'BST': 'trees/BST',
  'BFS': 'graphs/BFS',
  'DFS': 'graphs/DFS',
  'AVLTree': 'trees/AVLTree',
  'BTree': 'trees/BTree',
};

function javaPath(item) {
  const rel = JAVA_SPECIAL[item.java] ?? `${item.topic}/${item.java}`;
  return path.join(ROOT, 'java', 'src', 'main', 'java', 'com', 'dsa', 'examples', ...rel.split('/')) + '.java';
}

function pyPath(item) {
  return path.join(ROOT, 'python', 'dsa', item.topic, `${item.py}.py`);
}

function pyTestPath(item) {
  return path.join(ROOT, 'python', 'tests', item.topic, `test_${item.py}.py`);
}

function jsPath(item) {
  return path.join(ROOT, 'javascript', 'src', item.topic, `${item.js}.js`);
}

function jsTestPath(item) {
  return path.join(ROOT, 'javascript', 'test', item.topic, `${item.js}.test.js`);
}

function fileExists(p) {
  return fs.existsSync(p);
}

function pythonCmd() {
  for (const cmd of ['python', 'py', 'python3']) {
    try {
      execSync(`${cmd} --version`, { stdio: 'pipe', shell: true });
      return cmd;
    } catch {
      /* try next */
    }
  }
  return 'python';
}

function runTests() {
  const results = { java: null, py: null, js: null };
  try {
    execSync('node tools/run-java-test.mjs', { cwd: ROOT, stdio: 'pipe' });
    results.java = true;
  } catch {
    results.java = false;
  }
  try {
    execSync('node tools/run-py-test.mjs', { cwd: ROOT, stdio: 'pipe' });
    results.py = true;
  } catch {
    results.py = false;
  }
  try {
    execSync('npx jest --config javascript/jest.config.js', { cwd: ROOT, stdio: 'pipe', shell: true });
    results.js = true;
  } catch {
    results.js = false;
  }
  return results;
}

function cellStatus(exists, suitePassed) {
  if (!exists) return '—';
  if (suitePassed === false) return '❌';
  return '✅';
}

function generateMarkdown(rows) {
  const lines = [
    '# Coverage matrix',
    '',
    'Generated by `npm run matrix`. Do not edit by hand.',
    '',
    '| # | Topic | Java | Python | JavaScript |',
    '|---|-------|:----:|:------:|:----------:|',
  ];
  rows.forEach((r, i) => {
    lines.push(`| ${i + 1} | ${r.item.id} | ${r.java} | ${r.python} | ${r.javascript} |`);
  });
  const total = rows.length * 3;
  const green = rows.reduce((n, r) => n + [r.java, r.python, r.javascript].filter((c) => c === '✅').length, 0);
  lines.push('', `**Total:** ${green}/${total} ✅`, '');
  return lines.join('\n');
}

const checkMode = process.argv.includes('--check');
const strictMode = process.argv.includes('--strict');

const suiteResults = runTests();

const rows = ITEMS.map((item) => {
  const jExists = fileExists(javaPath(item));
  const pExists = fileExists(pyPath(item));
  const sExists = fileExists(jsPath(item));
  return {
    item,
    java: cellStatus(jExists, suiteResults.java),
    python: cellStatus(pExists, suiteResults.py),
    javascript: cellStatus(sExists, suiteResults.js),
    complete: jExists && pExists && sExists,
  };
});

const md = generateMarkdown(rows);
fs.writeFileSync(path.join(ROOT, 'COVERAGE.md'), md);
console.log('Wrote COVERAGE.md');

if (checkMode || strictMode) {
  let failed = false;
  if (strictMode) {
    const notGreen = rows.flatMap((r) => {
      const bad = [];
      if (r.java !== '✅') bad.push(`${r.item.id}/java`);
      if (r.python !== '✅') bad.push(`${r.item.id}/python`);
      if (r.javascript !== '✅') bad.push(`${r.item.id}/javascript`);
      return bad;
    });
    if (notGreen.length) {
      console.error(`Strict check failed (${notGreen.length} cells not green):`);
      notGreen.forEach((x) => console.error(`  - ${x}`));
      failed = true;
    }
  } else {
    for (const r of rows) {
      if (r.complete && (r.java !== '✅' || r.python !== '✅' || r.javascript !== '✅')) {
        console.error(`Complete row not all green: ${r.item.id}`);
        failed = true;
      }
    }
  }
  if (failed) process.exit(1);
  console.log(strictMode ? 'Strict matrix check passed (111/111).' : 'Phased matrix check passed.');
}

export { ITEMS, javaPath, pyPath, jsPath, pyTestPath, jsTestPath };
