// Linear — Deque (doubly-linked)

package com.dsa.examples.linear;

/**
 * Double-ended queue with O(1) push/pop at both ends.
 * Technique: Circular buffer deque
 * Invariant: head/tail wrap in fixed or growing buffer.
 * pushFront/pushBack/pop: Time O(1) amortized; Space O(n).
 */
public class Deque<T> {

    private final DoublyLinkedList<T> list = new DoublyLinkedList<>();

    /**
     * Inserts at the front.
     * Time: O(1); Space: O(1).
     */
    public void addFirst(T value) {
        list.addFirst(value);
    }

    /**
     * Inserts at the back.
     * Time: O(1); Space: O(1).
     */
    public void addLast(T value) {
        list.addLast(value);
    }

    /**
     * Removes and returns the front.
     * Time: O(1); Space: O(1).
     */
    public T removeFirst() {
        if (isEmpty()) {
            throw new IllegalStateException("Deque is empty");
        }
        return list.remove(0);
    }

    /**
     * Removes and returns the back.
     * Time: O(1); Space: O(1).
     */
    public T removeLast() {
        if (isEmpty()) {
            throw new IllegalStateException("Deque is empty");
        }
        return list.remove(list.size() - 1);
    }

    /**
     * Returns true if empty.
     * Time: O(1); Space: O(1).
     */
    public boolean isEmpty() {
        return list.size() == 0;
    }
}
