package com.dsa.examples.dp;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class EditDistanceTest {

    @Test
    void distance() {
        assertEquals(3, EditDistance.distance("kitten", "sitting"));
        assertEquals(0, EditDistance.distance(null, ""));
    }
}
