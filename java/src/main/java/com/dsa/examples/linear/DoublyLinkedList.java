// Linear — Doubly Linked List

package com.dsa.examples.linear;

/**
 * Doubly linked list with forward and backward traversal.
 * addFirst/addLast O(1); get/remove at index O(n).
 */
public class DoublyLinkedList<T> {

    private static class Node<T> {
        T value;
        Node<T> prev;
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
    public DoublyLinkedList() {
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
        if (head == null) {
            head = tail = node;
        } else {
            node.next = head;
            head.prev = node;
            head = node;
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
            node.prev = tail;
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
        Node<T> node = nodeAt(index);
        if (node.prev != null) {
            node.prev.next = node.next;
        } else {
            head = node.next;
        }
        if (node.next != null) {
            node.next.prev = node.prev;
        } else {
            tail = node.prev;
        }
        size--;
        return node.value;
    }

    /**
     * Reverses the list in place.
     * Time: O(n); Space: O(1).
     */
    public void reverse() {
        Node<T> cur = head;
        Node<T> tmp = null;
        while (cur != null) {
            tmp = cur.prev;
            cur.prev = cur.next;
            cur.next = tmp;
            cur = cur.prev;
        }
        tmp = head;
        head = tail;
        tail = tmp;
    }

    Node<T> getHead() {
        return head;
    }

    Node<T> getTail() {
        return tail;
    }

    private Node<T> nodeAt(int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException(index);
        }
        if (index < size / 2) {
            Node<T> cur = head;
            for (int i = 0; i < index; i++) {
                cur = cur.next;
            }
            return cur;
        }
        Node<T> cur = tail;
        for (int i = size - 1; i > index; i--) {
            cur = cur.prev;
        }
        return cur;
    }
}
