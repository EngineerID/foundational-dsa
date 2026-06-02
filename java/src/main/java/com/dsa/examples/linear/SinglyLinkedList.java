// Linear — Singly Linked List

package com.dsa.examples.linear;

/**
 * Singly linked list.
 * addFirst/addLast O(1); get/remove at index O(n); reverse O(n).
 */
public class SinglyLinkedList<T> {

    private static class Node<T> {
        T value;
        Node<T> next;

        Node(T value) {
            this.value = value;
        }
    }

    private Node<T> head;
    private Node<T> tail;
    private int size;

    /**
     * Creates an empty list.
     * Time: O(1); Space: O(1).
     */
    public SinglyLinkedList() {
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
     * Inserts at the front.
     * Time: O(1); Space: O(1).
     */
    public void addFirst(T value) {
        Node<T> node = new Node<>(value);
        node.next = head;
        head = node;
        if (tail == null) {
            tail = head;
        }
        size++;
    }

    /**
     * Inserts at the back.
     * Time: O(1); Space: O(1).
     */
    public void addLast(T value) {
        Node<T> node = new Node<>(value);
        if (tail == null) {
            head = tail = node;
        } else {
            tail.next = node;
            tail = node;
        }
        size++;
    }

    /**
     * Returns the element at {@code index}.
     * Time: O(n); Space: O(1).
     */
    public T get(int index) {
        return nodeAt(index).value;
    }

    /**
     * Removes and returns the element at {@code index}.
     * Time: O(n); Space: O(1).
     */
    public T remove(int index) {
        if (index == 0) {
            T val = head.value;
            head = head.next;
            if (head == null) {
                tail = null;
            }
            size--;
            return val;
        }
        Node<T> prev = nodeAt(index - 1);
        Node<T> target = prev.next;
        prev.next = target.next;
        if (target == tail) {
            tail = prev;
        }
        size--;
        return target.value;
    }

    /**
     * Reverses the list in place.
     * Time: O(n); Space: O(1).
     */
    public void reverse() {
        Node<T> prev = null;
        Node<T> cur = head;
        tail = head;
        while (cur != null) {
            Node<T> next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        head = prev;
    }

    Node<T> getHead() {
        return head;
    }

    private Node<T> nodeAt(int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException(index);
        }
        Node<T> cur = head;
        for (int i = 0; i < index; i++) {
            cur = cur.next;
        }
        return cur;
    }
}
