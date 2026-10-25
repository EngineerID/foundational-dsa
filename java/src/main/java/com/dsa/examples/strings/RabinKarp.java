// Strings — Rabin-Karp

package com.dsa.examples.strings;

/**
 * Substring search with rolling polynomial hash.
 * Technique: Rabin-Karp rolling hash
 * Invariant: Hash of length-m window matches before char compare.
 * search: Time O(n + m) average; Space O(1).
 */
public final class RabinKarp {

    private static final int BASE = 256;
    private static final int MOD = 1_000_000_007;

    private RabinKarp() {
    }

    /**
     * First index of {@code pattern} in {@code text}, or -1.
     * Empty pattern returns 0.
     * Time: O(n + m) average; Space: O(1).
     */
    public static int search(String text, String pattern) {
        if (text == null || pattern == null) {
            return -1;
        }
        if (pattern.isEmpty()) {
            return 0;
        }
        int n = text.length();
        int m = pattern.length();
        if (m > n) {
            return -1;
        }
        long h = 1;
        for (int i = 0; i < m - 1; i++) {
            h = (h * BASE) % MOD;
        }
        long patHash = 0;
        long winHash = 0;
        for (int i = 0; i < m; i++) {
            patHash = (patHash * BASE + pattern.charAt(i)) % MOD;
            winHash = (winHash * BASE + text.charAt(i)) % MOD;
        }
        for (int i = 0; i <= n - m; i++) {
            if (patHash == winHash && text.regionMatches(i, pattern, 0, m)) {
                return i;
            }
            if (i < n - m) {
                winHash = (winHash - text.charAt(i) * h) % MOD;
                winHash = (winHash * BASE + text.charAt(i + m)) % MOD;
                if (winHash < 0) {
                    winHash += MOD;
                }
            }
        }
        return -1;
    }
}
