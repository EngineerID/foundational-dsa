const { lengthOfLongestSubstring } = require('../../src/strings/longestSubstringWithoutRepeating');

describe('longest substring without repeating', () => {
  test('sliding window', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring('')).toBe(0);
    expect(lengthOfLongestSubstring(null)).toBe(0);
  });
});
