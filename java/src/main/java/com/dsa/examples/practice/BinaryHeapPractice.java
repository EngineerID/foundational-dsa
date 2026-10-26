// Practice — Binary min-heap insert and extract

package com.dsa.examples.practice;

import com.dsa.examples.heaps.BinaryHeap;

import java.util.ArrayList;
import java.util.List;

public final class BinaryHeapPractice {

    private BinaryHeapPractice() {
    }

    /** Returns elements in nondecreasing extractMin order after inserting all values. */
    public static int[] extractOrder(int[] inserts) {
        BinaryHeap<Integer> heap = new BinaryHeap<>();
        for (int v : inserts) {
            heap.insert(v);
        }
        List<Integer> out = new ArrayList<>();
        while (heap.size() > 0) {
            out.add(heap.extractMin());
        }
        return out.stream().mapToInt(Integer::intValue).toArray();
    }
}
