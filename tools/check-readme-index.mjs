#!/usr/bin/env node
/** Ensures README links every catalog topic and practice problem doc anchor. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { ITEMS } from './items.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const README = path.join(ROOT, 'README.md');

const PRACTICE_ANCHORS = [
  '1-two-sum-ii',
  '2-maximum-subarray',
  '3-valid-parentheses',
  '4-meeting-rooms-ii',
  '5-number-of-islands',
  '6-top-k-frequent-elements',
  '7-course-schedule',
  '8-longest-substring-without-repeating-characters',
  '9-coin-change',
  '10-lru-cache-design',
  '11-merge-intervals',
  '12-binary-tree-level-order-traversal',
  '13-word-search',
  '14-kth-largest-element',
  '15-minimum-spanning-tree-kruskal',
  '16-trapping-rain-water',
  '17-edit-distance',
  '18-serialize-and-deserialize-binary-tree',
  '19-network-delay-time',
  '20-sliding-window-maximum',
];

function main() {
  const text = fs.readFileSync(README, 'utf8');
  const errors = [];
  for (const item of ITEMS) {
    const rel = `docs/items/${item.topic}/${item.id}.md`;
    if (!text.includes(`(${rel})`) && !text.includes(`(${rel}#`)) {
      errors.push(`README missing link to ${rel}`);
    }
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) {
      errors.push(`missing item doc file ${rel}`);
    }
  }
  for (const anchor of PRACTICE_ANCHORS) {
    if (!text.includes(`docs/practice-problems.md#${anchor}`)) {
      errors.push(`README missing practice link #${anchor}`);
    }
  }
  if (errors.length) {
    console.error('README index check failed:\n');
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log(`README index check passed (${ITEMS.length} topics, ${PRACTICE_ANCHORS.length} practice links).`);
}

main();
