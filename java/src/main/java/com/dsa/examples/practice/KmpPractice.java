// Practice — KMP first occurrence

package com.dsa.examples.practice;

import com.dsa.examples.strings.KMP;

public final class KmpPractice {

    private KmpPractice() {
    }

    public static int firstIndex(String text, String pattern) {
        return KMP.search(text, pattern);
    }
}
