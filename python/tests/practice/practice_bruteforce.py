"""Brute-force references for practice property tests (small n only)."""

from __future__ import annotations

INF = 2147483647 // 4


def ref_sorted(arr: list[int]) -> list[int]:
    return sorted(arr)


def ref_linear_search(arr: list[int], key: int) -> int:
    for i, x in enumerate(arr):
        if x == key:
            return i
    return -1


def ref_binary_search(sorted_arr: list[int], key: int) -> int:
    lo, hi = 0, len(sorted_arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if sorted_arr[mid] == key:
            return mid
        if sorted_arr[mid] < key:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1


def ref_two_sum_sorted(sorted_arr: list[int], target: int) -> list[int]:
    lo, hi = 0, len(sorted_arr) - 1
    while lo < hi:
        s = sorted_arr[lo] + sorted_arr[hi]
        if s == target:
            return [lo + 1, hi + 1]
        if s < target:
            lo += 1
        else:
            hi -= 1
    return [-1, -1]


def ref_trap(heights: list[int]) -> int:
    left, right = 0, len(heights) - 1
    left_max = right_max = water = 0
    while left < right:
        if heights[left] <= heights[right]:
            left_max = max(left_max, heights[left])
            water += left_max - heights[left]
            left += 1
        else:
            right_max = max(right_max, heights[right])
            water += right_max - heights[right]
            right -= 1
    return water


def ref_kth_largest(nums: list[int], k: int) -> int:
    return sorted(nums)[-k]


def ref_max_subarray(nums: list[int]) -> int:
    best = cur = nums[0]
    for x in nums[1:]:
        cur = max(x, cur + x)
        best = max(best, cur)
    return best


def ref_coin_change(coins: list[int], amount: int) -> int:
    if amount == 0:
        return 0
    dp = [10**9] * (amount + 1)
    dp[0] = 0
    for a in range(1, amount + 1):
        for c in coins:
            if c <= a:
                dp[a] = min(dp[a], dp[a - c] + 1)
    return -1 if dp[amount] >= 10**9 else dp[amount]


def ref_knapsack(weights: list[int], values: list[int], capacity: int) -> int:
    n = len(weights)
    best = 0
    for mask in range(1 << n):
        w = v = 0
        for i in range(n):
            if mask & (1 << i):
                w += weights[i]
                v += values[i]
        if w <= capacity:
            best = max(best, v)
    return best


def ref_lcs(a: str, b: str) -> int:
    dp = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]
    for i in range(1, len(a) + 1):
        for j in range(1, len(b) + 1):
            if a[i - 1] == b[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[len(a)][len(b)]


def ref_lis(nums: list[int]) -> int:
    if not nums:
        return 0
    dp = [1] * len(nums)
    for i in range(len(nums)):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    return max(dp)


def ref_edit_distance(a: str, b: str) -> int:
    dp = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]
    for i in range(len(a) + 1):
        dp[i][0] = i
    for j in range(len(b) + 1):
        dp[0][j] = j
    for i in range(1, len(a) + 1):
        for j in range(1, len(b) + 1):
            cost = 0 if a[i - 1] == b[j - 1] else 1
            dp[i][j] = min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost)
    return dp[len(a)][len(b)]


def ref_matrix_chain(dims: list[int]) -> int:
    n = len(dims) - 1
    if n <= 0:
        return 0
    dp = [[0] * n for _ in range(n)]
    for length in range(2, n + 1):
        for i in range(n - length + 1):
            j = i + length - 1
            dp[i][j] = 10**18
            for k in range(i, j):
                cost = dp[i][k] + dp[k + 1][j] + dims[i] * dims[k + 1] * dims[j + 1]
                dp[i][j] = min(dp[i][j], cost)
    return dp[0][n - 1]


def ref_rod_cutting(prices: list[int], n: int) -> int:
    dp = [0] * (n + 1)
    for length in range(1, n + 1):
        for i in range(1, length + 1):
            dp[length] = max(dp[length], prices[i - 1] + dp[length - i])
    return dp[n]


def ref_partition_equal(nums: list[int]) -> bool:
    total = sum(nums)
    if total % 2:
        return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for x in nums:
        for t in range(target, x - 1, -1):
            dp[t] = dp[t] or dp[t - x]
    return dp[target]


def ref_lps(s: str) -> int:
    n = len(s)
    if n == 0:
        return 0
    dp = [[0] * n for _ in range(n)]
    for i in range(n - 1, -1, -1):
        dp[i][i] = 1
        for j in range(i + 1, n):
            if s[i] == s[j]:
                inner = dp[i + 1][j - 1] if i + 1 <= j - 1 else 0
                dp[i][j] = 2 + inner
            else:
                dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])
    return dp[0][n - 1]


