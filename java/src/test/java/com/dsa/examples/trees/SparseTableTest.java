package com.dsa.examples.trees;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class SparseTableTest {

    @Test
    void query() {
        SparseTable st = new SparseTable(new int[] {7, 2, 3, 0, 5, 8, 1, 6});
        assertEquals(0, st.query(3, 3));
        assertEquals(0, st.query(2, 5));
        assertThrows(IllegalArgumentException.class, () -> st.query(3, 2));
    }
}
