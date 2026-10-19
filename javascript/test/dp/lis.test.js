const { length } = require('../../src/dp/lis');

test('lis length', () => {
  expect(length([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
});
