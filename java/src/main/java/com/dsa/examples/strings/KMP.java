// Strings — Knuth-Morris-Pratt

package com.dsa.examples.strings;

/**
 * Find first occurrence of a pattern in text.
 * Technique: Knuth-Morris-Pratt
 * Invariant: LPS table encodes longest borders of pattern prefixes.
 * search: Time O(n + m); Space O(m).
 */
public final class KMP {

    private KMP() {
    }

    /**
     * Returns start index of first occurrence of {@code pattern} in {@code text}, or -1.
     * Time: O(n + m); Space: O(m).
     */
    public static int search(String text, String pattern) {
        if (text == null || pattern == null) {
            return -1;
        }
        if (pattern.isEmpty()) {
            return 0;
        }
        if (text.length() < pattern.length()) {
            return -1;
        }
        int[] lps = buildLps(pattern);
        int i = 0;
        int j = 0;
        while (i < text.length()) {
            if (text.charAt(i) == pattern.charAt(j)) {
                i++;
                j++;
                if (j == pattern.length()) {
                    return i - j;
                }
            } else if (j > 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
        return -1;
    }

    private static int[] buildLps(String pattern) {
        int[] lps = new int[pattern.length()];
        int len = 0;
        for (int i = 1; i < pattern.length(); ) {
            if (pattern.charAt(i) == pattern.charAt(len)) {
                len++;
                lps[i] = len;
                i++;
            } else if (len > 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
        return lps;
    }
}
