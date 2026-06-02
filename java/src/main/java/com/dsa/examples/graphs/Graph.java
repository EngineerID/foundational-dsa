// Graphs — Adjacency list representation

package com.dsa.examples.graphs;

import java.util.ArrayList;
import java.util.List;

/**
 * Graph with adjacency list (default). Adjacency matrix uses O(V²) space — less common for sparse graphs.
 */
public class Graph {

    /**
     * Weighted directed edge.
     */
    public record Edge(int to, int weight) {
    }

    private final int vertices;
    private final boolean directed;
    private final boolean weighted;
    private final List<List<Edge>> adj;

    /**
     * Creates a graph with {@code vertices} vertices (0..V-1).
     * Time: O(V); Space: O(V).
     */
    public Graph(int vertices, boolean directed, boolean weighted) {
        this.vertices = vertices;
        this.directed = directed;
        this.weighted = weighted;
        adj = new ArrayList<>(vertices);
        for (int i = 0; i < vertices; i++) {
            adj.add(new ArrayList<>());
        }
    }

    /**
     * Adds an edge; unweighted graphs use weight 1.
     * Time: O(1); Space: O(1).
     */
    public void addEdge(int from, int to, int weight) {
        int w = weighted ? weight : 1;
        adj.get(from).add(new Edge(to, w));
        if (!directed) {
            adj.get(to).add(new Edge(from, w));
        }
    }

    /**
     * Adds an unweighted edge (weight 1).
     * Time: O(1); Space: O(1).
     */
    public void addEdge(int from, int to) {
        addEdge(from, to, 1);
    }

    /**
     * Returns the number of vertices.
     * Time: O(1); Space: O(1).
     */
    public int vertices() {
        return vertices;
    }

    /**
     * Returns adjacency list of vertex {@code v}.
     * Time: O(1); Space: O(1).
     */
    public List<Edge> neighbors(int v) {
        return adj.get(v);
    }

    /**
     * Returns all edges as (from, to, weight) for algorithms like Kruskal.
     * Time: O(V+E); Space: O(E).
     */
    public List<int[]> allEdges() {
        List<int[]> edges = new ArrayList<>();
        for (int u = 0; u < vertices; u++) {
            for (Edge e : adj.get(u)) {
                if (directed || u < e.to()) {
                    edges.add(new int[]{u, e.to(), e.weight()});
                }
            }
        }
        return edges;
    }

    public boolean isDirected() {
        return directed;
    }

    public boolean isWeighted() {
        return weighted;
    }
}
