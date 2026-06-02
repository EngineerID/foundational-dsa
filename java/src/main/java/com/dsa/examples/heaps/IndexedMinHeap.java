// Heaps — Indexed min-heap (for Dijkstra decreaseKey by vertex id)

package com.dsa.examples.heaps;

import java.util.Arrays;

/**
 * Min-heap supporting {@link #decreaseKey(int, int)} by vertex/id index.
 * Same array-heap mechanics as {@link BinaryHeap}.
 * insert/extractMin/decreaseKey O(log n); Space: O(n).
 */
public class IndexedMinHeap {

    private final int[] heap;
    private final int[] pos;
    private final int[] keys;
    private int size;

    /**
     * Creates a heap for vertex ids 0..capacity-1.
     * Time: O(1); Space: O(capacity).
     */
    public IndexedMinHeap(int capacity) {
        heap = new int[capacity];
        pos = new int[capacity];
        keys = new int[capacity];
        Arrays.fill(pos, -1);
    }

    /**
     * Inserts or updates vertex with key.
     * Time: O(log n); Space: O(1).
     */
    public void insert(int vertex, int key) {
        if (pos[vertex] == -1) {
            heap[size] = vertex;
            pos[vertex] = size;
            keys[vertex] = key;
            size++;
            siftUp(size - 1);
        } else {
            decreaseKey(vertex, key);
        }
    }

    /**
     * Decreases key for vertex.
     * Time: O(log n); Space: O(1).
     */
    public void decreaseKey(int vertex, int key) {
        int i = pos[vertex];
        keys[vertex] = key;
        siftUp(i);
    }

    /**
     * Returns true if empty.
     * Time: O(1); Space: O(1).
     */
    public boolean isEmpty() {
        return size == 0;
    }

    /**
     * Extracts minimum vertex id.
     * Time: O(log n); Space: O(1).
     */
    public int extractMin() {
        int min = heap[0];
        swap(0, size - 1);
        size--;
        pos[min] = -1;
        if (size > 0) {
            siftDown(0);
        }
        return min;
    }

    private void siftUp(int i) {
        while (i > 0) {
            int p = (i - 1) / 2;
            if (keys[heap[i]] >= keys[heap[p]]) {
                break;
            }
            swap(i, p);
            i = p;
        }
    }

    private void siftDown(int i) {
        while (true) {
            int left = 2 * i + 1;
            int right = 2 * i + 2;
            int smallest = i;
            if (left < size && keys[heap[left]] < keys[heap[smallest]]) {
                smallest = left;
            }
            if (right < size && keys[heap[right]] < keys[heap[smallest]]) {
                smallest = right;
            }
            if (smallest == i) {
                break;
            }
            swap(i, smallest);
            i = smallest;
        }
    }

    private void swap(int i, int j) {
        int vi = heap[i];
        int vj = heap[j];
        heap[i] = vj;
        heap[j] = vi;
        pos[vi] = j;
        pos[vj] = i;
    }
}
