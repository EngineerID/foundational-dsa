const fs = require('fs');
const path = require('path');
const { search } = require('../../src/strings/rabinKarp');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/rabin-karp-goldens.json'), 'utf8'),
);

describe('rabin-karp shared goldens', () => {
  for (const { text, pattern, expected } of goldens) {
    test(pattern, () => {
      expect(search(text, pattern)).toBe(expected);
    });
  }
});
