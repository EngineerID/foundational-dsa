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
const covDir = path.join(ROOT, 'coverage');
let covArgs = '';
if (process.env.PYTEST_COV === '1') {
  fs.mkdirSync(covDir, { recursive: true });
  covArgs = ` --cov=dsa --cov-report=json:${path.join(covDir, 'python-coverage.json')}`;
}
execSync(`${py} -m pytest python -q${covArgs}`, { cwd: ROOT, stdio: 'inherit', shell: true });
