// Practice — Resizable dynamic array

package com.dsa.examples.practice;

import com.dsa.examples.linear.DynamicArray;

public final class DynamicArrayPractice {

    private final DynamicArray<Integer> array = new DynamicArray<>();

    public void add(int value) {
        array.add(value);
    }

    public int get(int index) {
        return array.get(index);
    }

    public int size() {
        return array.size();
    }
}
