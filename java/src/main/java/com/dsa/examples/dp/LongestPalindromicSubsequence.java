// Dynamic Programming — LPS

package com.dsa.examples.dp;

/**
 * Longest palindromic subsequence length.
 * Technique: Interval DP
 * Invariant: dp[i][j] is LPS length in s[i..j].
 * length: Time O(n²); Space O(n²).
 */
public final class LongestPalindromicSubsequence {

    private LongestPalindromicSubsequence() {
    }

    public static int length(String s) {
        int n = s.length();
        if (n == 0) {
            return 0;
        }
        int[][] dp = new int[n][n];
        for (int i = n - 1; i >= 0; i--) {
            dp[i][i] = 1;
            for (int j = i + 1; j < n; j++) {
                if (s.charAt(i) == s.charAt(j)) {
                    dp[i][j] = 2 + (i + 1 <= j - 1 ? dp[i + 1][j - 1] : 0);
                } else {
                    dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[0][n - 1];
    }
}
