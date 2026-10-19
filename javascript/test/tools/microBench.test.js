const { execSync } = require('child_process');
const path = require('path');

const ROOT = path.join(__dirname, '../../..');

describe('micro-bench harness', () => {
  test('runs without error and prints timings', () => {
    const out = execSync('node tools/micro-bench.mjs', { cwd: ROOT, encoding: 'utf8' });
    expect(out).toMatch(/bubble-sort n=200:/);
    expect(out).toMatch(/merge-sort n=200:/);
  });
});
