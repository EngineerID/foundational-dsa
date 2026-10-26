// Practice — Sparse table range queries

package com.dsa.examples.practice;

import com.dsa.examples.trees.SparseTable;

public final class SparseTablePractice {

    private final SparseTable table;

    public SparseTablePractice(int[] initial) {
        table = new SparseTable(initial);
    }

    public int query(int left, int right) {
        return table.query(left, right);
    }
}
