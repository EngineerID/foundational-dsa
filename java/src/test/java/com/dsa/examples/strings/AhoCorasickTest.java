package com.dsa.examples.strings;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class AhoCorasickTest {

    @Test
    void search() {
        assertEquals(List.of(), AhoCorasick.search("abc", new String[0]));
        assertEquals(List.of(0, 1, 3), AhoCorasick.search("abcab", new String[] {"ab", "bc"}));
    }
}
