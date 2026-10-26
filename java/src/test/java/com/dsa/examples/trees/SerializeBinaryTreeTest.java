package com.dsa.examples.trees;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;

class SerializeBinaryTreeTest {

    @Test
    void roundTrip() {
        Integer[] values = {1, 2, 3, null, null, 4, 5};
        assertArrayEquals(values, SerializeBinaryTree.deserialize(SerializeBinaryTree.serialize(values)));
        assertEquals("1,2,3,#,#,4,5", SerializeBinaryTree.serialize(values));
    }
}
