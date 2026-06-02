// Linear — Stack (linked-list backed)

package com.dsa.examples.linear;

/**
 * LIFO stack backed by {@link SinglyLinkedList}.
 * For production code, prefer {@code java.util.ArrayDeque}.
 * push/pop/peek O(1); Space: O(n).
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
