const fs = require('fs');
const path = require('path');
const { search } = require('../../src/strings/ahoCorasick');

const goldens = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../tools/aho-corasick-goldens.json'), 'utf8'));

describe('aho-corasick shared goldens', () => {
  for (const case_ of goldens) {
    test('hits', () => {
      expect(search(case_.text, case_.patterns)).toEqual(case_.hits);
    });
  }
});
