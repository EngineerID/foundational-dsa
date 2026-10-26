// Practice — Bloom filter membership queries

package com.dsa.examples.practice;

import com.dsa.examples.hashing.BloomFilter;

public final class BloomFilterPractice {

    private final BloomFilter filter;

    public BloomFilterPractice(int expectedItems, double falsePositiveRate) {
        filter = new BloomFilter(expectedItems, falsePositiveRate);
    }

    public void add(String item) {
        filter.add(item);
    }

    public boolean mightContain(String item) {
        return filter.mightContain(item);
    }
}
