const fs = require('fs');
const path = require('path');

const { findIndex } = require('../../src/practice/binarySearchPractice');
const { bfsDistances } = require('../../src/practice/bfsPractice');
const { firstIndex } = require('../../src/practice/kmpPractice');
const { knapsackMaxValue } = require('../../src/practice/knapsackPractice');
const { lcsLength } = require('../../src/practice/lcsPractice');
const { TriePractice } = require('../../src/practice/triePractice');
const { connected: ufConnected } = require('../../src/practice/unionFindPractice');
const { extractOrder } = require('../../src/practice/binaryHeapPractice');
const { shortestDistances } = require('../../src/practice/dijkstraPractice');
const { traverse: dfsTraverse } = require('../../src/practice/dfsPractice');
const { lisLength } = require('../../src/practice/lisPractice');
const { mergeSort } = require('../../src/practice/mergeSortPractice');
const { topologicalOrder } = require('../../src/practice/topologicalSortPractice');

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

  test('union–find practice', () => {
    for (const row of cases('union-find-goldens.json')) {
      for (const q of row.connected) {
        expect(ufConnected(row.n, row.unions, q.a, q.b)).toBe(q.expected);
      }
    }
  });

  test('binary heap practice', () => {
    for (const row of cases('binary-heap-goldens.json')) {
      if (row.inserts === undefined) continue;
      expect(extractOrder(row.inserts)).toEqual(row.extractOrder);
    }
  });

  test('Dijkstra practice', () => {
    for (const row of cases('dijkstra-goldens.json')) {
      expect(shortestDistances(row.n, row.edges, row.source)).toEqual(row.distances);
    }
  });

  test('DFS practice', () => {
    for (const row of cases('dfs-goldens.json')) {
      const t = dfsTraverse(row.n, row.edges, row.source, row.directed);
      expect(t.discovery).toEqual(row.discovery);
      expect(t.finish).toEqual(row.finish);
    }
  });

  test('LIS practice', () => {
    for (const row of cases('lis-goldens.json')) {
      expect(lisLength(row.arr)).toBe(row.expected);
    }
  });

  test('merge sort practice', () => {
    for (const row of cases('merge-sort-goldens.json')) {
      expect(mergeSort(row.input)).toEqual(row.sorted);
    }
  });

  test('topological sort practice', () => {
    for (const row of cases('topological-sort-goldens.json')) {
      expect(topologicalOrder(row.n, row.edges)).toEqual(row.expectedOrder);
    }
  });
});
