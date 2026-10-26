const fs = require('fs');
const path = require('path');
const { SparseTable } = require('../../src/trees/sparseTable');

const goldens = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../tools/sparse-table-goldens.json'), 'utf8'));

describe('sparse table shared goldens', () => {
  for (const case_ of goldens) {
    test('rmq', () => {
      const st = new SparseTable(case_.initial);
      for (const [left, right, expected] of case_.queries) {
        expect(st.query(left, right)).toBe(expected);
      }
    });
  }
});
