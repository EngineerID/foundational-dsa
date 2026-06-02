// Heaps — Priority Queue (min)

package com.dsa.examples.heaps;

/**
 * Min-priority queue for scheduling by priority.
 * Technique: Binary min-heap priority queue
 * Invariant: Heap property on underlying BinaryHeap.
 * insert/extractMin/peek: Time O(log n); Space O(n).
 */
public class PriorityQueue<T extends Comparable<T>> {

    private final BinaryHeap<T> heap = new BinaryHeap<>();

    /**
     * Inserts a value with its priority (the value itself).
     * Time: O(log n); Space: O(1).
     */
    public void insert(T value) {
        heap.insert(value);
    }

    /**
     * Returns the minimum priority element.
     * Time: O(1); Space: O(1).
     */
    public T peek() {
        return heap.peek();
    }

    /**
     * Removes and returns the minimum.
     * Time: O(log n); Space: O(1).
     */
    public T extractMin() {
        return heap.extractMin();
    }

    /**
     * Decreases the key at {@code index}.
     * Time: O(log n); Space: O(1).
     */
    public void decreaseKey(int index, T newValue) {
        heap.decreaseKey(index, newValue);
    }

    /**
     * Returns whether the queue is empty.
     * Time: O(1); Space: O(1).
     */
    public boolean isEmpty() {
        return heap.size() == 0;
    }

    /**
     * Returns the underlying heap size.
     * Time: O(1); Space: O(1).
     */
    public int size() {
        return heap.size();
    }

    /**
     * Exposes the backing heap for algorithms that need index tracking.
     * Time: O(1); Space: O(1).
     */
    public BinaryHeap<T> heap() {
        return heap;
    }
}
