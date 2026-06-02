#!/usr/bin/env node
/** Verify implementation files export expected API symbols (Java/Python/JS). */
import fs from 'node:fs';
import { ITEMS, javaPath, pyPath, jsPath } from './matrix.mjs';
import { API_MANIFEST } from './api-manifest.mjs';

function read(p) {
  return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : '';
}

function checkJava(file, item) {
  const text = read(file);
  const spec = API_MANIFEST[item.id];
  if (!spec) return ['no manifest'];
  const missing = [];
  for (const m of spec.java) {
    const re =
      spec.type === 'static'
        ? new RegExp(`public\\s+static[\\s\\S]*?\\b${m}\\s*\\(`)
        : new RegExp(`public\\s+[\\w<>,\\s\\[\\]]+\\s+${m}\\s*\\(`);
    if (!re.test(text)) missing.push(m);
  }
  return missing;
}

function checkPython(file, item) {
  const text = read(file);
  const spec = API_MANIFEST[item.id];
  if (!spec) return ['no manifest'];
  return spec.python.filter((m) => !new RegExp(`def\\s+${m}\\s*\\(`).test(text));
}

function checkJs(file, item) {
  const text = read(file);
  const spec = API_MANIFEST[item.id];
  if (!spec) return ['no manifest'];
  return spec.javascript.filter((m) => {
    return !(text.includes(`function ${m}`) || text.includes(`${m}(`));
  });
}

let failed = false;
for (const item of ITEMS) {
  const jMiss = checkJava(javaPath(item), item);
  const pMiss = checkPython(pyPath(item), item);
  const sMiss = checkJs(jsPath(item), item);
  if (jMiss.length || pMiss.length || sMiss.length) {
    console.error(`${item.id}:`);
    if (jMiss.length) console.error(`  java: ${jMiss.join(', ')}`);
    if (pMiss.length) console.error(`  python: ${pMiss.join(', ')}`);
    if (sMiss.length) console.error(`  js: ${sMiss.join(', ')}`);
    failed = true;
  }
}
if (failed) process.exit(1);
console.log(`Parity check passed for ${ITEMS.length} items.`);
