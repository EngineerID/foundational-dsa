// Dynamic Programming — Longest Increasing Subsequence

package com.dsa.examples.dp;

import java.util.ArrayList;
import java.util.List;

/**
 * Length of longest strictly increasing subsequence.
 * Technique: Patience sorting / DP with binary search
 * Invariant: tails[k] is minimum tail of increasing subsequence of length k+1.
 * length: Time O(n log n); Space O(n).
 */
public final class LIS {

    private LIS() {
    }

    /**
     * Returns LIS length (0 for empty).
     * Time: O(n log n); Space: O(n).
     */
    public static int length(int[] arr) {
        if (arr == null || arr.length == 0) {
            return 0;
        }
        List<Integer> tails = new ArrayList<>();
        for (int x : arr) {
            int lo = 0;
            int hi = tails.size();
            while (lo < hi) {
                int mid = (lo + hi) / 2;
                if (tails.get(mid) < x) {
                    lo = mid + 1;
                } else {
                    hi = mid;
                }
            }
            if (lo == tails.size()) {
                tails.add(x);
            } else {
                tails.set(lo, x);
            }
        }
        return tails.size();
    }
}
