// Strings — Z-Algorithm

package com.dsa.examples.strings;

/**
 * Z-array construction and pattern search.
 * Technique: Z-algorithm
 * Invariant: Z[i] is LCP of s[i:] and s.
 * zArray/search: Time O(n + m); Space O(n).
 */
public final class ZAlgorithm {

    private ZAlgorithm() {
    }

    /**
     * Returns Z-array for {@code s} (Z[0] is length of s).
     * Time: O(n); Space: O(n).
     */
    public static int[] zArray(String s) {
        if (s == null) {
            return new int[0];
        }
        int n = s.length();
        if (n == 0) {
            return new int[0];
        }
        int[] z = new int[n];
        z[0] = n;
        int l = 0;
        int r = 0;
        for (int i = 1; i < n; i++) {
            if (i <= r) {
                z[i] = Math.min(r - i + 1, z[i - l]);
            }
            while (i + z[i] < n && s.charAt(z[i]) == s.charAt(i + z[i])) {
                z[i]++;
            }
            if (i + z[i] - 1 > r) {
                l = i;
                r = i + z[i] - 1;
            }
        }
        return z;
    }

    /**
     * First occurrence of {@code pattern} in {@code text}, or -1.
     * Empty pattern returns 0.
     * Time: O(n + m); Space: O(n).
     */
    public static int search(String text, String pattern) {
        if (text == null || pattern == null) {
            return -1;
        }
        if (pattern.isEmpty()) {
            return 0;
        }
        if (pattern.length() > text.length()) {
            return -1;
        }
        String concat = pattern + "$" + text;
        int[] z = zArray(concat);
        int m = pattern.length();
        for (int i = m + 1; i < concat.length(); i++) {
            if (z[i] == m) {
                return i - m - 1;
            }
        }
        return -1;
    }
}
