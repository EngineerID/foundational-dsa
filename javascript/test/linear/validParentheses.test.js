const { isValidParentheses } = require('../../src/linear/validParentheses');

describe('valid parentheses', () => {
  test('balanced brackets', () => {
    expect(isValidParentheses('()[]{}')).toBe(true);
    expect(isValidParentheses('(]')).toBe(false);
    expect(isValidParentheses('')).toBe(true);
  });
});
