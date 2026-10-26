// Practice — Singly linked list operations

package com.dsa.examples.practice;

import com.dsa.examples.linear.SinglyLinkedList;

public final class SinglyLinkedListPractice {

    private final SinglyLinkedList<Integer> list = new SinglyLinkedList<>();

    public void addLast(int value) {
        list.addLast(value);
    }

    public int get(int index) {
        return list.get(index);
    }

    public int remove(int index) {
        return list.remove(index);
    }

    public int size() {
        return list.size();
    }
}
