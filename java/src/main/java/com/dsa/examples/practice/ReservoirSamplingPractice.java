// Practice — Reservoir sampling sample of size k

package com.dsa.examples.practice;

import com.dsa.examples.searching.ReservoirSampling;

import java.util.List;

public final class ReservoirSamplingPractice {

    private ReservoirSamplingPractice() {
    }

    public static List<Integer> sample(int[] stream, int k, int seed) {
        return ReservoirSampling.sample(stream, k, seed);
    }
}
