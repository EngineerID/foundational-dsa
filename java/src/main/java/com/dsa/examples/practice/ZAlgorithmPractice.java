// Practice — Z-algorithm pattern search

package com.dsa.examples.practice;

import com.dsa.examples.strings.ZAlgorithm;

public final class ZAlgorithmPractice {

    private ZAlgorithmPractice() {
    }

    public static int search(String text, String pattern) {
        return ZAlgorithm.search(text, pattern);
    }

    public static int[] zArray(String text) {
        return ZAlgorithm.zArray(text);
    }
}
