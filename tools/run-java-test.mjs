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
  execSync(isWin ? `"${mvnw}" -q test` : `"${mvnw}" -q test`, { cwd: javaDir, stdio: 'inherit', shell: true });
} else {
  execSync('mvn -q test', { cwd: javaDir, stdio: 'inherit' });
}
