const { execSync } = require('child_process');
const path = require('path');

const ROOT = path.join(__dirname, '../../..');

describe('complexity sanity', () => {
  test('CLI exits zero under generous thresholds', () => {
    const out = execSync('node tools/complexity-sanity.mjs', { cwd: ROOT, encoding: 'utf8' });
    expect(out).toMatch(/Complexity sanity check passed/);
  });
});
