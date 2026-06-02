package com.dsa.examples.linear;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class LinearStructuresTest {

    @Test
    void dynamicArray() {
        DynamicArray<Integer> arr = new DynamicArray<>();
        assertEquals(0, arr.size());
        arr.add(1);
        arr.add(2);
        assertEquals(1, arr.get(0));
        arr.set(1, 5);
        assertEquals(5, arr.remove(1));
        assertEquals(1, arr.size());
    }

    @Test
    void singlyLinkedList() {
        SinglyLinkedList<String> list = new SinglyLinkedList<>();
        list.addLast("a");
        list.addFirst("b");
        assertEquals("b", list.get(0));
        list.reverse();
        assertEquals("a", list.get(0));
        assertEquals("b", list.remove(1));
    }

    @Test
    void doublyLinkedList() {
        DoublyLinkedList<Integer> list = new DoublyLinkedList<>();
        list.addLast(1);
        list.addFirst(2);
        assertEquals(2, list.get(0));
        list.reverse();
        assertEquals(1, list.get(0));
    }

    @Test
    void stackAndQueue() {
        Stack<Integer> stack = new Stack<>();
        assertTrue(stack.isEmpty());
        stack.push(1);
        stack.push(2);
        assertEquals(2, stack.peek());
        assertEquals(2, stack.pop());

        Queue<String> q = new Queue<>();
        q.enqueue("x");
        q.enqueue("y");
        assertEquals("x", q.peek());
        assertEquals("x", q.dequeue());
    }

    @Test
    void deque() {
        Deque<Integer> d = new Deque<>();
        d.addFirst(1);
        d.addLast(2);
        assertEquals(1, d.removeFirst());
        assertEquals(2, d.removeLast());
        assertTrue(d.isEmpty());
    }
}
