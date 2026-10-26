// Practice — Order-statistic tree rank and select

package com.dsa.examples.practice;

import com.dsa.examples.trees.OrderStatisticTree;

public final class OrderStatisticTreePractice {

    private final OrderStatisticTree<Integer, String> tree = new OrderStatisticTree<>();

    public void insert(int key, String value) {
        tree.insert(key, value);
    }

    public int select(int k) {
        return tree.select(k);
    }

    public int rank(int key) {
        return tree.rank(key);
    }
}
