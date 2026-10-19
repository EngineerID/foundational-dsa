const { maxProfit } = require('../../src/dp/rodCutting');

describe('rod cutting', () => {
  test('max profit', () => {
    expect(maxProfit([1, 5, 8, 9], 4)).toBe(10);
  });
});
