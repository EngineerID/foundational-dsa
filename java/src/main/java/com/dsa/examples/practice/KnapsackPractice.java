// Practice — 0/1 Knapsack maximum value

package com.dsa.examples.practice;

import com.dsa.examples.dp.Knapsack01;

public final class KnapsackPractice {

    private KnapsackPractice() {
    }

    public static int maxValue(int[] weights, int[] values, int capacity) {
        return Knapsack01.maxValue(weights, values, capacity);
    }
}
