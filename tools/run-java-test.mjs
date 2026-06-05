#!/usr/bin/env node
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const javaDir = path.join(ROOT, 'java');

const isWin = process.platform === 'win32';
const mvnw = isWin ? path.join(javaDir, 'mvnw.cmd') : path.join(javaDir, 'mvnw');

if (fs.existsSync(mvnw)) {
  // On POSIX, invoke through `sh` so the test does not depend on the wrapper's
  // executable bit being preserved (a lost +x bit otherwise yields exit 126).
  const cmd = isWin ? `"${mvnw}" -q test` : `sh "${mvnw}" -q test`;
  execSync(cmd, { cwd: javaDir, stdio: 'inherit', shell: true });
} else {
  execSync('mvn -q test', { cwd: javaDir, stdio: 'inherit' });
}
