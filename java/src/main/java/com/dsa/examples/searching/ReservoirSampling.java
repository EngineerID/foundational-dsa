// Searching — Reservoir sampling

package com.dsa.examples.searching;

import java.util.ArrayList;
import java.util.List;

/**
 * Uniform random sample of size k from a stream.
 * Technique: Reservoir sampling
 * Invariant: Reservoir is uniform k-subset of items seen.
 * sample: Time O(n); Space O(k).
 */
public final class ReservoirSampling {

    private ReservoirSampling() {
    }

    /**
     * Returns k distinct items from stream (or all if len(stream) &lt; k).
     * Time: O(n); Space O(k).
     */
    public static List<Integer> sample(int[] stream, int k) {
        return sample(stream, k, 0);
    }

    /**
     * Returns k distinct items with deterministic {@code seed} (shared LCG with Python/JS ports).
     * Time: O(n); Space O(k).
     */
    public static List<Integer> sample(int[] stream, int k, long seed) {
        if (k < 0) {
            throw new IllegalArgumentException("k must be non-negative");
        }
        if (k == 0) {
            return List.of();
        }
        long rngState = seed;
        List<Integer> res = new ArrayList<>();
        for (int i = 0; i < Math.min(k, stream.length); i++) {
            res.add(stream[i]);
        }
        for (int i = k; i < stream.length; i++) {
            rngState = (rngState * 48271L) % 2147483647L;
            int j = (int) (rngState % (i + 1));
            if (j < k) {
                res.set(j, stream[i]);
            }
        }
        return res;
    }
}
