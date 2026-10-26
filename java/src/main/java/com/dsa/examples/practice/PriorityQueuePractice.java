// Practice — Min-priority queue scheduling

package com.dsa.examples.practice;

import com.dsa.examples.heaps.PriorityQueue;

import java.util.ArrayList;
import java.util.List;

public final class PriorityQueuePractice {

    private PriorityQueuePractice() {
    }

    public static int[] extractOrder(int[] inserts) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int v : inserts) {
            pq.insert(v);
        }
        List<Integer> out = new ArrayList<>();
        while (pq.size() > 0) {
            out.add(pq.extractMin());
        }
        return out.stream().mapToInt(Integer::intValue).toArray();
    }
}
