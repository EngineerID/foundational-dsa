// Heaps — Binary Min-Heap

package com.dsa.examples.heaps;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Array-based binary min-heap.
 * insert/extractMin/decreaseKey O(log n); heapify O(n); peek O(1).
 */
public class BinaryHeap<T extends Comparable<T>> {

    private final List<T> heap = new ArrayList<>();

    /**
     * Creates an empty heap.
     * Time: O(1); Space: O(1).
     */
    public BinaryHeap() {
    }

    /**
     * Returns the number of elements.
     * Time: O(1); Space: O(1).
     */
    public int size() {
        return heap.size();
    }

    /**
     * Returns the minimum without removing.
     * Time: O(1); Space: O(1).
     */
    public T peek() {
        if (heap.isEmpty()) {
            throw new IllegalStateException("Heap is empty");
        }
        return heap.get(0);
    }

    /**
     * Inserts a value.
     * Time: O(log n); Space: O(1).
     */
    public void insert(T value) {
        heap.add(value);
        siftUp(heap.size() - 1);
    }

    /**
     * Removes and returns the minimum.
     * Time: O(log n); Space: O(1).
     */
    public T extractMin() {
        if (heap.isEmpty()) {
            throw new IllegalStateException("Heap is empty");
        }
        T min = heap.get(0);
        T last = heap.remove(heap.size() - 1);
        if (!heap.isEmpty()) {
            heap.set(0, last);
            siftDown(0);
        }
        return min;
    }

    /**
     * Decreases the key at {@code index} to {@code newValue} (must be smaller).
     * Time: O(log n); Space: O(1).
     */
    public void decreaseKey(int index, T newValue) {
        if (index < 0 || index >= heap.size()) {
            throw new IndexOutOfBoundsException(index);
        }
        if (newValue.compareTo(heap.get(index)) > 0) {
            throw new IllegalArgumentException("New value must not be greater");
        }
        heap.set(index, newValue);
        siftUp(index);
    }

    /**
     * Returns the index of an element (for decreaseKey), or -1.
     * Time: O(n); Space: O(1).
     */
    public int indexOf(T value) {
        return heap.indexOf(value);
    }

    /**
     * Builds a min-heap from {@code items} in place on the internal array.
     * Time: O(n); Space: O(n).
     */
    public void heapify(List<T> items) {
        heap.clear();
        heap.addAll(items);
        for (int i = parent(heap.size() - 1); i >= 0; i--) {
            siftDown(i);
        }
    }

    /**
     * Builds a min-heap from an array.
     * Time: O(n); Space: O(n).
     */
    @SafeVarargs
    public final void heapify(T... items) {
        heapify(Arrays.asList(items));
    }

    private void siftUp(int index) {
        while (index > 0) {
            int p = parent(index);
            if (heap.get(index).compareTo(heap.get(p)) >= 0) {
                break;
            }
            swap(index, p);
            index = p;
        }
    }

    private void siftDown(int index) {
        int n = heap.size();
        while (true) {
            int left = leftChild(index);
            int right = rightChild(index);
            int smallest = index;
            if (left < n && heap.get(left).compareTo(heap.get(smallest)) < 0) {
                smallest = left;
            }
            if (right < n && heap.get(right).compareTo(heap.get(smallest)) < 0) {
                smallest = right;
            }
            if (smallest == index) {
                break;
            }
            swap(index, smallest);
            index = smallest;
        }
    }

    private static int parent(int i) {
        return (i - 1) / 2;
    }

    private static int leftChild(int i) {
        return 2 * i + 1;
    }

    private static int rightChild(int i) {
        return 2 * i + 2;
    }

    private void swap(int i, int j) {
        T t = heap.get(i);
        heap.set(i, heap.get(j));
        heap.set(j, t);
    }
}
