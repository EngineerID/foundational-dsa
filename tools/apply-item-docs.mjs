#!/usr/bin/env node
/** Apply module-level docs from doc-spec.mjs to all canonical implementation files. */
import fs from 'node:fs';
import { ITEMS, javaPath, pyPath, jsPath } from './matrix.mjs';
import { DOC_SPECS, formatJavaDoc, formatPyDoc, formatJsDoc } from './doc-spec.mjs';

const NL = '(?:\\r?\\n)';

function applyPython(filePath, spec) {
  let text = fs.readFileSync(filePath, 'utf8');
  const re = new RegExp(`^(# [^\\r\\n]+${NL}+)"""[\\s\\S]*?"""${NL}`);
  if (!re.test(text)) return false;
  const newDoc = `${formatPyDoc(spec)}${text.includes('\r\n') ? '\r\n' : '\n'}`;
  text = text.replace(re, `$1${newDoc}`);
  fs.writeFileSync(filePath, text);
  return true;
}

function applyJs(filePath, spec) {
  let text = fs.readFileSync(filePath, 'utf8');
  const re = new RegExp(`^(\\/\\/ [^\\r\\n]+${NL}${NL})\\/\\*[\\s\\S]*?\\*\\/${NL}`);
  if (!re.test(text)) return false;
  const newDoc = `${formatJsDoc(spec)}${text.includes('\r\n') ? '\r\n' : '\n'}`;
  text = text.replace(re, `$1${newDoc}`);
  fs.writeFileSync(filePath, text);
  return true;
}

function applyJava(filePath, spec) {
  let text = fs.readFileSync(filePath, 'utf8');
  const re = new RegExp(`${NL}\\/\\*\\*[\\s\\S]*?\\*\\/${NL}(public (?:final )?class )`);
  if (!re.test(text)) return false;
  const newDoc = formatJavaDoc(spec);
  const eol = text.includes('\r\n') ? '\r\n' : '\n';
  text = text.replace(re, `${eol}${newDoc}${eol}$1`);
  fs.writeFileSync(filePath, text);
  return true;
}

let count = 0;
for (const item of ITEMS) {
  const spec = DOC_SPECS[item.id];
  if (!spec) continue;
  const jp = javaPath(item);
  const pp = pyPath(item);
  const sp = jsPath(item);
  if (fs.existsSync(jp) && applyJava(jp, spec)) count++;
  if (fs.existsSync(pp) && applyPython(pp, spec)) count++;
  if (fs.existsSync(sp) && applyJs(sp, spec)) count++;
}
console.log(`Applied docs to ${count} files.`);
