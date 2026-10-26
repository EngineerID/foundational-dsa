package com.dsa.examples.trees;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class LevelOrderTraversalTest {

    @Test
    void levelOrder() {
        assertEquals(
                List.of(List.of(3), List.of(9, 20), List.of(15, 7)),
                LevelOrderTraversal.levelOrder(new Integer[] {3, 9, 20, null, null, 15, 7}));
    }
}
