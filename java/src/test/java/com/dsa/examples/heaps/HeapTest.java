package com.dsa.examples.heaps;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class HeapTest {

    @Test
    void insertAndExtractMin() {
        BinaryHeap<Integer> heap = new BinaryHeap<>();
        heap.insert(5);
        heap.insert(2);
        heap.insert(8);
        assertEquals(2, heap.extractMin());
        assertEquals(5, heap.peek());
    }

    @Test
    void heapifyAndDecreaseKey() {
        BinaryHeap<Integer> heap = new BinaryHeap<>();
        heap.heapify(9, 4, 7, 1, 3);
        assertEquals(1, heap.peek());
        heap.decreaseKey(0, 0);
        assertEquals(0, heap.extractMin());
    }

    @Test
    void priorityQueue() {
        PriorityQueue<String> pq = new PriorityQueue<>();
        pq.insert("b");
        pq.insert("a");
        assertEquals("a", pq.extractMin());
        assertEquals("b", pq.extractMin());
        assertTrue(pq.isEmpty());
    }

    @Test
    void emptyExtractThrows() {
        assertThrows(IllegalStateException.class, () -> new BinaryHeap<Integer>().extractMin());
    }
}
