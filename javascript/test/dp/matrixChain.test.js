const { minMultiplications } = require('../../src/dp/matrixChain');

describe('matrix chain', () => {
  test('min multiplications', () => {
    expect(minMultiplications([10, 20, 30, 40, 30])).toBe(30000);
    expect(minMultiplications([10, 30, 5, 60])).toBe(4500);
  });
});
