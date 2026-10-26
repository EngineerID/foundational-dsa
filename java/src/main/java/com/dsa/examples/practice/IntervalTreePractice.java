// Practice — Interval tree overlap query

package com.dsa.examples.practice;

import com.dsa.examples.trees.Interval;
import com.dsa.examples.trees.IntervalTree;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public final class IntervalTreePractice {

    private final IntervalTree tree = new IntervalTree();

    public void insert(int low, int high) {
        tree.insert(new Interval(low, high));
    }

    public List<List<Integer>> overlapSorted(int qLow, int qHigh) {
        List<Interval> found = tree.overlapSearch(new Interval(qLow, qHigh));
        List<List<Integer>> got = new ArrayList<>();
        for (Interval i : found) {
            got.add(List.of(i.low(), i.high()));
        }
        got.sort(Comparator.comparingInt((List<Integer> a) -> a.get(0)).thenComparingInt(a -> a.get(1)));
        return got;
    }
}
