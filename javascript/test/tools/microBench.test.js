const { execSync } = require('child_process');
const path = require('path');

const ROOT = path.join(__dirname, '../../..');

describe('micro-bench harness', () => {
  test('runs without error and prints timings', () => {
    const out = execSync('node tools/micro-bench.mjs', { cwd: ROOT, encoding: 'utf8' });
    expect(out).toMatch(/bubble-sort n=500:/);
    expect(out).toMatch(/merge-sort n=500:/);
  });

  test('micro-bench prints positive millisecond timings', () => {
    const out = execSync('node tools/micro-bench.mjs', { cwd: ROOT, encoding: 'utf8' });
    const parseMs = (line) => Number(line.split(':')[1].trim().split(' ')[0]);
    for (const prefix of ['bubble-sort', 'merge-sort']) {
      const line = out.split('\n').find((l) => l.startsWith(prefix));
      expect(parseMs(line)).toBeGreaterThan(0);
    }
  });
});
