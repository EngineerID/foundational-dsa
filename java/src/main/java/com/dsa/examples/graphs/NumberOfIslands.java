// Graphs — Number of islands

package com.dsa.examples.graphs;

import java.util.ArrayDeque;
import java.util.Deque;

/**
 * Count 4-connected land components in a binary grid ({@code '1'} land, {@code '0'} water).
 * Technique: BFS flood fill
 * Invariant: Each unvisited {@code '1'} starts one new component.
 * numIslands: Time O(rows·cols); Space O(rows·cols).
 */
public final class NumberOfIslands {

    private NumberOfIslands() {
    }

    /**
     * Does not mutate the caller's grid (works on a copy). {@code null} or empty → {@code 0}.
     * Time: O(rows·cols); Space O(rows·cols).
     */
    public static int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0 || grid[0].length == 0) {
            return 0;
        }
        int rows = grid.length;
        int cols = grid[0].length;
        char[][] copy = new char[rows][cols];
        for (int r = 0; r < rows; r++) {
            copy[r] = grid[r].clone();
        }
        int count = 0;
        int[][] dirs = { {-1, 0}, {1, 0}, {0, -1}, {0, 1} };
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (copy[r][c] != '1') {
                    continue;
                }
                count++;
                Deque<int[]> q = new ArrayDeque<>();
                q.add(new int[] {r, c});
                copy[r][c] = '0';
                while (!q.isEmpty()) {
                    int[] cell = q.removeFirst();
                    for (int[] d : dirs) {
                        int nr = cell[0] + d[0];
                        int nc = cell[1] + d[1];
                        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && copy[nr][nc] == '1') {
                            copy[nr][nc] = '0';
                            q.add(new int[] {nr, nc});
                        }
                    }
                }
            }
        }
        return count;
    }
}
