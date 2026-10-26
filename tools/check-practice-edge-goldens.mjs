#!/usr/bin/env node
/**
 * Each practice problem must have ≥ MIN edge-themed cases in its shared golden JSON.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { edgeGoldenCaseCount } from './shared-golden-themes.mjs';
import { PRACTICE_PROBLEMS } from './practice-walkthrough-data.mjs';
import { practiceGoldenJsonForTopic } from './practice-golden-map.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TOOLS = path.join(__dirname);
export const MIN_PRACTICE_EDGE_GOLDENS = 3;

export function checkPracticeEdgeGoldens(options = {}) {
  const toolsDir = options.toolsDir ?? TOOLS;
  const minEdge = options.minEdge ?? MIN_PRACTICE_EDGE_GOLDENS;
  const problems = options.problems ?? PRACTICE_PROBLEMS;
  const errors = [];

  for (const row of problems) {
    const jsonName = practiceGoldenJsonForTopic(row.catalogTopic);
    if (!jsonName) {
      errors.push(`#${row.n} ${row.catalogTopic}: no golden JSON mapping`);
      continue;
    }
    const filePath = path.join(toolsDir, jsonName);
    if (!fs.existsSync(filePath)) {
      errors.push(`#${row.n} ${row.catalogTopic}: missing ${jsonName}`);
      continue;
    }
    const cases = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (!Array.isArray(cases)) {
      errors.push(`#${row.n} ${row.catalogTopic}: ${jsonName} must be a JSON array`);
      continue;
    }
    const edgeCount = edgeGoldenCaseCount(cases);
    if (edgeCount < minEdge) {
      errors.push(
        `#${row.n} ${row.catalogTopic}: ${jsonName} has ${edgeCount} edge-themed case(s), need ≥ ${minEdge}`,
      );
    }
  }

  return errors;
}

function main() {
  const errors = checkPracticeEdgeGoldens();
  if (errors.length) {
    console.error('Practice edge golden check failed:\n');
    for (const e of errors) console.error(`  - ${e}`);
    console.error(
      `\nAdd regression cases to tools/*-goldens.json (empty/single/duplicate/boundary/invalid). Min ${MIN_PRACTICE_EDGE_GOLDENS} edge-themed cases per practice.`,
    );
    process.exit(1);
  }
  console.log(
    `Practice edge golden check passed (${PRACTICE_PROBLEMS.length} problems, ≥ ${MIN_PRACTICE_EDGE_GOLDENS} edge cases each).`,
  );
}

main();