def ref_bfs(n: int, edges: list[list[int]], source: int) -> list[int]:
    adj: list[list[int]] = [[] for _ in range(n)]
    for u, v in edges:
        adj[u].append(v)
        adj[v].append(u)
    dist = [-1] * n
    dist[source] = 0
    q = [source]
    for u in q:
        for v in adj[u]:
            if dist[v] == -1:
                dist[v] = dist[u] + 1
                q.append(v)
    return dist


def ref_uf_connected(n: int, unions: list[list[int]], a: int, b: int) -> bool:
    adj: list[list[int]] = [[] for _ in range(n)]
    for u, v in unions:
        adj[u].append(v)
        adj[v].append(u)
    seen = [False] * n
    q = [a]
    seen[a] = True
    for u in q:
        for v in adj[u]:
            if not seen[v]:
                seen[v] = True
                q.append(v)
    return seen[b]


def ref_dijkstra(n: int, edges: list[list[int]], source: int) -> list[int]:
    adj: list[list[tuple[int, int]]] = [[] for _ in range(n)]
    for u, v, w in edges:
        adj[u].append((v, w))
    dist = [INF] * n
    dist[source] = 0
    seen = [False] * n
    for _ in range(n):
        u = -1
        best = INF
        for i in range(n):
            if not seen[i] and dist[i] < best:
                best = dist[i]
                u = i
        if u == -1:
            break
        seen[u] = True
        for v, w in adj[u]:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
    return dist


def ref_num_islands(grid: list[list[str]]) -> int:
    g = [row[:] for row in grid]
    rows, cols = len(g), len(g[0]) if g else 0
    count = 0

    def dfs(r: int, c: int) -> None:
        if r < 0 or c < 0 or r >= rows or c >= cols or g[r][c] == "0":
            return
        g[r][c] = "0"
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)

    for r in range(rows):
        for c in range(cols):
            if g[r][c] == "1":
                count += 1
                dfs(r, c)
    return count


def ref_can_finish(num_courses: int, edges: list[list[int]]) -> bool:
    adj: list[list[int]] = [[] for _ in range(num_courses)]
    for a, b in edges:
        adj[b].append(a)
    state = [0] * num_courses

    def dfs(u: int) -> bool:
        if state[u] == 1:
            return False
        if state[u] == 2:
            return True
        state[u] = 1
        for v in adj[u]:
            if not dfs(v):
                return False
        state[u] = 2
        return True

    return all(dfs(i) for i in range(num_courses))


def ref_topo_valid(n: int, edges: list[list[int]], order: list[int]) -> bool:
    if len(order) != n:
        return False
    pos = {v: i for i, v in enumerate(order)}
    return all(pos[u] < pos[v] for u, v in edges)


def ref_mst_weight(n: int, edges: list[list[int]]) -> int:
    parent = list(range(n))

    def find(x: int) -> int:
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    total = used = 0
    for u, v, w in sorted(edges, key=lambda e: e[2]):
        pu, pv = find(u), find(v)
        if pu != pv:
            parent[pu] = pv
            total += w
            used += 1
            if used == n - 1:
                return total
    return 10**9


def ref_bipartite(n: int, edges: list[list[int]]) -> bool:
    adj: list[list[int]] = [[] for _ in range(n)]
    for u, v in edges:
        adj[u].append(v)
        adj[v].append(u)
    color = [-1] * n
    for start in range(n):
        if color[start] != -1:
            continue
        color[start] = 0
        q = [start]
        for u in q:
            for v in adj[u]:
                if color[v] == -1:
                    color[v] = color[u] ^ 1
                    q.append(v)
                elif color[v] == color[u]:
                    return False
    return True


def ref_tsp(dist: list[list[int]]) -> int:
    n = len(dist)
    if n <= 1:
        return 0
    perm = list(range(1, n))
    best = 10**18

    def visit(k: int) -> None:
        nonlocal best
        if k == len(perm):
            cost = 0
            prev = 0
            for city in perm:
                cost += dist[prev][city]
                prev = city
            cost += dist[prev][0]
            best = min(best, cost)
            return
        for i in range(k, len(perm)):
            perm[k], perm[i] = perm[i], perm[k]
            visit(k + 1)
            perm[k], perm[i] = perm[i], perm[k]

    visit(0)
    return best
