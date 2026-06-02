// Hashing — Bloom Filter

package com.dsa.examples.hashing;

/**
 * Probabilistic set membership: no false negatives, possible false positives.
 * add/contains O(k) where k is the number of hash functions.
 */
public class BloomFilter {

    private final boolean[] bits;
    private final int numHashes;
    private final int size;

    /**
     * Creates a bloom filter with {@code expectedItems} capacity and false-positive rate target.
     * Time: O(m); Space: O(m).
     */
    public BloomFilter(int expectedItems, double falsePositiveRate) {
        this.size = optimalSize(expectedItems, falsePositiveRate);
        this.numHashes = optimalHashes(size, expectedItems);
        this.bits = new boolean[size];
    }

    /**
     * Adds an element (string key).
     * Time: O(k); Space: O(1).
     */
    public void add(String item) {
        for (int i = 0; i < numHashes; i++) {
            bits[hash(item, i)] = true;
        }
    }

    /**
     * Returns true if the item might be present (false positives possible).
     * Returns false if definitely absent.
     * Time: O(k); Space: O(1).
     */
    public boolean mightContain(String item) {
        for (int i = 0; i < numHashes; i++) {
            if (!bits[hash(item, i)]) {
                return false;
            }
        }
        return true;
    }

    private int hash(String item, int seed) {
        int h = item.hashCode() ^ (seed * 0x9e3779b9);
        return Math.floorMod(h, size);
    }

    private static int optimalSize(int n, double p) {
        return Math.max(8, (int) Math.ceil(-n * Math.log(p) / (Math.log(2) * Math.log(2))));
    }

    private static int optimalHashes(int m, int n) {
        return Math.max(1, (int) Math.round((double) m / n * Math.log(2)));
    }
}
