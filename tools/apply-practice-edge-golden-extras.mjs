#!/usr/bin/env node
/** Idempotent append of practice edge regression rows (run after editing EXTRAS). */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const TOOLS = path.dirname(fileURLToPath(import.meta.url));

/** @type {Record<string, object[]>} */
const EXTRAS = {
  'trie-goldens.json': [
    {
      inserts: ['dup', 'dup'],
      search: [{ word: 'dup', expected: true }],
      startsWith: [{ prefix: 'du', expected: true }],
    },
  ],
  'dfs-goldens.json': [
    {
      n: 2,
      directed: false,
      weighted: false,
      edges: [[0, 1]],
      source: 0,
      discovery: [0, 1],
      finish: [3, 2],
    },
  ],
  'topological-sort-goldens.json': [
    {
      n: 2,
      directed: true,
      weighted: false,
      edges: [[0, 1]],
      expectedOrder: [0, 1],
    },
  ],
  'deque-goldens.json': [
    {
      addLast: [7, 7],
      addFirst: [],
      removeFirst: 7,
      removeLast: 7,
      empty: true,
    },
  ],
  'segment-tree-goldens.json': [
    {
      initial: [2, 2, 2],
      rangeSum: [{ left: 0, right: 2, sum: 6 }],
      update: { index: 1, value: 3 },
      rangeSumAfter: [{ left: 0, right: 2, sum: 7 }],
    },
    {
      initial: [1, 1],
      rangeSum: [{ left: 0, right: 1, sum: 2 }],
      update: { index: 0, value: 5 },
      rangeSumAfter: [{ left: 0, right: 1, sum: 6 }],
    },
  ],
  'fenwick-tree-goldens.json': [
    {
      n: 3,
      adds: [],
      checks: [
        { prefixAt: 2, expected: 0 },
        { rangeLeft: 0, rangeRight: 2, expected: 0 },
      ],
    },
  ],
  'bipartite-check-goldens.json': [
    {
      n: 2,
      directed: false,
      weighted: false,
      edges: [[0, 1]],
      expected: true,
    },
  ],
  'tarjan-scc-goldens.json': [
    {
      n: 2,
      directed: true,
      weighted: false,
      edges: [[0, 1]],
      componentCount: 2,
      componentSizes: [1, 1],
    },
  ],
  'kosaraju-goldens.json': [
    {
      n: 2,
      directed: true,
      weighted: false,
      edges: [[0, 1]],
      componentCount: 2,
      componentSizes: [1, 1],
    },
  ],
  'matrix-chain-goldens.json': [
    {
      dimensions: [4, 4, 4],
      expected: 64,
    },
  ],
  'dynamic-array-goldens.json': [
    {
      append: [2, 2, 2],
      get: [
        { index: 0, value: 2 },
        { index: 2, value: 2 },
      ],
      size: 3,
    },
  ],
  'manacher-goldens.json': [{ s: 'aaa', expected: 3 }],
  'aho-corasick-goldens.json': [
    {
      text: 'aa',
      patterns: ['a', 'a'],
      hits: [0, 1],
    },
  ],
  'avl-tree-goldens.json': [
    {
      inserts: [
        [2, 'b'],
        [2, 'c'],
      ],
      inOrderKeys: [2],
      searchKey: 2,
      searchValue: 'c',
    },
  ],
  'singly-linked-list-goldens.json': [
    {
      addLast: [1, 1],
      getIndex: 1,
      getValue: 1,
      removeIndex: 0,
      removeValue: 1,
      sizeAfter: 1,
    },
  ],
  'doubly-linked-list-goldens.json': [
    {
      addLast: [4, 4],
      addFirst: [],
      getIndex: 1,
      getValue: 4,
      removeIndex: 0,
      removeValue: 4,
      sizeAfter: 1,
    },
  ],
  'tree-traversals-goldens.json': [
    {
      inserts: [
        [2, 'b'],
        [2, 'c'],
      ],
      inOrder: [2],
      preOrder: [2],
      postOrder: [2],
    },
  ],
  'suffix-array-goldens.json': [{ s: 'aaa', sa: [2, 1, 0] }],
  'order-statistic-tree-goldens.json': [
    {
      inserts: [
        [2, '2'],
        [2, 'x'],
      ],
      inOrderKeys: [2],
      selectK: 1,
      selectKey: 2,
      rankKey: 2,
      rank5: 0,
    },
  ],
  'hungarian-goldens.json': [
    {
      cost: [
        [7, 7],
        [7, 7],
      ],
      minCost: 14,
    },
  ],
  'lca-binary-lifting-goldens.json': [
    {
      parent: [0, 0, 1],
      queries: [
        [2, 2, 2],
        [1, 2, 1],
      ],
    },
  ],
  'sparse-table-goldens.json': [
    {
      initial: [5, 5, 5],
      queries: [
        [0, 2, 5],
        [1, 1, 5],
      ],
    },
    {
      initial: [4, 4],
      queries: [[0, 1, 4]],
    },
  ],
  'tsp-bitmask-goldens.json': [
    {
      dist: [
        [0, 10],
        [10, 0],
      ],
      expected: 20,
    },
  ],
};

function caseKey(c) {
  return JSON.stringify(c);
}

function merge(existing, extras) {
  const seen = new Set(existing.map(caseKey));
  const out = [...existing];
  for (const c of extras) {
    const k = caseKey(c);
    if (!seen.has(k)) {
      out.push(c);
      seen.add(k);
    }
  }
  return out;
}

let changed = 0;
for (const [file, extras] of Object.entries(EXTRAS)) {
  const p = path.join(TOOLS, file);
  const before = JSON.parse(fs.readFileSync(p, 'utf8'));
  const after = merge(before, extras);
  if (after.length !== before.length) {
    fs.writeFileSync(p, `${JSON.stringify(after, null, 2)}\n`);
    changed += 1;
    console.log(`Updated ${file} (+${after.length - before.length})`);
  }
}
console.log(changed ? `Done (${changed} files).` : 'No changes (already applied).');
