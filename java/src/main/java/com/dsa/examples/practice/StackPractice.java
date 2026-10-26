// Practice — LIFO stack

package com.dsa.examples.practice;

import com.dsa.examples.linear.Stack;

public final class StackPractice {

    private final Stack<Integer> stack = new Stack<>();

    public void push(int value) {
        stack.push(value);
    }

    public int pop() {
        return stack.pop();
    }

    public int peek() {
        return stack.peek();
    }

    public boolean isEmpty() {
        return stack.isEmpty();
    }
}
