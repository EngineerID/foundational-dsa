const { SparseTable } = require('../../src/trees/sparseTable');

describe('SparseTable', () => {
  test('range minimum', () => {
    const st = new SparseTable([1, 3, 2, 5, 4]);
    expect(st.query(1, 3)).toBe(2);
    expect(st.query(0, 4)).toBe(1);
  });
});
