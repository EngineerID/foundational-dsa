// Strings — Manacher

package com.dsa.examples.strings;

/**
 * Longest palindromic substring length.
 * Technique: Manacher
 * Invariant: Radius array mirrors palindrome centers.
 * longestPalindromeLength: Time O(n); Space O(n).
 */
public final class Manacher {

    private Manacher() {
    }

    public static int longestPalindromeLength(String s) {
        if (s.isEmpty()) {
            return 0;
        }
        StringBuilder t = new StringBuilder("|");
        for (char c : s.toCharArray()) {
            t.append(c).append('|');
        }
        int n = t.length();
        int[] p = new int[n];
        int center = 0;
        int right = 0;
        int best = 0;
        for (int i = 0; i < n; i++) {
            int mirror = 2 * center - i;
            if (i < right) {
                p[i] = Math.min(right - i, p[mirror]);
            }
            while (i + p[i] + 1 < n && i - p[i] - 1 >= 0 && t.charAt(i + p[i] + 1) == t.charAt(i - p[i] - 1)) {
                p[i]++;
            }
            if (i + p[i] > right) {
                center = i;
                right = i + p[i];
            }
            best = Math.max(best, p[i]);
        }
        return best;
    }
}
