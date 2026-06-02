package com.dsa.examples.property;

import com.dsa.examples.trees.AVLTree;
import com.dsa.examples.trees.BST;
import com.dsa.examples.trees.BSTNode;
import com.dsa.examples.trees.Interval;
import com.dsa.examples.trees.IntervalTree;
import com.dsa.examples.trees.OrderStatisticTree;
import com.dsa.examples.support.PropertyHelpers;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;

import static com.dsa.examples.support.PropertyHelpers.PROPERTY_TRIALS;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class PropertyTreesTest {

    @Test
    void bstInOrderSorted() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < PROPERTY_TRIALS; t++) {
            BST<Integer, String> tree = new BST<>();
            int n = rng.nextInt(25);
            for (int i = 0; i < n; i++) {
                tree.insert(rng.nextInt(51), "v");
            }
            List<Integer> keys = tree.inOrder();
            for (int i = 1; i < keys.size(); i++) {
                assertTrue(keys.get(i - 1) <= keys.get(i));
            }
        }
    }

    @Test
    void avlBalanceProperty() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < PROPERTY_TRIALS; t++) {
            AVLTree<Integer, String> tree = new AVLTree<>();
            for (int i = 0; i < rng.nextInt(30); i++) {
                tree.insert(rng.nextInt(41), "v");
            }
            if (tree.getRoot() != null) {
                assertTrue(PropertyHelpers.avlBalanced(tree, tree.getRoot()));
            }
        }
    }

    @Test
    void orderStatisticRankSelect() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < PROPERTY_TRIALS; t++) {
            OrderStatisticTree<Integer, String> ost = new OrderStatisticTree<>();
            Set<Integer> keys = new HashSet<>();
            int m = 1 + rng.nextInt(20);
            for (int i = 0; i < m; i++) {
                keys.add(rng.nextInt(31));
            }
            for (int k : keys) {
                ost.insert(k, "v");
            }
            List<Integer> sorted = new ArrayList<>(keys);
            sorted.sort(Integer::compareTo);
            for (int k = 1; k <= sorted.size(); k++) {
                int key = ost.select(k);
                assertEquals(k, ost.rank(key));
            }
        }
    }

    @Test
    void intervalOverlapProperty() {
        Random rng = PropertyHelpers.seededRng();
        for (int t = 0; t < PROPERTY_TRIALS; t++) {
            IntervalTree tree = new IntervalTree();
            List<Interval> intervals = new ArrayList<>();
            for (int i = 0; i < rng.nextInt(15); i++) {
                int lo = rng.nextInt(21);
                int hi = lo + rng.nextInt(6);
                Interval iv = new Interval(lo, hi);
                intervals.add(iv);
                tree.insert(iv);
            }
            int qLo = rng.nextInt(16);
            int qHi = qLo + rng.nextInt(9);
            Interval query = new Interval(qLo, qHi);
            List<Interval> got = tree.overlapSearch(query);
            Set<String> gotSet = new HashSet<>();
            for (Interval iv : got) {
                gotSet.add(iv.low() + "," + iv.high());
            }
            Set<String> expected = new HashSet<>();
            for (Interval iv : intervals) {
                if (iv.overlaps(query)) {
                    expected.add(iv.low() + "," + iv.high());
                }
            }
            assertEquals(expected, gotSet);
        }
    }
}
