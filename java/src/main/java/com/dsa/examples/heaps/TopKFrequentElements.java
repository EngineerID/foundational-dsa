// Heaps — Top K frequent elements

package com.dsa.examples.heaps;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * K most frequent integers (frequency desc, then value asc).
 * Technique: Size-k min-heap by frequency
 * Invariant: Heap holds the k best candidates seen so far.
 * topKFrequent: Time O(n log k); Space O(n).
 */
public final class TopKFrequentElements {

    private TopKFrequentElements() {
    }

    private static final class FreqEntry implements Comparable<FreqEntry> {
        final int num;
        final int freq;

        FreqEntry(int num, int freq) {
            this.num = num;
            this.freq = freq;
        }

        @Override
        public int compareTo(FreqEntry o) {
            int c = Integer.compare(freq, o.freq);
            return c != 0 ? c : Integer.compare(num, o.num);
        }
    }

    /**
     * Returns the {@code k} most frequent values. {@code k} must be in {@code 1..uniqueCount}.
     * Time: O(n log k); Space O(n).
     */
    public static List<Integer> topKFrequent(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0) {
            throw new IllegalArgumentException("invalid input");
        }
        Map<Integer, Integer> counts = new HashMap<>();
        for (int n : nums) {
            counts.merge(n, 1, Integer::sum);
        }
        if (k > counts.size()) {
            throw new IllegalArgumentException("k exceeds distinct count");
        }
        BinaryHeap<FreqEntry> heap = new BinaryHeap<>();
        for (Map.Entry<Integer, Integer> e : counts.entrySet()) {
            heap.insert(new FreqEntry(e.getKey(), e.getValue()));
            if (heap.size() > k) {
                heap.extractMin();
            }
        }
        List<Integer> out = new ArrayList<>();
        while (heap.size() > 0) {
            out.add(heap.extractMin().num);
        }
        out.sort((a, b) -> {
            int cmp = Integer.compare(counts.get(b), counts.get(a));
            return cmp != 0 ? cmp : Integer.compare(a, b);
        });
        return out;
    }
}
