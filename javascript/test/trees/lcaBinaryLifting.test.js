const { LCABinaryLifting } = require('../../src/trees/lcaBinaryLifting');

describe('LCABinaryLifting', () => {
  test('query', () => {
    const lca = new LCABinaryLifting([0, 0, 1, 1]);
    expect(lca.query(2, 3)).toBe(1);
    expect(lca.query(2, 1)).toBe(1);
  });
});
