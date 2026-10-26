const fs = require('fs');
const path = require('path');
const { length } = require('../../src/dp/longestPalindromicSubsequence');

const goldens = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../../../tools/longest-palindromic-subsequence-goldens.json'),
    'utf8',
  ),
);

describe('longest palindromic subsequence shared goldens', () => {
  for (const case_ of goldens) {
    test('length', () => {
      expect(length(case_.s)).toBe(case_.expected);
    });
  }
});
