#!/usr/bin/env node
/**
 * Lightweight timing harness for local comparisons (not CI gates).
 */
import { createRequire } from 'node:module';
import { performance } from 'node:perf_hooks';

const require = createRequire(import.meta.url);
const { sort: bubbleSort } = require('../javascript/src/sorting/bubbleSort.js');
const { sort: mergeSort } = require('../javascript/src/sorting/mergeSort.js');
const { indexOf: linearSearch } = require('../javascript/src/searching/linearSearch.js');
const { search: binarySearch } = require('../javascript/src/searching/binarySearch.js');
const { Graph } = require('../javascript/src/graphs/graph.js');
const { shortestPaths: dijkstra } = require('../javascript/src/graphs/dijkstra.js');
const { allPairsShortestPaths: floyd } = require('../javascript/src/graphs/floydWarshall.js');
const { length: lisLength } = require('../javascript/src/dp/lis.js');

function bench(name, fn, iterations = 40) {
  const warmup = () => fn();
  warmup();
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    fn();
  }
  const ms = performance.now() - start;
  return { name, msPerIter: ms / iterations };
}

const sortInput = Array.from({ length: 500 }, (_, i) => (i * 17 + 3) % 97);
const searchArr = Array.from({ length: 5000 }, (_, i) => i * 2);
const results = [
  bench('bubble-sort n=500', () => {
    const arr = [...sortInput];
    bubbleSort(arr);
  }),
  bench('merge-sort n=500', () => mergeSort([...sortInput])),
  bench('linear-search n=5000', () => linearSearch(searchArr, 9998)),
  bench('binary-search n=5000', () => binarySearch(searchArr, 9998)),
  bench('dijkstra V=80 dense', () => {
    const g = new Graph(80, false, true);
    for (let u = 0; u < 80; u += 1) {
      for (let v = u + 1; v < 80; v += 1) {
        g.addEdge(u, v, (u + v) % 7 + 1);
      }
    }
    dijkstra(g, 0);
  }, 15),
  bench('floyd-warshall V=80', () => {
    const g = new Graph(80, false, true);
    for (let u = 0; u < 80; u += 1) {
      for (let v = u + 1; v < 80; v += 1) {
        g.addEdge(u, v, (u + v) % 7 + 1);
      }
    }
    floyd(g);
  }, 8),
  bench('lis n=2000', () => lisLength(Array.from({ length: 2000 }, (_, i) => (i * 73) % 1000))),
];

for (const row of results) {
  console.log(`${row.name}: ${row.msPerIter.toFixed(3)} ms/iter`);
}

export function runMicroBench() {
  return results;
}
