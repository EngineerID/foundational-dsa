#!/usr/bin/env node
/** Insert **Complexity:** from DOC_SPECS into practice walkthrough sections in worked-examples.md. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { DOC_SPECS } from './doc-spec.mjs';
import { githubHeadingSlug } from './github-heading-slug.mjs';
import { PRACTICE_PROBLEMS } from './practice-walkthrough-data.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const WORKED_MD = path.join(ROOT, 'docs', 'worked-examples.md');

const COMPLEXITY_LINE = /^\*\*Complexity:\*\*[^\n]*\n/m;

function insertComplexity(text, slug, catalogTopic) {
  const spec = DOC_SPECS[catalogTopic];
  if (!spec?.complexity) return { text, changed: false };

  const headingRe = /^##\s+(.+)$/gm;
  let match;
  while ((match = headingRe.exec(text)) !== null) {
    const title = match[1];
    if (githubHeadingSlug(title) !== slug) continue;
    const headingStart = match.index;
    const afterHeading = text.slice(headingStart);
    const nextHeading = afterHeading.slice(1).search(/^##\s+/m);
    const section =
      nextHeading >= 0 ? afterHeading.slice(0, nextHeading + 1) : afterHeading;
    if (COMPLEXITY_LINE.test(section)) return { text, changed: false };

    const lineEnd = afterHeading.indexOf('\n');
    const insertAt = headingStart + lineEnd + 1;
    const block = `\n**Complexity:** ${spec.complexity}\n`;
    return { text: text.slice(0, insertAt) + block + text.slice(insertAt), changed: true };
  }
  return { text, changed: false };
}

function main() {
  let text = fs.readFileSync(WORKED_MD, 'utf8');
  let changes = 0;
  for (const row of PRACTICE_PROBLEMS) {
    const { text: next, changed } = insertComplexity(text, row.walkthroughSlug, row.catalogTopic);
    text = next;
    if (changed) changes += 1;
  }
  if (changes) fs.writeFileSync(WORKED_MD, text);
  console.log(`apply-practice-walkthrough-complexity: ${changes} section(s) updated.`);
}

main();
