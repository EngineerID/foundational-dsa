// Practice — Double-ended queue

package com.dsa.examples.practice;

import com.dsa.examples.linear.Deque;

public final class DequePractice {

    private final Deque<Integer> deque = new Deque<>();

    public void addLast(int value) {
        deque.addLast(value);
    }

    public void addFirst(int value) {
        deque.addFirst(value);
    }

    public int removeFirst() {
        return deque.removeFirst();
    }

    public int removeLast() {
        return deque.removeLast();
    }

    public boolean isEmpty() {
        return deque.isEmpty();
    }
}
