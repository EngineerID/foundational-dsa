// Practice — LCA via binary lifting

package com.dsa.examples.practice;

import com.dsa.examples.trees.LCABinaryLifting;

public final class LcaBinaryLiftingPractice {

    private final LCABinaryLifting lca;

    public LcaBinaryLiftingPractice(int[] parent) {
        lca = new LCABinaryLifting(parent);
    }

    public int query(int u, int v) {
        return lca.query(u, v);
    }
}
