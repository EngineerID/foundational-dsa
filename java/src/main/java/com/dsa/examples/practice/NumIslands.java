// Practice — Number of islands

package com.dsa.examples.practice;

import java.util.ArrayDeque;
import java.util.Deque;

public final class NumIslands {

    private NumIslands() {
    }

    public static int count(char[][] grid) {
        if (grid.length == 0 || grid[0].length == 0) {
            return 0;
        }
        int rows = grid.length;
        int cols = grid[0].length;
        int count = 0;
        int[][] dirs = { { -1, 0 }, { 1, 0 }, { 0, -1 }, { 0, 1 } };
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] != '1') {
                    continue;
                }
                count++;
                Deque<int[]> q = new ArrayDeque<>();
                q.add(new int[] { r, c });
                grid[r][c] = '0';
                while (!q.isEmpty()) {
                    int[] cell = q.removeFirst();
                    for (int[] d : dirs) {
                        int nr = cell[0] + d[0];
                        int nc = cell[1] + d[1];
                        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == '1') {
                            grid[nr][nc] = '0';
                            q.add(new int[] { nr, nc });
                        }
                    }
                }
            }
        }
        return count;
    }
}
