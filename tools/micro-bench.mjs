#!/usr/bin/env node
/**
 * Lightweight timing harness for local comparisons (not CI gates).
 */
import { createRequire } from 'node:module';
import { performance } from 'node:perf_hooks';

const require = createRequire(import.meta.url);
const { sort: bubbleSort } = require('../javascript/src/sorting/bubbleSort.js');
const { sort: mergeSort } = require('../javascript/src/sorting/mergeSort.js');

function bench(name, fn, iterations = 50) {
  const input = Array.from({ length: 200 }, (_, i) => (i * 17 + 3) % 97);
  const warmup = () => fn([...input]);
  warmup();
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    fn([...input]);
  }
  const ms = performance.now() - start;
  return { name, msPerIter: ms / iterations };
}

const results = [
  bench('bubble-sort n=200', (arr) => {
    bubbleSort(arr);
    return arr;
  }),
  bench('merge-sort n=200', (arr) => mergeSort([...arr])),
];

for (const row of results) {
  console.log(`${row.name}: ${row.msPerIter.toFixed(3)} ms/iter`);
}

export function runMicroBench() {
  return results;
}
