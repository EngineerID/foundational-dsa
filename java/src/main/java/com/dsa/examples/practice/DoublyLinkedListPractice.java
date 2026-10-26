// Practice — Doubly linked list operations

package com.dsa.examples.practice;

import com.dsa.examples.linear.DoublyLinkedList;

public final class DoublyLinkedListPractice {

    private final DoublyLinkedList<Integer> list = new DoublyLinkedList<>();

    public void addLast(int value) {
        list.addLast(value);
    }

    public void addFirst(int value) {
        list.addFirst(value);
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
