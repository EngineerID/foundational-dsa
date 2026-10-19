const { length } = require('../../src/dp/lcs');

test('lcs length', () => {
  expect(length('abcde', 'ace')).toBe(3);
});
