#!/usr/bin/env node
/** Ensures shared golden JSON fixtures have trilingual test entrypoints. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  GOLDENS,
  GOLDEN_JAVA_TEST,
  GOLDEN_JS_TEST,
  GOLDEN_PY_TEST,
} from './item-doc-parity-data.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function main() {
  const errors = [];
  for (const itemId of Object.keys(GOLDENS)) {
    const jsonPath = path.join(ROOT, 'tools', GOLDENS[itemId]);
    if (!fs.existsSync(jsonPath)) {
      errors.push(`missing tools/${GOLDENS[itemId]}`);
    }
    const pyPath = path.join(
      ROOT,
      'python',
      'tests',
      itemId === 'kmp' ? 'strings' : 'searching',
      GOLDEN_PY_TEST[itemId],
    );
    const jsPath = path.join(
      ROOT,
      'javascript',
      'test',
      itemId === 'kmp' ? 'strings' : 'searching',
      GOLDEN_JS_TEST[itemId],
    );
    const javaPath = path.join(
      ROOT,
      'java',
      'src',
      'test',
      'java',
      'com',
      'dsa',
      'examples',
      itemId === 'kmp' ? 'strings' : 'searching',
      GOLDEN_JAVA_TEST[itemId],
    );
    if (!fs.existsSync(pyPath)) errors.push(`missing ${path.relative(ROOT, pyPath)}`);
    if (!fs.existsSync(jsPath)) errors.push(`missing ${path.relative(ROOT, jsPath)}`);
    if (!fs.existsSync(javaPath)) errors.push(`missing ${path.relative(ROOT, javaPath)}`);
  }
  const boundaryJson = path.join(ROOT, 'tools', 'binary-search-boundary-goldens.json');
  if (!fs.existsSync(boundaryJson)) errors.push('missing tools/binary-search-boundary-goldens.json');
  for (const rel of [
    'python/tests/searching/test_binary_search_boundary_goldens.py',
    'javascript/test/searching/binarySearchBoundaryGoldens.test.js',
    'java/src/test/java/com/dsa/examples/searching/BinarySearchBoundaryGoldensTest.java',
  ]) {
    if (!fs.existsSync(path.join(ROOT, rel))) errors.push(`missing ${rel}`);
  }
  if (errors.length) {
    console.error('Golden parity check failed:\n');
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log('Golden fixture parity check passed.');
}

main();
