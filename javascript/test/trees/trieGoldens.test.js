const fs = require('fs');
const path = require('path');
const { Trie } = require('../../src/trees/trie');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/trie-goldens.json'), 'utf8'),
);

describe('trie shared goldens', () => {
  for (const { inserts, search, startsWith } of goldens) {
    test(`inserts=${inserts.join(',')}`, () => {
      const trie = new Trie();
      for (const w of inserts) {
        trie.insert(w);
      }
      for (const { word, expected } of search) {
        expect(trie.search(word)).toBe(expected);
      }
      for (const { prefix, expected } of startsWith) {
        expect(trie.startsWith(prefix)).toBe(expected);
      }
    });
  }
});
