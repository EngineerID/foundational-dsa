package com.dsa.examples.trees;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class SegmentTreeTest {

    @Test
    void rangeSumAndUpdate() {
        SegmentTree st = new SegmentTree(new int[] {1, 3, 5, 7});
        assertEquals(16, st.rangeSum(0, 3));
        st.update(1, 10);
        assertEquals(23, st.rangeSum(0, 3));
        assertEquals(10, st.rangeSum(1, 1));
    }

    @Test
    void emptyAndInvalid() {
        SegmentTree st = new SegmentTree(new int[0]);
        assertEquals(0, st.rangeSum(0, 0));
        SegmentTree st2 = new SegmentTree(new int[] {1});
        assertThrows(IndexOutOfBoundsException.class, () -> st2.rangeSum(1, 1));
    }
}
