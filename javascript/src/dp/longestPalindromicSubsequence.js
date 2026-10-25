// Dynamic Programming — Longest palindromic subsequence

/**
 * Longest palindromic subsequence length.
 * Technique: Interval DP
 * Invariant: dp[i][j] is LPS length in s[i..j].
 * length: Time O(n²); Space O(n²).
 */

function length(s) {
  const n = s.length;
  if (n === 0) return 0;
  const dp = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let i = n - 1; i >= 0; i -= 1) {
    dp[i][i] = 1;
    for (let j = i + 1; j < n; j += 1) {
      if (s[i] === s[j]) dp[i][j] = 2 + (i + 1 <= j - 1 ? dp[i + 1][j - 1] : 0);
      else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
    }
  }
  return dp[0][n - 1];
}

module.exports = { length };
