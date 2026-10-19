const { longestPalindromeLength } = require('../../src/strings/manacher');

describe('Manacher', () => {
  test('longest palindrome length', () => {
    expect(longestPalindromeLength('babad')).toBe(3);
    expect(longestPalindromeLength('')).toBe(0);
  });
});
