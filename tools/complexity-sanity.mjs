#!/usr/bin/env node
/**
 * Fast complexity sanity checks for CI (generous thresholds, single-threaded).
 */
import { createRequire } from 'node:module';
import path from 'node:path';
import { performance } from 'node:perf_hooks';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { sort: bubbleSort } = require('../javascript/src/sorting/bubbleSort.js');
const { sort: mergeSort } = require('../javascript/src/sorting/mergeSort.js');
const { search: binarySearch } = require('../javascript/src/searching/binarySearch.js');
const { shortestPaths: dijkstra } = require('../javascript/src/graphs/dijkstra.js');
const { Graph } = require('../javascript/src/graphs/graph.js');

function totalMs(fn, iterations = 30) {
  fn();
  const start = performance.now();
  for (let i = 0; i < iterations; i += 1) {
    fn();
  }
  return performance.now() - start;
}

export function runComplexitySanity() {
  const errors = [];
  const n = 1800;
  const sortInput = Array.from({ length: n }, (_, i) => (i * 17 + 3) % 997);
  const bubbleMs = totalMs(() => {
    const arr = [...sortInput];
    bubbleSort(arr);
  }, 8);
  const mergeMs = totalMs(() => mergeSort([...sortInput]), 8);
  if (bubbleMs > 4000) {
    errors.push(`bubble-sort n=${n} took ${bubbleMs.toFixed(1)}ms (limit 4000ms)`);
  }
  if (mergeMs > 1200) {
    errors.push(`merge-sort n=${n} took ${mergeMs.toFixed(1)}ms (limit 1200ms)`);
  }
  if (mergeMs >= bubbleMs * 0.6) {
    errors.push(
      `expected merge-sort faster than bubble-sort on n=${n} (${mergeMs.toFixed(1)} vs ${bubbleMs.toFixed(1)} ms total)`,
    );
  }

  const searchArr = Array.from({ length: 20_000 }, (_, i) => i * 2);
  const binMs = totalMs(() => binarySearch(searchArr, 39_998), 50);
  if (binMs > 50) {
    errors.push(`binary-search n=20000 took ${binMs.toFixed(1)}ms (limit 50ms)`);
  }

  const dijkstraMs = totalMs(() => {
    const g = new Graph(60, false, true);
    for (let u = 0; u < 60; u += 1) {
      for (let v = u + 1; v < 60; v += 1) {
        g.addEdge(u, v, (u + v) % 7 + 1);
      }
    }
    dijkstra(g, 0);
  }, 20);
  if (dijkstraMs > 400) {
    errors.push(`dijkstra V=60 dense took ${dijkstraMs.toFixed(1)}ms (limit 200ms)`);
  }

  return errors;
}

function main() {
  const errors = runComplexitySanity();
  if (errors.length) {
    console.error('Complexity sanity check failed:\n');
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log('Complexity sanity check passed.');
}

const isMain =
  process.argv[1] &&
  path.resolve(fileURLToPath(import.meta.url)) === path.resolve(process.argv[1]);
if (isMain) {
  main();
}
