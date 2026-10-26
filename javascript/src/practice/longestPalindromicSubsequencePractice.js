const { length: lpsLength } = require('../dp/longestPalindromicSubsequence');

function longestPalindromicSubsequenceLength(s) {
  return lpsLength(s);
}

module.exports = { longestPalindromicSubsequenceLength };
