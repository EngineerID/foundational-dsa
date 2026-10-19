#!/usr/bin/env node
/** Writes tools/goldens/<item-id>.json for every catalog item (idempotent). */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

import { ITEMS } from './items.mjs';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'tools', 'goldens');

const SORTERS = {
  'bubble-sort': () => require('../javascript/src/sorting/bubbleSort.js').sort,
  'selection-sort': () => require('../javascript/src/sorting/selectionSort.js').sort,
  'insertion-sort': () => require('../javascript/src/sorting/insertionSort.js').sort,
  'quick-sort': () => (a) => require('../javascript/src/sorting/quickSort.js').sort(a, false),
  heapsort: () => require('../javascript/src/sorting/heapSort.js').sort,
  'counting-sort': () => require('../javascript/src/sorting/countingSort.js').sort,
  'radix-sort': () => require('../javascript/src/sorting/radixSort.js').sort,
};

function write(id, payload) {
  fs.mkdirSync(OUT, { recursive: true });
  const file = path.join(OUT, `${id}.json`);
  fs.writeFileSync(file, `${JSON.stringify(payload, null, 2)}\n`);
}

for (const item of ITEMS) {
  const file = path.join(OUT, `${item.id}.json`);
  if (fs.existsSync(file)) continue;

  if (SORTERS[item.id]) {
    const sort = SORTERS[item.id]();
    const input = [3, 1, 4, 1, 5];
    const arr = [...input];
    sort(arr);
    write(item.id, { kind: 'inplace_sort', cases: [{ input, output: arr }] });
    continue;
  }
  if (item.id === 'merge-sort') {
    const { sort } = require('../javascript/src/sorting/mergeSort.js');
    const input = [3, 1, 4];
    write(item.id, { kind: 'copy_sort', cases: [{ input, output: sort([...input]) }] });
    continue;
  }
  if (item.id === 'linear-search') {
    write(item.id, {
      kind: 'linear_search',
      cases: [{ arr: [4, 2, 7], target: 7, expected: 2 }],
    });
    continue;
  }
  if (item.id === 'binary-search') {
    write(item.id, {
      kind: 'binary_search',
      cases: [{ arr: [1, 3, 5], key: 5, expected: 2 }],
    });
    continue;
  }
  if (item.id === 'kmp' || item.id === 'z-algorithm' || item.id === 'rabin-karp') {
    write(item.id, {
      kind: 'string_search',
      cases: [
        { text: 'ababcababa', pattern: 'aba', expected: 0 },
        { text: 'abc', pattern: '', expected: 0 },
      ],
    });
    continue;
  }
  if (item.id === 'lis') {
    write(item.id, { kind: 'lis', cases: [{ arr: [10, 9, 2, 5, 3, 7, 101, 18], expected: 4 }] });
    continue;
  }
  if (item.id === 'lcs') {
    write(item.id, { kind: 'lcs', cases: [{ a: 'abcde', b: 'ace', expected: 3 }] });
    continue;
  }
  if (item.id === 'knapsack') {
    write(item.id, {
      kind: 'knapsack',
      cases: [{ weights: [1, 2, 3], values: [6, 10, 12], capacity: 5, expected: 22 }],
    });
    continue;
  }
  if (item.id === 'edit-distance') {
    write(item.id, { kind: 'edit_distance', cases: [{ a: 'kitten', b: 'sitting', expected: 3 }] });
    continue;
  }
  if (item.id === 'coin-change') {
    write(item.id, { kind: 'coin_change', cases: [{ coins: [1, 2, 5], amount: 11, expected: 3 }] });
    continue;
  }
  if (item.id === 'quick-select') {
    write(item.id, { kind: 'quick_select', cases: [{ arr: [3, 1, 4, 1, 5], k: 3, expected: 3 }] });
    continue;
  }
  if (item.id === 'a-star') {
    write(item.id, { kind: 'a_star', cases: [{ n: 2, edges: [[0, 1, 1]], source: 0, goal: 1, expected: 1 }] });
    continue;
  }
  if (item.id === 'edmonds-karp') {
    write(item.id, {
      kind: 'max_flow',
      cases: [{ n: 2, edges: [[0, 1, 5]], source: 0, sink: 1, expected: 5 }],
    });
    continue;
  }
  if (item.id === 'manacher') {
    write(item.id, { kind: 'manacher', cases: [{ s: 'aa', expected: 2 }] });
    continue;
  }
  if (item.id === 'matrix-chain') {
    write(item.id, { kind: 'matrix_chain', cases: [{ dimensions: [1, 2, 3], expected: 6 }] });
    continue;
  }
  if (item.id === 'sliding-window-maximum') {
    write(item.id, {
      kind: 'sliding_window_max',
      cases: [{ nums: [1, 3, -1], k: 2, expected: [3, 3] }],
    });
    continue;
  }
  write(item.id, { kind: 'smoke', cases: [{ note: 'dedicated tests cover behavior' }] });
}

console.log(`Seeded goldens under tools/goldens/ (${ITEMS.length} items).`);
