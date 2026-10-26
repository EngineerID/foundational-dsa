#!/usr/bin/env node
/** Ensures trilingual graph ports and goldens agree on GRAPH_UNREACHABLE. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createRequire } from 'node:module';

import { GRAPH_UNREACHABLE } from './graph-sentinel.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), 'utf8');
}

function main() {
  const errors = [];
  const literal = String(GRAPH_UNREACHABLE);
  if (GRAPH_UNREACHABLE !== 536_870_911) {
    errors.push(`GRAPH_UNREACHABLE must be 536870911, got ${GRAPH_UNREACHABLE}`);
  }
  const { GRAPH_UNREACHABLE: jsSentinel } = require(
    path.join(ROOT, 'javascript/src/graphs/graphInf.js'),
  );
  if (jsSentinel !== GRAPH_UNREACHABLE) {
    errors.push(`javascript graphInf GRAPH_UNREACHABLE=${jsSentinel}, expected ${GRAPH_UNREACHABLE}`);
  }
  const javaDijkstra = read('java/src/main/java/com/dsa/examples/graphs/Dijkstra.java');
  if (!javaDijkstra.includes('Integer.MAX_VALUE / 4')) {
    errors.push('Java Dijkstra must use Integer.MAX_VALUE / 4');
  }
  const pyDijkstra = read('python/dsa/graphs/dijkstra.py');
  if (!pyDijkstra.includes('2147483647 // 4')) {
    errors.push('Python dijkstra must use 2147483647 // 4');
  }
  const sampleGolden = read('tools/dijkstra-goldens.json');
  if (!sampleGolden.includes(literal)) {
    errors.push('tools/dijkstra-goldens.json should include unreachable distance literal');
  }
  if (errors.length) {
    console.error('Graph sentinel check failed:\n');
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log(`Graph sentinel check passed (GRAPH_UNREACHABLE = ${GRAPH_UNREACHABLE}).`);
}

main();
