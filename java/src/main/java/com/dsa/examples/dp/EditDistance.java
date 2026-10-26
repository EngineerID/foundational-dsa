// Dynamic Programming — Edit Distance (Levenshtein)

package com.dsa.examples.dp;

/**
 * Levenshtein edit distance between two strings.
 * Technique: Edit distance DP
 * Invariant: dp[i][j] is min edits for prefixes.
 * distance: Time O(nm); Space O(min(n,m)).
 */
public final class EditDistance {

    private EditDistance() {
    }

    /**
     * Edit distance; {@code null} as empty string.
     * Time: O(nm); Space: O(min(n,m)).
     */
    public static int distance(String a, String b) {
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
        for (int j = 0; j <= b.length(); j++) {
            prev[j] = j;
        }
        for (int i = 1; i <= a.length(); i++) {
            char chA = a.charAt(i - 1);
            int[] cur = new int[b.length() + 1];
            cur[0] = i;
            for (int j = 1; j <= b.length(); j++) {
                char chB = b.charAt(j - 1);
                int cost = chA == chB ? 0 : 1;
                cur[j] = Math.min(Math.min(prev[j] + 1, cur[j - 1] + 1), prev[j - 1] + cost);
            }
            prev = cur;
        }
        return prev[b.length()];
    }
}
