const { longestPalindromeLength } = require('../strings/manacher');

function longestPalindromeLengthExport(s) {
  return longestPalindromeLength(s);
}

module.exports = { longestPalindromeLength: longestPalindromeLengthExport };
