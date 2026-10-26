#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const script = path.join(path.dirname(fileURLToPath(import.meta.url)), 'complexity-cheatsheet.mjs');
const r = spawnSync(process.execPath, [script, '--check'], { stdio: 'inherit' });
process.exit(r.status ?? 1);
