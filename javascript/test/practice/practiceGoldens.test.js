const fs = require('fs');
const path = require('path');

const { findIndex } = require('../../src/practice/binarySearchPractice');
const { bfsDistances } = require('../../src/practice/bfsPractice');
const { firstIndex } = require('../../src/practice/kmpPractice');
const { knapsackMaxValue } = require('../../src/practice/knapsackPractice');
const { lcsLength } = require('../../src/practice/lcsPractice');
const { TriePractice } = require('../../src/practice/triePractice');

const tools = path.join(__dirname, '../../../tools');

function cases(name) {
  return JSON.parse(fs.readFileSync(path.join(tools, name), 'utf8'));
}

describe('practice shared goldens', () => {
  test('binary search practice', () => {
    for (const row of cases('binary-search-goldens.json')) {
      expect(findIndex(row.arr, row.key)).toBe(row.expected);
    }
  });

  test('knapsack practice', () => {
    for (const row of cases('knapsack-goldens.json')) {
      expect(knapsackMaxValue(row.weights, row.values, row.capacity)).toBe(row.expected);
    }
  });

  test('lcs practice', () => {
    for (const row of cases('lcs-goldens.json')) {
      expect(lcsLength(row.a, row.b)).toBe(row.expected);
    }
  });

  test('kmp practice', () => {
    for (const row of cases('kmp-goldens.json')) {
      expect(firstIndex(row.text, row.pattern)).toBe(row.expected);
    }
  });

  test('trie practice', () => {
    for (const row of cases('trie-goldens.json')) {
      const trie = new TriePractice();
      for (const w of row.inserts ?? []) {
        trie.insert(w);
      }
      for (const s of row.search ?? []) {
        expect(trie.search(s.word)).toBe(s.expected);
      }
      for (const s of row.startsWith ?? []) {
        expect(trie.startsWith(s.prefix)).toBe(s.expected);
      }
    }
  });

  test('bfs practice', () => {
    for (const row of cases('practice-bfs-goldens.json')) {
      expect(bfsDistances(row.n, row.edges, row.source)).toEqual(row.expected);
    }
  });
});
