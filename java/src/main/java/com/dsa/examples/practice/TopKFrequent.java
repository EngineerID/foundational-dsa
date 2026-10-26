// Practice — Top K frequent elements

package com.dsa.examples.practice;

import com.dsa.examples.heaps.BinaryHeap;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public final class TopKFrequent {

    private TopKFrequent() {
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

    public static List<Integer> solve(int[] nums, int k) {
        Map<Integer, Integer> counts = new HashMap<>();
        for (int n : nums) {
            counts.merge(n, 1, Integer::sum);
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
