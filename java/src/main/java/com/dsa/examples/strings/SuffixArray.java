// Strings — Suffix array

package com.dsa.examples.strings;

import java.util.Arrays;
import java.util.Comparator;

/**
 * Lexicographically sorted suffix starting indices.
 * Technique: Suffix array doubling
 * Invariant: Ranks sort prefixes of length 2^k.
 * build: Time O(n log n); Space O(n).
 */
public final class SuffixArray {

    private SuffixArray() {
    }

    public static int[] build(String s) {
        int n = s.length();
        if (n == 0) {
            return new int[0];
        }
        Integer[] sa = new Integer[n];
        for (int i = 0; i < n; i++) {
            sa[i] = i;
        }
        int[] rank = new int[n];
        for (int i = 0; i < n; i++) {
            rank[i] = s.charAt(i);
        }
        int k = 1;
        while (k < n) {
            int finalK = k;
            int[] finalRank = rank;
            Arrays.sort(sa, Comparator.comparingInt((Integer a) -> finalRank[a])
                    .thenComparingInt(a -> a + finalK < n ? finalRank[a + finalK] : -1));
            int[] newRank = new int[n];
            newRank[sa[0]] = 0;
            for (int i = 1; i < n; i++) {
                int prev = sa[i - 1];
                int cur = sa[i];
                int prevKey2 = prev + finalK < n ? finalRank[prev + finalK] : -1;
                int curKey2 = cur + finalK < n ? finalRank[cur + finalK] : -1;
                newRank[cur] = newRank[prev]
                        + (finalRank[cur] != finalRank[prev] || curKey2 != prevKey2 ? 1 : 0);
            }
            rank = newRank;
            k <<= 1;
        }
        int[] out = new int[n];
        for (int i = 0; i < n; i++) {
            out[i] = sa[i];
        }
        return out;
    }
}
