#!/usr/bin/env node
/**
 * Ensures each practice problem in docs/practice-problems.md links to a worked-examples
 * walkthrough (worked-examples.md#slug) or is listed in PRACTICE_WALKTHROUGH_EXEMPT.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { collectHeadingSlugs, githubHeadingSlug } from './github-heading-slug.mjs';
import {
  PRACTICE_PROBLEMS,
  PRACTICE_WALKTHROUGH_EXEMPT,
} from './practice-walkthrough-data.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PRACTICE_MD = path.join(ROOT, 'docs', 'practice-problems.md');
const WORKED_MD = path.join(ROOT, 'docs', 'worked-examples.md');

const EXEMPT_PREFIX = 'practice-walkthrough: exempt — ';

function sectionForProblem(text, n, docAnchor) {
  const re = new RegExp(`^##\\s+${n}\\.[^\\n]*$`, 'm');
  const start = text.search(re);
  if (start < 0) {
    return { error: `missing heading ## ${n}. … (expected anchor #${docAnchor})` };
  }
  const after = text.slice(start);
  const next = after.slice(1).search(/^##\s+\d+\./m);
  const body = next >= 0 ? after.slice(0, next + 1) : after;
  return { body };
}

export function checkPracticeWalkthroughCoverage(options = {}) {
  const practicePath = options.practicePath ?? PRACTICE_MD;
  const workedPath = options.workedPath ?? WORKED_MD;
  const problems = options.problems ?? PRACTICE_PROBLEMS;
  const text = fs.readFileSync(practicePath, 'utf8');
  const workedSlugs = collectHeadingSlugs(fs.readFileSync(workedPath, 'utf8'));
  const errors = [];

  for (const row of problems) {
    const { body, error } = sectionForProblem(text, row.n, row.docAnchor);
    if (error) {
      errors.push(`#${row.n} ${row.docAnchor}: ${error}`);
      continue;
    }
    const headingLine = body.match(/^##\s+(.+)$/m);
    if (!headingLine) {
      errors.push(`#${row.n} ${row.docAnchor}: could not parse section heading`);
      continue;
    }
    const headingSlug = githubHeadingSlug(headingLine[1]);
    if (headingSlug !== row.docAnchor) {
      errors.push(
        `#${row.n} ${row.docAnchor}: heading slug #${headingSlug} ≠ expected #${row.docAnchor}`,
      );
    }

    const exemptReason = PRACTICE_WALKTHROUGH_EXEMPT[row.docAnchor];
    if (exemptReason) {
      const marker = `${EXEMPT_PREFIX}${exemptReason}`;
      if (!body.includes(marker)) {
        errors.push(
          `#${row.n} ${row.docAnchor}: exempt in data but missing \`${marker}\` in practice doc`,
        );
      }
      continue;
    }

    const href = `worked-examples.md#${row.walkthroughSlug}`;
    if (!body.includes(href)) {
      errors.push(`#${row.n} ${row.docAnchor}: missing walkthrough link (${href})`);
    }
    if (!workedSlugs.has(row.walkthroughSlug)) {
      errors.push(
        `#${row.n} ${row.docAnchor}: walkthrough slug #${row.walkthroughSlug} not found in worked-examples.md`,
      );
    }
  }

  for (const docAnchor of Object.keys(PRACTICE_WALKTHROUGH_EXEMPT)) {
    if (!PRACTICE_PROBLEMS.some((p) => p.docAnchor === docAnchor)) {
      errors.push(`PRACTICE_WALKTHROUGH_EXEMPT key ${docAnchor} is not a practice problem`);
    }
  }

  return errors;
}

function main() {
  const errors = checkPracticeWalkthroughCoverage();
  if (errors.length) {
    console.error('Practice walkthrough coverage check failed:\n');
    for (const e of errors) console.error(`  - ${e}`);
    console.error('\nAdd **Walkthrough:** […](worked-examples.md#slug) under each problem, or exempt in practice-walkthrough-data.mjs.');
    process.exit(1);
  }
  console.log(`Practice walkthrough coverage check passed (${PRACTICE_PROBLEMS.length} problems).`);
}

main();
