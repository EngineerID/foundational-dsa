// Practice — Edmonds-Karp max flow

package com.dsa.examples.practice;

import com.dsa.examples.graphs.EdmondsKarp;

public final class EdmondsKarpPractice {

    private EdmondsKarpPractice() {
    }

    public static int maxFlow(int n, int[][] edges, int source, int sink) {
        return EdmondsKarp.maxFlow(n, edges, source, sink);
    }
}
