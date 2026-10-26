#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { DOC_SPECS } from './doc-spec.mjs';
import { githubHeadingSlug } from './github-heading-slug.mjs';
import { PRACTICE_PROBLEMS } from './practice-walkthrough-data.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const WORKED_MD = path.join(ROOT, 'docs', 'worked-examples.md');

/** Walkthrough headings reused by multiple practice catalog topics. */
const SLUG_COMPLEXITY_TOPICS = {
  'valid-parentheses-stack': ['valid-parentheses', 'stack'],
};

function sectionForSlug(text, slug) {
  const headingRe = /^##\s+(.+)$/gm;
  let match;
  while ((match = headingRe.exec(text)) !== null) {
    if (githubHeadingSlug(match[1]) !== slug) continue;
    const after = text.slice(match.index);
    const next = after.slice(1).search(/^##\s+/m);
    return next >= 0 ? after.slice(0, next + 1) : after;
  }
  return null;
}

export function checkPracticeWalkthroughComplexity(options = {}) {
  const text = fs.readFileSync(options.workedPath ?? WORKED_MD, 'utf8');
  const problems = options.problems ?? PRACTICE_PROBLEMS;
  const errors = [];

  for (const row of problems) {
    const spec = DOC_SPECS[row.catalogTopic];
    if (!spec?.complexity) continue;
    const section = sectionForSlug(text, row.walkthroughSlug);
    if (!section) {
      errors.push(`#${row.n} ${row.walkthroughSlug}: walkthrough section not found`);
      continue;
    }
    if (!/^\*\*Complexity:\*\*/m.test(section)) {
      errors.push(`#${row.n} ${row.walkthroughSlug}: missing **Complexity:**`);
      continue;
    }
    const topics = SLUG_COMPLEXITY_TOPICS[row.walkthroughSlug] ?? [row.catalogTopic];
    const complexities = topics.map((t) => DOC_SPECS[t]?.complexity).filter(Boolean);
    if (!complexities.some((c) => section.includes(c))) {
      errors.push(
        `#${row.n} ${row.walkthroughSlug}: **Complexity:** must match doc-spec for ${topics.join(' or ')}`,
      );
    }
  }

  return errors;
}

function main() {
  const errors = checkPracticeWalkthroughComplexity();
  if (errors.length) {
    console.error('Practice walkthrough complexity check failed:\n');
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log(
    `Practice walkthrough complexity check passed (${PRACTICE_PROBLEMS.length} walkthroughs).`,
  );
}

main();
