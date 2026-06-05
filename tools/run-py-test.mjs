#!/usr/bin/env node
import { execSync, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function pythonCmd() {
  for (const cmd of ['python', 'py', 'python3']) {
    // Pass the full command as one string (not args + shell:true, which is
    // deprecated under DEP0190); shell:true keeps Windows .cmd/py launcher resolution.
    const r = spawnSync(`${cmd} --version`, { shell: true, encoding: 'utf8' });
    if (r.status === 0) return cmd;
  }
  return 'python';
}

const py = pythonCmd();
execSync(`${py} -m pytest python -q`, { cwd: ROOT, stdio: 'inherit', shell: true });
