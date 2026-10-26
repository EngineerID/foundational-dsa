const { trap } = require('../../src/searching/trappingRainWater');

describe('trapping rain water', () => {
  test('two pointers', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
    expect(trap([])).toBe(0);
  });
});
