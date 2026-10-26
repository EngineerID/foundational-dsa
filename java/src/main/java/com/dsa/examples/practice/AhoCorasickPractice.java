// Practice — Aho-Corasick multi-pattern search

package com.dsa.examples.practice;

import com.dsa.examples.strings.AhoCorasick;

import java.util.List;

public final class AhoCorasickPractice {

    private AhoCorasickPractice() {
    }

    public static List<Integer> search(String text, List<String> patterns) {
        return AhoCorasick.search(text, patterns);
    }
}
