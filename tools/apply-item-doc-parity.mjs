#!/usr/bin/env node
/**
 * Rewrite docs/items/<topic>/<id>.md with teaching-repo parity sections.
 * Usage: node tools/apply-item-doc-parity.mjs [--topic sorting] [--id merge-sort]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { DOC_SPECS } from './doc-spec.mjs';
import {
  EDGE_CATALOG_ITEMS,
  EDGE_NOTES,
  GOLDEN_JAVA_TEST,
  GOLDEN_JS_TEST,
  GOLDEN_PY_TEST,
  GOLDENS,
  JAVA_PACKAGE_TEST,
  PROPERTY_LINKS,
  WORKED_EXAMPLES,
} from './item-doc-parity-data.mjs';
import { ITEMS, javaPath, jsPath, jsTestPath, pyPath, pyTestPath } from './matrix.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function rel(from, to) {
  return path.relative(from, to).split(path.sep).join('/');
}

function titleCase(id) {
  return id
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function javaTestPath(item) {
  const dedicated = path.join(
    ROOT,
    'java',
    'src',
    'test',
    'java',
    'com',
    'dsa',
    'examples',
    item.topic,
    `${item.java}Test.java`,
  );
  if (fs.existsSync(dedicated)) {
    return dedicated;
  }
  const pkg = JAVA_PACKAGE_TEST[item.topic];
  if (pkg) {
    return path.join(ROOT, 'java', 'src', 'test', 'java', 'com', 'dsa', 'examples', pkg);
  }
  return null;
}

function propertyLinksFor(item) {
  const links = item.id === 'kmp' ? PROPERTY_LINKS.kmp : PROPERTY_LINKS[item.topic];
  if (!links) return null;
  const parts = [];
  const seen = new Set();
  const add = (part) => {
    if (seen.has(part)) return;
    seen.add(part);
    parts.push(part);
  };
  const javaBase = '../../../java/src/test/java/com/dsa/examples';
  const pyBase = '../../../python/tests';
  const jsBase = '../../../javascript/test';
  for (const j of links.java ?? []) {
    add(`Java [\`${path.basename(j, '.java')}\`](${javaBase}/${j})`);
  }
  for (const p of links.py ?? []) {
    add(`Python [\`${path.basename(p, '.py')}\`](${pyBase}/${p})`);
  }
  for (const j of links.js ?? []) {
    add(`JavaScript [\`${j}\`](${jsBase}/${j})`);
  }
  const searchSortPy = `${pyBase}/property/test_search_sort_hypothesis.py`;
  const searchSortJs = `${jsBase}/property/searchSort.property.test.js`;
  const alsoSearchSort = new Set([
    'bubble-sort',
    'merge-sort',
    'counting-sort',
    'linear-search',
    'stack',
    'binary-search',
    'quick-select',
  ]);
  if (alsoSearchSort.has(item.id) && item.id !== 'kmp') {
    add(`Python [\`test_search_sort_hypothesis\`](${searchSortPy})`);
    add(`JavaScript [\`searchSort.property.test.js\`](${searchSortJs})`);
  }
  return parts.length ? `${parts.join('; ')}.` : null;
}

function renderItem(item) {
  const spec = DOC_SPECS[item.id];
  if (!spec) throw new Error(`missing DOC_SPECS for ${item.id}`);
  const mdPath = path.join(ROOT, 'docs', 'items', item.topic, `${item.id}.md`);
  const relBase = path.dirname(mdPath);
  const javaMain = rel(relBase, javaPath(item));
  const pyImpl = rel(relBase, pyPath(item));
  const jsImpl = rel(relBase, jsPath(item));
  const pyTest = rel(relBase, pyTestPath(item));
  const jsTest = rel(relBase, jsTestPath(item));
  const jTest = javaTestPath(item);
  const javaTestRel = jTest ? rel(relBase, jTest) : null;

  const lines = [];
  lines.push(`# ${titleCase(item.id)}`, '');
  lines.push(`Topic: **${item.topic}** / \`${item.id}\``, '');
  lines.push(`${spec.purpose}`, '');
  lines.push(`**Complexity:** ${spec.complexity}`, '');
  if (EDGE_NOTES[item.id]) {
    lines.push(EDGE_NOTES[item.id], '');
  }
  if (EDGE_CATALOG_ITEMS.has(item.id)) {
    lines.push(
      '**Catalog edge themes:** covered in shared catalog tests (`EdgeCaseThemesTest`, `test_edge_case_themes.py`, `edgeCaseThemes.test.js`) for empty / single / duplicate / large / invalid cases.',
      '',
    );
  }
  const worked = WORKED_EXAMPLES[item.id];
  if (worked?.detailed) {
    lines.push(
      `**Walkthrough:** [Worked examples — ${titleCase(item.id)}](../../worked-examples.md#${worked.anchor}).`,
      '',
    );
  } else if (worked) {
    lines.push(`**Worked example:** ${worked.body}`, '');
    lines.push(`**More:** [Topic index](../../worked-examples.md#${item.id}) · \`npm run demo -- ${item.id}\``, '');
  } else {
    lines.push(
      `**Worked example:** [Topic index](../../worked-examples.md#${item.id}) (summary) · run \`npm run demo -- ${item.id}\` in all three languages.`,
      '',
    );
  }
  if (GOLDENS[item.id]) {
    lines.push(
      `**Shared regression vectors:** [\`tools/${GOLDENS[item.id]}\`](../../../tools/${GOLDENS[item.id]}).`,
      '',
    );
  }
  lines.push('## Implementations', '');
  lines.push('| Language | Source |');
  lines.push('|----------|--------|');
  lines.push(`| Java | [\`${item.java}\`](${javaMain}) |`);
  lines.push(`| Python | [\`${item.py}\`](${pyImpl}) |`);
  lines.push(`| JavaScript | [\`${item.js}\`](${jsImpl}) |`);
  lines.push('', '## Tests', '');
  lines.push('| Language | Test |');
  lines.push('|----------|------|');
  if (fs.existsSync(pyTestPath(item))) {
    lines.push(`| Python | [\`test_${item.py}\`](${pyTest}) |`);
  }
  if (fs.existsSync(jsTestPath(item))) {
    lines.push(`| JavaScript | [\`${item.js}.test.js\`](${jsTest}) |`);
  }
  if (javaTestRel) {
    lines.push(`| Java | [\`${path.basename(jTest)}\`](${javaTestRel}) |`);
  }
  if (GOLDENS[item.id]) {
    const gTopic = item.topic;
    lines.push(
      `| Python | [\`${GOLDEN_PY_TEST[item.id]}\`](../../../python/tests/${gTopic}/${GOLDEN_PY_TEST[item.id]}) |`,
    );
    lines.push(
      `| JavaScript | [\`${GOLDEN_JS_TEST[item.id]}\`](../../../javascript/test/${gTopic}/${GOLDEN_JS_TEST[item.id]}) |`,
    );
    lines.push(
      `| Java | [\`${GOLDEN_JAVA_TEST[item.id].replace('.java', '')}\`](../../../java/src/test/java/com/dsa/examples/${gTopic}/${GOLDEN_JAVA_TEST[item.id]}) |`,
    );
  }
  const prop = propertyLinksFor(item);
  if (prop) {
    lines.push('', `**Property-style checks:** ${prop}`, '');
  }
  lines.push('', `Java unit tests also run via Maven under \`java/src/test/java/com/dsa/examples/${item.topic}/\`.`, '');
  return { mdPath, content: lines.join('\n') };
}

const args = process.argv.slice(2);
let topicFilter = null;
let idFilter = null;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--topic') topicFilter = args[++i];
  if (args[i] === '--id') idFilter = args[++i];
}

let count = 0;
for (const item of ITEMS) {
  if (topicFilter && item.topic !== topicFilter) continue;
  if (idFilter && item.id !== idFilter) continue;
  const { mdPath, content } = renderItem(item);
  fs.mkdirSync(path.dirname(mdPath), { recursive: true });
  fs.writeFileSync(mdPath, content);
  console.log('Wrote', mdPath);
  count++;
}
console.log(`Updated ${count} item doc(s).`);
