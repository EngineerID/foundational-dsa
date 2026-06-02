// Linear — Dynamic Array

package com.dsa.examples.linear;

import java.util.Arrays;

/**
 * Resizable array-backed list with amortized append.
 * Technique: Dynamic array doubling
 * Invariant: size <= capacity; length tracks element count.
 * append/get/set: Time O(1) amortized; resize O(n); Space O(n).
 */
public class DynamicArray<T> {

    private static final int DEFAULT_CAPACITY = 4;
    private Object[] data;
    private int size;

    /**
     * Creates an empty dynamic array.
     * Time: O(1); Space: O(1).
     */
    public DynamicArray() {
        data = new Object[DEFAULT_CAPACITY];
        size = 0;
    }

    /**
     * Returns the number of elements.
     * Time: O(1); Space: O(1).
     */
    public int size() {
        return size;
    }

    /**
     * Appends an element (amortized O(1)).
     * Time: amortized O(1); Space: O(n) when resize.
     */
    @SuppressWarnings("unchecked")
    public void add(T value) {
        ensureCapacity(size + 1);
        data[size++] = value;
    }

    /**
     * Returns the element at {@code index}.
     * Time: O(1); Space: O(1).
     */
    @SuppressWarnings("unchecked")
    public T get(int index) {
        checkIndex(index);
        return (T) data[index];
    }

    /**
     * Sets the element at {@code index}.
     * Time: O(1); Space: O(1).
     */
    public void set(int index, T value) {
        checkIndex(index);
        data[index] = value;
    }

    /**
     * Removes and returns the element at {@code index}.
     * Time: O(n); Space: O(1).
     */
    @SuppressWarnings("unchecked")
    public T remove(int index) {
        checkIndex(index);
        T removed = (T) data[index];
        for (int i = index; i < size - 1; i++) {
            data[i] = data[i + 1];
        }
        data[--size] = null;
        return removed;
    }

    private void ensureCapacity(int minCapacity) {
        if (minCapacity <= data.length) {
            return;
        }
        int newCap = Math.max(data.length * 2, minCapacity);
        data = Arrays.copyOf(data, newCap);
    }

    private void checkIndex(int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException(index);
        }
    }
}
