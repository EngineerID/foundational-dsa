// Linear — Stack (linked-list backed)

package com.dsa.examples.linear;

/**
 * LIFO stack backed by dynamic array.
 * Technique: Array stack
 * Invariant: Top index is size-1; pop only when non-empty.
 * push/pop/peek: Time O(1) amortized; Space O(n).
 */
public class Stack<T> {

    private final SinglyLinkedList<T> list = new SinglyLinkedList<>();

    /**
     * Pushes a value onto the stack.
     * Time: O(1); Space: O(1).
     */
    public void push(T value) {
        list.addFirst(value);
    }

    /**
     * Pops and returns the top value.
     * Time: O(1); Space: O(1).
     */
    public T pop() {
        if (isEmpty()) {
            throw new IllegalStateException("Stack is empty");
        }
        return list.remove(0);
    }

    /**
     * Returns the top without removing.
     * Time: O(1); Space: O(1).
     */
    public T peek() {
        if (isEmpty()) {
            throw new IllegalStateException("Stack is empty");
        }
        return list.get(0);
    }

    /**
     * Returns true if the stack has no elements.
     * Time: O(1); Space: O(1).
     */
    public boolean isEmpty() {
        return list.size() == 0;
    }
}
