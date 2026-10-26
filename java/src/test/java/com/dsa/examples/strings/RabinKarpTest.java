package com.dsa.examples.strings;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class RabinKarpTest {

    @Test
    void search() {
        assertEquals(0, RabinKarp.search("abracadabra", "abra"));
        assertEquals(0, RabinKarp.search("abc", ""));
        assertEquals(-1, RabinKarp.search("abc", "z"));
        assertEquals(-1, RabinKarp.search("", "a"));
        assertEquals(0, RabinKarp.search("a", "a"));
        assertEquals(0, RabinKarp.search("aaaa", "aa"));
        assertEquals(0, RabinKarp.search("abcabcabc", "abc"));
    }
}
