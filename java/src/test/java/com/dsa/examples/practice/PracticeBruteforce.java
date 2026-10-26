package com.dsa.examples.practice;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/** Small-n brute-force references for {@link PracticePropertyTest}. */
final class PracticeBruteforce {

    static final int INF = Integer.MAX_VALUE / 4;

    private PracticeBruteforce() {
    }

    static int[] refSorted(int[] arr) {
        int[] out = arr.clone();
        Arrays.sort(out);
        return out;
    }

    static int refLinearSearch(int[] arr, int key) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == key) {
                return i;
            }
        }
        return -1;
    }

    static int refBinarySearch(int[] sorted, int key) {
        int lo = 0;
        int hi = sorted.length - 1;
        while (lo <= hi) {
            int mid = (lo + hi) >>> 1;
            if (sorted[mid] == key) {
                return mid;
            }
            if (sorted[mid] < key) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return -1;
    }

    static int[] refTwoSumSorted(int[] sorted, int target) {
        int lo = 0;
        int hi = sorted.length - 1;
        while (lo < hi) {
            int s = sorted[lo] + sorted[hi];
            if (s == target) {
                return new int[] {lo + 1, hi + 1};
            }
            if (s < target) {
                lo++;
            } else {
                hi--;
            }
        }
        return new int[] {-1, -1};
    }

    static int refTrap(int[] heights) {
        int left = 0;
        int right = heights.length - 1;
        int leftMax = 0;
        int rightMax = 0;
        int water = 0;
        while (left < right) {
            if (heights[left] <= heights[right]) {
                leftMax = Math.max(leftMax, heights[left]);
                water += leftMax - heights[left];
                left++;
            } else {
                rightMax = Math.max(rightMax, heights[right]);
                water += rightMax - heights[right];
                right--;
            }
        }
        return water;
    }

    static int refKthLargest(int[] nums, int k) {
        int[] copy = nums.clone();
        Arrays.sort(copy);
        return copy[copy.length - k];
    }

    static int refMaxSubarray(int[] nums) {
        int best = nums[0];
        int cur = nums[0];
        for (int i = 1; i < nums.length; i++) {
            cur = Math.max(nums[i], cur + nums[i]);
            best = Math.max(best, cur);
        }
        return best;
    }

    static int refCoinChange(int[] coins, int amount) {
        if (amount == 0) {
            return 0;
        }
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1);
        dp[0] = 0;
        for (int a = 1; a <= amount; a++) {
            for (int c : coins) {
                if (c <= a) {
                    dp[a] = Math.min(dp[a], dp[a - c] + 1);
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }

    static int refKnapsack(int[] weights, int[] values, int capacity) {
        int n = weights.length;
        int best = 0;
        for (int mask = 0; mask < 1 << n; mask++) {
            int w = 0;
            int v = 0;
            for (int i = 0; i < n; i++) {
                if ((mask & (1 << i)) != 0) {
                    w += weights[i];
                    v += values[i];
                }
            }
            if (w <= capacity) {
                best = Math.max(best, v);
            }
        }
        return best;
    }

    static int refLcs(String a, String b) {
        int[][] dp = new int[a.length() + 1][b.length() + 1];
        for (int i = 1; i <= a.length(); i++) {
            for (int j = 1; j <= b.length(); j++) {
                if (a.charAt(i - 1) == b.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[a.length()][b.length()];
    }

    static int refLis(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }
        int[] dp = new int[nums.length];
        Arrays.fill(dp, 1);
        int best = 1;
        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[j] < nums[i]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            best = Math.max(best, dp[i]);
        }
        return best;
    }

    static int refEditDistance(String a, String b) {
        int[][] dp = new int[a.length() + 1][b.length() + 1];
        for (int i = 0; i <= a.length(); i++) {
            dp[i][0] = i;
        }
        for (int j = 0; j <= b.length(); j++) {
            dp[0][j] = j;
        }
        for (int i = 1; i <= a.length(); i++) {
            for (int j = 1; j <= b.length(); j++) {
                int cost = a.charAt(i - 1) == b.charAt(j - 1) ? 0 : 1;
                dp[i][j] = Math.min(Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1), dp[i - 1][j - 1] + cost);
            }
        }
        return dp[a.length()][b.length()];
    }

    static int refMatrixChain(int[] dims) {
        int n = dims.length - 1;
        if (n <= 0) {
            return 0;
        }
        int[][] dp = new int[n][n];
        for (int len = 2; len <= n; len++) {
            for (int i = 0; i + len - 1 < n; i++) {
                int j = i + len - 1;
                dp[i][j] = Integer.MAX_VALUE / 2;
                for (int k = i; k < j; k++) {
                    int cost = dp[i][k] + dp[k + 1][j] + dims[i] * dims[k + 1] * dims[j + 1];
                    dp[i][j] = Math.min(dp[i][j], cost);
                }
            }
        }
        return dp[0][n - 1];
    }

    static int refRodCutting(int[] prices, int n) {
        int[] dp = new int[n + 1];
        for (int len = 1; len <= n; len++) {
            for (int i = 1; i <= len; i++) {
                dp[len] = Math.max(dp[len], prices[i - 1] + dp[len - i]);
            }
        }
        return dp[n];
    }

    static boolean refPartitionEqual(int[] nums) {
        int sum = 0;
        for (int x : nums) {
            sum += x;
        }
        if (sum % 2 != 0) {
            return false;
        }
        int target = sum / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        for (int x : nums) {
            for (int t = target; t >= x; t--) {
                dp[t] = dp[t] || dp[t - x];
            }
        }
        return dp[target];
    }

    static int refLps(String s) {
        int n = s.length();
        if (n == 0) {
            return 0;
        }
        int[][] dp = new int[n][n];
        for (int i = n - 1; i >= 0; i--) {
            dp[i][i] = 1;
            for (int j = i + 1; j < n; j++) {
                if (s.charAt(i) == s.charAt(j)) {
                    dp[i][j] = 2 + (i + 1 <= j - 1 ? dp[i + 1][j - 1] : 0);
                } else {
                    dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[0][n - 1];
    }

    static int[] refBfs(int n, int[][] edges, int source) {
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }
        for (int[] e : edges) {
            adj.get(e[0]).add(e[1]);
            adj.get(e[1]).add(e[0]);
        }
        int[] dist = new int[n];
        Arrays.fill(dist, -1);
        dist[source] = 0;
        ArrayDeque<Integer> q = new ArrayDeque<>();
        q.add(source);
        while (!q.isEmpty()) {
            int u = q.removeFirst();
            for (int v : adj.get(u)) {
                if (dist[v] == -1) {
                    dist[v] = dist[u] + 1;
                    q.addLast(v);
                }
            }
        }
        return dist;
    }

    static boolean refUfConnected(int n, int[][] unions, int a, int b) {
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }
        for (int[] e : unions) {
            adj.get(e[0]).add(e[1]);
            adj.get(e[1]).add(e[0]);
        }
        boolean[] seen = new boolean[n];
        ArrayDeque<Integer> q = new ArrayDeque<>();
        q.add(a);
        seen[a] = true;
        while (!q.isEmpty()) {
            int u = q.removeFirst();
            for (int v : adj.get(u)) {
                if (!seen[v]) {
                    seen[v] = true;
                    q.addLast(v);
                }
            }
        }
        return seen[b];
    }

    static int[] refDijkstra(int n, int[][] edges, int source) {
        List<List<int[]>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }
        for (int[] e : edges) {
            adj.get(e[0]).add(new int[] {e[1], e[2]});
        }
        int[] dist = new int[n];
        Arrays.fill(dist, INF);
        dist[source] = 0;
        boolean[] seen = new boolean[n];
        for (int iter = 0; iter < n; iter++) {
            int u = -1;
            int best = INF;
            for (int i = 0; i < n; i++) {
                if (!seen[i] && dist[i] < best) {
                    best = dist[i];
                    u = i;
                }
            }
            if (u == -1) {
                break;
            }
            seen[u] = true;
            for (int[] vw : adj.get(u)) {
                int v = vw[0];
                int w = vw[1];
                if (dist[u] + w < dist[v]) {
                    dist[v] = dist[u] + w;
                }
            }
        }
        return dist;
    }

    static int refNumIslands(char[][] grid) {
        char[][] g = new char[grid.length][];
        for (int i = 0; i < grid.length; i++) {
            g[i] = grid[i].clone();
        }
        int rows = g.length;
        int cols = rows == 0 ? 0 : g[0].length;
        int count = 0;
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (g[r][c] == '1') {
                    count++;
                    flood(g, r, c);
                }
            }
        }
        return count;
    }

    private static void flood(char[][] g, int r, int c) {
        int rows = g.length;
        int cols = g[0].length;
        if (r < 0 || c < 0 || r >= rows || c >= cols || g[r][c] == '0') {
            return;
        }
        g[r][c] = '0';
        flood(g, r + 1, c);
        flood(g, r - 1, c);
        flood(g, r, c + 1);
        flood(g, r, c - 1);
    }

    static boolean refCanFinish(int numCourses, int[][] edges) {
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < numCourses; i++) {
            adj.add(new ArrayList<>());
        }
        for (int[] e : edges) {
            adj.get(e[1]).add(e[0]);
        }
        int[] state = new int[numCourses];
        for (int i = 0; i < numCourses; i++) {
            if (!dfsCan(state, adj, i)) {
                return false;
            }
        }
        return true;
    }

    private static boolean dfsCan(int[] state, List<List<Integer>> adj, int u) {
        if (state[u] == 1) {
            return false;
        }
        if (state[u] == 2) {
            return true;
        }
        state[u] = 1;
        for (int v : adj.get(u)) {
            if (!dfsCan(state, adj, v)) {
                return false;
            }
        }
        state[u] = 2;
        return true;
    }

    static boolean refTopoValid(int n, int[][] edges, List<Integer> order) {
        if (order.size() != n) {
            return false;
        }
        int[] pos = new int[n];
        for (int i = 0; i < order.size(); i++) {
            pos[order.get(i)] = i;
        }
        for (int[] e : edges) {
            if (pos[e[0]] >= pos[e[1]]) {
                return false;
            }
        }
        return true;
    }

    static int refMstWeight(int n, int[][] edges) {
        int[] parent = new int[n];
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
        List<int[]> sorted = new ArrayList<>(Arrays.asList(edges));
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

    static boolean refBipartite(int n, int[][] edges) {
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }
        for (int[] e : edges) {
            adj.get(e[0]).add(e[1]);
            adj.get(e[1]).add(e[0]);
        }
        int[] color = new int[n];
        Arrays.fill(color, -1);
        for (int start = 0; start < n; start++) {
            if (color[start] != -1) {
                continue;
            }
            color[start] = 0;
            ArrayDeque<Integer> q = new ArrayDeque<>();
            q.add(start);
            while (!q.isEmpty()) {
                int u = q.removeFirst();
                for (int v : adj.get(u)) {
                    if (color[v] == -1) {
                        color[v] = color[u] ^ 1;
                        q.addLast(v);
                    } else if (color[v] == color[u]) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    static int refTsp(int[][] dist) {
        int n = dist.length;
        if (n <= 1) {
            return 0;
        }
        int[] perm = new int[n - 1];
        for (int i = 0; i < n - 1; i++) {
            perm[i] = i + 1;
        }
        return tspVisit(dist, perm, 0, Integer.MAX_VALUE / 2);
    }

    private static int tspVisit(int[][] dist, int[] perm, int k, int best) {
        if (k == perm.length) {
            int cost = 0;
            int prev = 0;
            for (int city : perm) {
                cost += dist[prev][city];
                prev = city;
            }
            cost += dist[prev][0];
            return Math.min(best, cost);
        }
        for (int i = k; i < perm.length; i++) {
            int tmp = perm[k];
            perm[k] = perm[i];
            perm[i] = tmp;
            best = tspVisit(dist, perm, k + 1, best);
            tmp = perm[k];
            perm[k] = perm[i];
            perm[i] = tmp;
        }
        return best;
    }
}
