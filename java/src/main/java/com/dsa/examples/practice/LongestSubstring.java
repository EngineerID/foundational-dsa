// Practice — Longest substring without repeating characters

package com.dsa.examples.practice;

import java.util.HashMap;
import java.util.Map;

public final class LongestSubstring {

    private LongestSubstring() {
    }

    public static int lengthOfLongestSubstring(String s) {
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
