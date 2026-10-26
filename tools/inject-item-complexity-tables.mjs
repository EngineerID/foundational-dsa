#!/usr/bin/env node
/**
 * Insert Primary complexity tables under ## Complexity on all item docs.
 * Idempotent: skips pages that already contain "| Primary |".
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { complexityTableMarkdown } from './complexity-table.mjs';
import { DOC_SPECS } from './doc-spec.mjs';
import { ITEMS } from './items.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function inject(mdPath, complexity) {
  let text = fs.readFileSync(mdPath, 'utf8');
  if (text.includes('| Primary |')) return false;
  const heading = '## Complexity';
  const idx = text.indexOf(heading);
  if (idx < 0) throw new Error(`missing ${heading} in ${mdPath}`);
  const afterHeading = idx + heading.length;
  const rest = text.slice(afterHeading);
  const nextSec = rest.search(/\n## /);
  const sectionBody = nextSec < 0 ? rest : rest.slice(0, nextSec);
  const afterSection = nextSec < 0 ? '' : rest.slice(nextSec);
  const prose = sectionBody.trimEnd();
  const table = complexityTableMarkdown(complexity);
  const newSection = `${prose}${table}`;
  text = text.slice(0, afterHeading) + `\n\n${newSection.trim()}\n` + afterSection;
  fs.writeFileSync(mdPath, text);
  return true;
}

function main() {
  let updated = 0;
  for (const item of ITEMS) {
    const spec = DOC_SPECS[item.id];
    const mdPath = path.join(ROOT, 'docs', 'items', item.topic, `${item.id}.md`);
    if (inject(mdPath, spec.complexity)) updated += 1;
  }
  console.log(`inject-item-complexity-tables: updated ${updated} item doc(s).`);
}

main();
