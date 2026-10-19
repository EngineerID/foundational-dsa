const { execSync } = require('child_process');
const path = require('path');

const ROOT = path.join(__dirname, '../../..');

describe('edge-case coverage tool', () => {
  test('findEdgeCaseGaps reports no missing themes', () => {
    const out = execSync(
      `node --input-type=module -e "import { findEdgeCaseGaps } from './tools/edge-case-coverage.mjs'; console.log(JSON.stringify(findEdgeCaseGaps()));"`,
      { cwd: ROOT, encoding: 'utf8' }
    );
    expect(JSON.parse(out.trim())).toEqual([]);
  });
});
