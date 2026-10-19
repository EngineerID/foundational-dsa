// Searching — Reservoir sampling

package com.dsa.examples.searching;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * Uniform random sample of size k from a stream (deterministic with seed).
 * Technique: Reservoir sampling
 * Invariant: Reservoir holds uniform k-subset of items seen.
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
     * Returns k distinct items with deterministic {@code seed}.
     * Time: O(n); Space O(k).
     */
    public static List<Integer> sample(int[] stream, int k, long seed) {
        if (k < 0) {
            throw new IllegalArgumentException("k must be non-negative");
        }
        if (k == 0) {
            return List.of();
        }
        Random rng = new Random(seed);
        List<Integer> res = new ArrayList<>();
        for (int i = 0; i < Math.min(k, stream.length); i++) {
            res.add(stream[i]);
        }
        for (int i = k; i < stream.length; i++) {
            int j = rng.nextInt(i + 1);
            if (j < k) {
                res.set(j, stream[i]);
            }
        }
        return res;
    }
}
