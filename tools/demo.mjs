#!/usr/bin/env node
/**
 * Run tests for one canonical item in one or all languages.
 * Usage: npm run demo -- dijkstra
 *        npm run demo -- dijkstra python
 */

import { execSync, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ITEMS, pyTestPath, jsTestPath } from './matrix.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const javaDir = path.join(ROOT, 'java');

const id = process.argv[2];
const lang = (process.argv[3] ?? 'all').toLowerCase();

if (!id) {
  console.error('Usage: npm run demo -- <id> [java|python|js|all]');
  process.exit(1);
}

const item = ITEMS.find((i) => i.id === id);
if (!item) {
  console.error(`Unknown id: ${id}`);
  process.exit(1);
}

const javaClass = item.java;

function pythonCmd() {
  for (const cmd of ['python', 'py', 'python3']) {
    const r = spawnSync(cmd, ['--version'], { shell: true });
    if (r.status === 0) return cmd;
  }
  return 'python';
}

function runJava() {
  const altTests = {
    BubbleSort: 'SortingTest',
    SelectionSort: 'SortingTest',
    InsertionSort: 'SortingTest',
    MergeSort: 'SortingTest',
    QuickSort: 'SortingTest',
    DynamicArray: 'LinearStructuresTest',
    SinglyLinkedList: 'LinearStructuresTest',
    DoublyLinkedList: 'LinearStructuresTest',
    Stack: 'LinearStructuresTest',
    Queue: 'LinearStructuresTest',
    Deque: 'LinearStructuresTest',
    BinaryHeap: 'HeapTest',
    PriorityQueue: 'HeapTest',
    BST: 'TreesTest',
    TreeTraversals: 'TreesTest',
    AVLTree: 'TreesTest',
    OrderStatisticTree: 'TreesTest',
    IntervalTree: 'TreesTest',
    Trie: 'TreesTest',
    BTree: 'TreesTest',
    HashTableChaining: 'HashingTest',
    HashTableOpenAddressing: 'HashingTest',
    BloomFilter: 'HashingTest',
    Graph: 'GraphsTest',
    BFS: 'GraphsTest',
    DFS: 'GraphsTest',
    TopologicalSort: 'GraphsTest',
    Dijkstra: 'GraphsTest',
    BellmanFord: 'GraphsTest',
    FloydWarshall: 'GraphsTest',
    KruskalMST: 'GraphsTest',
    PrimMST: 'GraphsTest',
    BoruvkaMST: 'GraphsTest',
  };
  const cls = altTests[javaClass] ?? `${javaClass}Test`;
  const fqcn = `com.dsa.examples.${item.topic}.${cls}`;
  console.log(`\n=== Java: ${item.id} (${cls}) ===`);
  const isWin = process.platform === 'win32';
  const mvnw = isWin ? path.join(javaDir, 'mvnw.cmd') : path.join(javaDir, 'mvnw');
  const cmd = fs.existsSync(mvnw)
    ? `"${mvnw}" -q -Dtest=${fqcn} test`
    : `mvn -q -Dtest=${fqcn} test`;
  execSync(cmd, { cwd: javaDir, stdio: 'inherit', shell: true });
}

function runPython() {
  const testFile = pyTestPath(item);
  console.log(`\n=== Python: ${item.id} ===`);
  execSync(`${pythonCmd()} -m pytest "${testFile}" -q`, { cwd: ROOT, stdio: 'inherit', shell: true });
}

function runJs() {
  const testFile = jsTestPath(item);
  console.log(`\n=== JavaScript: ${item.id} ===`);
  execSync(`npx jest --config javascript/jest.config.js "${testFile}"`, { cwd: ROOT, stdio: 'inherit', shell: true });
}

const runners = {
  java: runJava,
  python: runPython,
  js: runJs,
  javascript: runJs,
};

if (lang === 'all') {
  runners.java();
  runners.python();
  runners.js();
} else if (runners[lang]) {
  runners[lang]();
} else {
  console.error(`Unknown language: ${lang}`);
  process.exit(1);
}
