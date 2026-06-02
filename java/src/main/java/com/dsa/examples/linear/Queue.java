// Linear — Queue (linked-list backed)

package com.dsa.examples.linear;

/**
 * FIFO queue backed by {@link SinglyLinkedList}.
 * For production code, prefer {@code java.util.ArrayDeque}.
 * enqueue/dequeue/peek O(1); Space: O(n).
 */
public class Queue<T> {

    private final SinglyLinkedList<T> list = new SinglyLinkedList<>();

    /**
     * Enqueues at the back.
     * Time: O(1); Space: O(1).
     */
    public void enqueue(T value) {
        list.addLast(value);
    }

    /**
     * Dequeues from the front.
     * Time: O(1); Space: O(1).
     */
    public T dequeue() {
        if (isEmpty()) {
            throw new IllegalStateException("Queue is empty");
        }
        return list.remove(0);
    }

    /**
     * Returns the front without removing.
     * Time: O(1); Space: O(1).
     */
    public T peek() {
        if (isEmpty()) {
            throw new IllegalStateException("Queue is empty");
        }
        return list.get(0);
    }

    /**
     * Returns true if the queue has no elements.
     * Time: O(1); Space: O(1).
     */
    public boolean isEmpty() {
        return list.size() == 0;
    }
}
