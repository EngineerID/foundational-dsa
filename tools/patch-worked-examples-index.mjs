#!/usr/bin/env node
/** Append per-topic worked-example summaries to docs/worked-examples.md */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { DOC_SPECS } from './doc-spec.mjs';
import { WORKED_EXAMPLES } from './item-doc-parity-data.mjs';
import { ITEMS } from './items.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const mdPath = path.join(ROOT, 'docs', 'worked-examples.md');

let text = fs.readFileSync(mdPath, 'utf8');
const tryIdx = text.indexOf('## Try it locally');
let head = tryIdx >= 0 ? text.slice(0, tryIdx).trimEnd() : text.trimEnd();
if (head.includes('## Topic index')) {
  head = head.split('## Topic index')[0].trimEnd();
}

const marker = '## Topic index';
const blocks = [
  marker,
  '',
  'One-line walkthroughs for every catalog topic. Step tables above cover interview-heavy patterns (search, graphs, DP, caches, strings).',
  '',
];

for (const item of ITEMS) {
  const spec = DOC_SPECS[item.id];
  const custom = WORKED_EXAMPLES[item.id];
  if (custom?.detailed) {
    const anchor = custom.anchor ?? item.id;
    blocks.push(
      `### ${item.id}`,
      '',
      `See the [detailed walkthrough](#${anchor}) above.`,
      '',
      `\`npm run demo -- ${item.id}\``,
      '',
    );
    continue;
  }
  const body = custom?.body ?? spec?.purpose ?? '';
  blocks.push(`### ${item.id}`, '', body, '', `\`npm run demo -- ${item.id}\``, '');
}

blocks.push('## Try it locally', '');
blocks.push('Run the demo runner (all three languages by default):', '');
blocks.push('```bash');
blocks.push('npm run demo -- binary-search');
blocks.push('npm run demo -- merge-sort');
blocks.push('npm run demo -- kmp');
blocks.push('npm run demo -- dijkstra');
blocks.push('npm run demo -- knapsack');
blocks.push('```', '');
blocks.push("Optional language filter: `npm run demo -- kmp python`.", '');
blocks.push(
  'See also [`docs/running-ci-locally.md`](running-ci-locally.md) and [`AGENTS.md`](../AGENTS.md) for full verification commands.',
  '',
);

const newText = `${head}\n\n${blocks.join('\n')}`;
fs.writeFileSync(mdPath, newText);
console.log('Patched', mdPath);
