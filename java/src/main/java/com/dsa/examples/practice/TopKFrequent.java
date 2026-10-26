// Practice — Top K frequent elements

package com.dsa.examples.practice;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public final class TopKFrequent {

    private TopKFrequent() {
    }

    public static List<Integer> solve(int[] nums, int k) {
        Map<Integer, Integer> counts = new HashMap<>();
        for (int n : nums) {
            counts.merge(n, 1, Integer::sum);
        }
        List<Map.Entry<Integer, Integer>> entries = new ArrayList<>(counts.entrySet());
        entries.sort(Comparator.<Map.Entry<Integer, Integer>>comparingInt(e -> e.getValue())
                .reversed()
                .thenComparingInt(Map.Entry::getKey));
        List<Integer> out = new ArrayList<>();
        for (int i = 0; i < k && i < entries.size(); i++) {
            out.add(entries.get(i).getKey());
        }
        return out;
    }
}
