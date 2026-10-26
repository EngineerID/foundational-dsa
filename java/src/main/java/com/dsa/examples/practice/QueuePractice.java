// Practice — FIFO queue

package com.dsa.examples.practice;

import com.dsa.examples.linear.Queue;

public final class QueuePractice {

    private final Queue<Integer> queue = new Queue<>();

    public void enqueue(int value) {
        queue.enqueue(value);
    }

    public int dequeue() {
        return queue.dequeue();
    }

    public int peek() {
        return queue.peek();
    }

    public boolean isEmpty() {
        return queue.isEmpty();
    }
}
