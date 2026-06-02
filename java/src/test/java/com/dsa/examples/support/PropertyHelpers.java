package com.dsa.examples.support;

import com.dsa.examples.heaps.BinaryHeap;
import com.dsa.examples.trees.BST;
import com.dsa.examples.trees.BSTNode;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Set;

/** Seeded property-test helpers (reproducible, no external libs). */
public final class PropertyHelpers {

    public static final int PROPERTY_TRIALS = 100;
    public static final int PROPERTY_SEED = 42;

    private PropertyHelpers() {
    }

    public static Random seededRng() {
        return new Random(PROPERTY_SEED);
    }

    public static boolean isSorted(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                return false;
            }
        }
        return true;
    }

    public static boolean isPermutation(int[] original, int[] result) {
        int[] a = original.clone();
        int[] b = result.clone();
        Arrays.sort(a);
        Arrays.sort(b);
        return Arrays.equals(a, b);
    }

    public static int[] randomIntArray(Random rng, int maxLen) {
        int n = rng.nextInt(maxLen + 1);
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = rng.nextInt(41) - 20;
        }
        return arr;
    }

    /** Verifies extracted mins are non-decreasing (heap property consequence). */
    public static boolean extractMinSorted(BinaryHeap<Integer> heap) throws Exception {
        List<Integer> out = new ArrayList<>();
        while (heap.size() > 0) {
            out.add(heap.extractMin());
        }
        for (int i = 1; i < out.size(); i++) {
            if (out.get(i) < out.get(i - 1)) {
                return false;
            }
        }
        return true;
    }

    public static List<Set<Integer>> bfsComponents(int n, List<int[]> edges) {
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }
        for (int[] e : edges) {
            adj.get(e[0]).add(e[1]);
            adj.get(e[1]).add(e[0]);
        }
        boolean[] seen = new boolean[n];
        List<Set<Integer>> comps = new ArrayList<>();
        for (int start = 0; start < n; start++) {
            if (seen[start]) {
                continue;
            }
            Set<Integer> comp = new HashSet<>();
            ArrayDeque<Integer> q = new ArrayDeque<>();
            q.add(start);
            seen[start] = true;
            while (!q.isEmpty()) {
                int u = q.removeFirst();
                comp.add(u);
                for (int v : adj.get(u)) {
                    if (!seen[v]) {
                        seen[v] = true;
                        q.add(v);
                    }
                }
            }
            comps.add(comp);
        }
        return comps;
    }

    public static int bruteMstWeight(int n, List<int[]> edges) {
        int[] parent = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
        List<int[]> sorted = new ArrayList<>(edges);
        sorted.sort(Comparator.comparingInt(e -> e[2]));
        int total = 0;
        int used = 0;
        for (int[] e : sorted) {
            int pu = find(parent, e[0]);
            int pv = find(parent, e[1]);
            if (pu != pv) {
                parent[pu] = pv;
                total += e[2];
                used++;
                if (used == n - 1) {
                    return total;
                }
            }
        }
        return 1_000_000_000;
    }

    private static int find(int[] parent, int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    public static boolean avlBalanced(BST<Integer, String> tree, BSTNode<Integer, String> node) {
        if (node == null) {
            return true;
        }
        int bf = height(node.left) - height(node.right);
        if (bf < -1 || bf > 1) {
            return false;
        }
        return avlBalanced(tree, node.left) && avlBalanced(tree, node.right);
    }

    private static int height(BSTNode<Integer, String> node) {
        if (node == null) {
            return 0;
        }
        return 1 + Math.max(height(node.left), height(node.right));
    }
}
