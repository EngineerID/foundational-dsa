#!/usr/bin/env node
/** Generate docs/items/<topic>/<id>.md for all 37 canonical items. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ITEMS, javaPath, pyPath, jsPath, pyTestPath, jsTestPath } from './matrix.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function rel(from, to) {
  return path.relative(from, to).split(path.sep).join('/');
}

for (const item of ITEMS) {
  const dir = path.join(ROOT, 'docs', 'items', item.topic);
  fs.mkdirSync(dir, { recursive: true });
  const mdPath = path.join(dir, `${item.id}.md`);
  const relBase = path.dirname(mdPath);

  const javaMain = rel(relBase, javaPath(item));
  const pyImpl = rel(relBase, pyPath(item));
  const jsImpl = rel(relBase, jsPath(item));
  const pyTest = rel(relBase, pyTestPath(item));
  const jsTest = rel(relBase, jsTestPath(item));

  const title = item.id.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const content = `# ${title}

Topic: **${item.topic}** / \`${item.id}\`

## Implementations

| Language | Source |
|----------|--------|
| Java | [\`${item.java}\`](${javaMain}) |
| Python | [\`${item.py}\`](${pyImpl}) |
| JavaScript | [\`${item.js}\`](${jsImpl}) |

## Tests

| Language | Test |
|----------|------|
| Python | [\`test_${item.py}\`](${pyTest}) |
| JavaScript | [\`${item.js}.test.js\`](${jsTest}) |

Java tests run via Maven in \`java/src/test/java/com/dsa/examples/${item.topic}/\`.
`;

  fs.writeFileSync(mdPath, content);
  console.log('Wrote', mdPath);
}
