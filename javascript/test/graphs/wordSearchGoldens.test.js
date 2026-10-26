const fs = require('fs');
const path = require('path');
const { wordSearch } = require('../../src/graphs/wordSearch');

const goldens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../tools/word-search-goldens.json'), 'utf8'),
);

describe('word search shared goldens', () => {
  for (const case_ of goldens) {
    test(JSON.stringify({ word: case_.word, rows: case_.board?.length }), () => {
      const board = (case_.board || []).map((row) => row.slice());
      expect(wordSearch(board, case_.word)).toBe(case_.expected);
    });
  }
});
