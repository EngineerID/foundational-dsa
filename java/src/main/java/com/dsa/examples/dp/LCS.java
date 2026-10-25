// Dynamic Programming — Longest Common Subsequence

package com.dsa.examples.dp;

/**
 * LCS length for two strings.
 * Technique: 2D DP
 * Invariant: dp[i][j] is LCS of prefixes a[:i], b[:j].
 * length: Time O(nm); Space O(min(n,m)).
 */
public final class LCS {

    private LCS() {
    }

    /**
     * LCS length; {@code null} treated as empty.
     * Time: O(nm); Space: O(min(n,m)).
     */
    public static int length(String a, String b) {
        if (a == null) {
            a = "";
        }
        if (b == null) {
            b = "";
        }
        if (a.length() < b.length()) {
            String tmp = a;
            a = b;
            b = tmp;
        }
        int[] prev = new int[b.length() + 1];
        for (int i = 0; i < a.length(); i++) {
            char ch = a.charAt(i);
            int[] cur = new int[b.length() + 1];
            for (int j = 0; j < b.length(); j++) {
                if (ch == b.charAt(j)) {
                    cur[j + 1] = prev[j] + 1;
                } else {
                    cur[j + 1] = Math.max(prev[j + 1], cur[j]);
                }
            }
            prev = cur;
        }
        return prev[b.length()];
    }
}
