package com.dsa.examples.searching;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class LinearSearchTest {

    @Test
    void findsExistingKey() {
        assertEquals(1, LinearSearch.indexOf(new int[]{3, 7, 7, 1}, 7));
    }

    @Test
    void returnsMinusOneWhenAbsent() {
        assertEquals(-1, LinearSearch.indexOf(new int[]{1, 2, 3}, 5));
    }

    @Test
    void emptyArray() {
        assertEquals(-1, LinearSearch.indexOf(new int[]{}, 1));
    }

    @Test
    void singleElement() {
        assertEquals(0, LinearSearch.indexOf(new int[]{42}, 42));
        assertEquals(-1, LinearSearch.indexOf(new int[]{42}, 0));
    }

    @Test
    void duplicatesReturnsFirstMatch() {
        assertEquals(1, LinearSearch.indexOf(new int[]{1, 2, 2, 3}, 2));
    }
}
