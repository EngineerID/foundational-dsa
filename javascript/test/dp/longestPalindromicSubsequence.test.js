const { length } = require('../../src/dp/longestPalindromicSubsequence');

describe('longest palindromic subsequence', () => {
  test('length', () => {
    expect(length('bbabcbcab')).toBe(7);
    expect(length('bbbab')).toBe(4);
  });
});
