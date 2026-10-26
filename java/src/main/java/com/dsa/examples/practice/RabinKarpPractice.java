// Practice — Rabin-Karp substring search

package com.dsa.examples.practice;

import com.dsa.examples.strings.RabinKarp;

public final class RabinKarpPractice {

    private RabinKarpPractice() {
    }

    public static int firstIndex(String text, String pattern) {
        return RabinKarp.search(text, pattern);
    }
}
