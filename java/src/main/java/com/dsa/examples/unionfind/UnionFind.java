// Union-Find (Disjoint Set)

package com.dsa.examples.unionfind;

/**
 * Disjoint-set connectivity with union and find.
 * Technique: Union-find (path compression, union by rank)
 * Invariant: Parent pointers form forest; ranks approximate tree height.
 * find/union/connected: Time O(α(n)) amortized; Space O(n).
 */
public class UnionFind {

    private final int[] parent;
    private final int[] rank;
    private int components;

    /**
     * Creates a structure for {@code n} elements labeled 0..n-1.
     * Time: O(n); Space: O(n).
     */
    public UnionFind(int n) {
        parent = new int[n];
        rank = new int[n];
        components = n;
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
    }

    /**
     * Finds the representative of {@code x} with path compression.
     * Time: ~O(α(n)); Space: O(1).
     */
    public int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    /**
     * Unites the sets containing {@code a} and {@code b} (weighted by rank).
     * Time: ~O(α(n)); Space: O(1).
     */
    public void union(int a, int b) {
        int ra = find(a);
        int rb = find(b);
        if (ra == rb) {
            return;
        }
        if (rank[ra] < rank[rb]) {
            parent[ra] = rb;
        } else if (rank[ra] > rank[rb]) {
            parent[rb] = ra;
        } else {
            parent[rb] = ra;
            rank[ra]++;
        }
        components--;
    }

    /**
     * Returns true if {@code a} and {@code b} are in the same set.
     * Time: ~O(α(n)); Space: O(1).
     */
    public boolean connected(int a, int b) {
        return find(a) == find(b);
    }

    /**
     * Returns the number of disjoint sets.
     * Time: O(1); Space: O(1).
     */
    public int countComponents() {
        return components;
    }
}
