const fs = require('fs');
const path = require('path');
const { search } = require('../../src/strings/kmp');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/kmp-goldens.json'), 'utf8'),
);

describe('kmp shared goldens', () => {
  for (const { text, pattern, expected } of goldens) {
    test(`${JSON.stringify(text)} / ${JSON.stringify(pattern)} => ${expected}`, () => {
      expect(search(text, pattern)).toBe(expected);
    });
  }
});
