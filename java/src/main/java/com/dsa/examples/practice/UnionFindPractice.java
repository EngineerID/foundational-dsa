// Practice — Union–find connectivity

package com.dsa.examples.practice;

import com.dsa.examples.unionfind.UnionFind;

public final class UnionFindPractice {

    private UnionFindPractice() {
    }

    public static boolean connected(int n, int[][] unions, int a, int b) {
        UnionFind uf = new UnionFind(n);
        for (int[] pair : unions) {
            uf.union(pair[0], pair[1]);
        }
        return uf.connected(a, b);
    }
}
