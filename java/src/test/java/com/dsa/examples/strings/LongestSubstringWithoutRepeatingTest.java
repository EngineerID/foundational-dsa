package com.dsa.examples.strings;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class LongestSubstringWithoutRepeatingTest {

    @Test
    void slidingWindow() {
        assertEquals(3, LongestSubstringWithoutRepeating.lengthOfLongestSubstring("abcabcbb"));
        assertEquals(0, LongestSubstringWithoutRepeating.lengthOfLongestSubstring(""));
        assertEquals(0, LongestSubstringWithoutRepeating.lengthOfLongestSubstring(null));
    }
}
