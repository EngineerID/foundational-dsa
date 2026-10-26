const fs = require('fs');
const path = require('path');
const { lengthOfLongestSubstring } = require('../../src/strings/longestSubstringWithoutRepeating');

const goldens = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../../../tools/longest-substring-without-repeating-goldens.json'),
    'utf8',
  ),
);

describe('longest substring without repeating shared goldens', () => {
  for (const { s, expected } of goldens) {
    test(JSON.stringify(s), () => {
      expect(lengthOfLongestSubstring(s)).toBe(expected);
    });
  }
});
