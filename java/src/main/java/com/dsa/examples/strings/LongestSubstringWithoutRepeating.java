// Strings — Longest substring without repeating characters

package com.dsa.examples.strings;

import java.util.HashMap;
import java.util.Map;

/**
 * Length of the longest substring with all distinct characters.
 * Technique: Sliding window with last-seen index
 * Invariant: Window [start, i] has all distinct characters.
 * lengthOfLongestSubstring: Time O(n); Space O(min(n, alphabet)).
 */
public final class LongestSubstringWithoutRepeating {

    private LongestSubstringWithoutRepeating() {
    }

    /**
     * Returns longest substring length ({@code null} treated as empty).
     * Time: O(n); Space O(min(n, alphabet)).
     */
    public static int lengthOfLongestSubstring(String s) {
        if (s == null || s.isEmpty()) {
            return 0;
        }
        Map<Character, Integer> last = new HashMap<>();
        int best = 0;
        int start = 0;
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (last.containsKey(ch) && last.get(ch) >= start) {
                start = last.get(ch) + 1;
            }
            last.put(ch, i);
            best = Math.max(best, i - start + 1);
        }
        return best;
    }
}
