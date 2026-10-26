"""Small-n brute-force references for practice property phase 2 tests."""

from __future__ import annotations

from collections import OrderedDict

from dsa.graphs.dfs import traverse_recursive
from dsa.graphs.graph import Graph
from dsa.searching.reservoir_sampling import sample as reservoir_sample_ref
from dsa.trees import tree_traversals
from dsa.trees.bst import BST
from practice import practice_bruteforce as bf1

INF = bf1.INF

_PAIRS = {")": "(", "]": "[", "}": "{"}


def ref_valid_parentheses(s: str) -> bool:
    stack: list[str] = []
    for ch in s:
        if ch in "([{":
            stack.append(ch)
        elif ch in ")]}":
            if not stack or stack.pop() != _PAIRS[ch]:
                return False
        else:
            return False
    return len(stack) == 0


def ref_min_meeting_rooms(intervals: list[list[int]]) -> int:
    if not intervals:
        return 0
    starts = sorted(x[0] for x in intervals)
    ends = sorted(x[1] for x in intervals)
    rooms = 0
    max_rooms = 0
    i = j = 0
    while i < len(starts):
        if starts[i] < ends[j]:
            rooms += 1
            i += 1
        else:
            rooms -= 1
            j += 1
        max_rooms = max(max_rooms, rooms)
    return max_rooms


def ref_top_k_frequent(nums: list[int], k: int) -> list[int]:
    counts: dict[int, int] = {}
    for n in nums:
        counts[n] = counts.get(n, 0) + 1
    entries = sorted(counts.items(), key=lambda x: (-x[1], x[0]))
    return [num for num, _ in entries[:k]]


def ref_length_of_longest_substring(s: str) -> int:
    best = 0
    for i in range(len(s)):
        seen: set[str] = set()
        for j in range(i, len(s)):
            if s[j] in seen:
                break
            seen.add(s[j])
            best = max(best, j - i + 1)
    return best


class RefLRU:
    def __init__(self, capacity: int) -> None:
        self._cap = capacity
        self._map: OrderedDict[int, int] = OrderedDict()

    def get(self, key: int) -> int:
        if key not in self._map:
            return -1
        self._map.move_to_end(key)
        return self._map[key]

    def put(self, key: int, value: int) -> None:
        if key in self._map:
            del self._map[key]
        elif len(self._map) >= self._cap:
            self._map.popitem(last=False)
        self._map[key] = value


def ref_merge_intervals(intervals: list[list[int]]) -> list[list[int]]:
    if not intervals:
        return []
    sorted_iv = sorted([x[:] for x in intervals], key=lambda x: x[0])
    merged = [sorted_iv[0][:]]
    for start, end in sorted_iv[1:]:
        last = merged[-1]
        if start <= last[1]:
            last[1] = max(last[1], end)
        else:
            merged.append([start, end])
    return merged


def ref_level_order(values: list[int | None]) -> list[list[int]]:
    if not values or values[0] is None:
        return []
    root: dict = {"val": values[0], "left": None, "right": None}
    q = [root]
    i = 1
    while q and i < len(values):
        node = q.pop(0)
        if i < len(values) and values[i] is not None:
            node["left"] = {"val": values[i], "left": None, "right": None}
            q.append(node["left"])
        i += 1
        if i < len(values) and values[i] is not None:
            node["right"] = {"val": values[i], "left": None, "right": None}
            q.append(node["right"])
        i += 1
    out: list[list[int]] = []
    bfs = [root]
    while bfs:
        level: list[int] = []
        size = len(bfs)
        for _ in range(size):
            node = bfs.pop(0)
            level.append(node["val"])
            if node["left"]:
                bfs.append(node["left"])
            if node["right"]:
                bfs.append(node["right"])
        out.append(level)
    return out


def ref_word_search(board: list[list[str]], word: str) -> bool:
    if not word:
        return True
    rows, cols = len(board), len(board[0])
    g = [row[:] for row in board]

    def dfs(r: int, c: int, idx: int) -> bool:
        if idx == len(word):
            return True
        if r < 0 or c < 0 or r >= rows or c >= cols or g[r][c] != word[idx]:
            return False
        tmp = g[r][c]
        g[r][c] = "#"
        ok = (
            dfs(r + 1, c, idx + 1)
            or dfs(r - 1, c, idx + 1)
            or dfs(r, c + 1, idx + 1)
            or dfs(r, c - 1, idx + 1)
        )
        g[r][c] = tmp
        return ok

    for r in range(rows):
        for c in range(cols):
            if dfs(r, c, 0):
                return True
    return False


def ref_level_order_flat(values: list[int | None]) -> list[int | None]:
    if not values or values[0] is None:
        return []
    root: dict = {"val": values[0], "left": None, "right": None}
    q = [root]
    i = 1
    while q and i < len(values):
        node = q.pop(0)
        if i < len(values) and values[i] is not None:
            node["left"] = {"val": values[i], "left": None, "right": None}
            q.append(node["left"])
        i += 1
        if i < len(values) and values[i] is not None:
            node["right"] = {"val": values[i], "left": None, "right": None}
            q.append(node["right"])
        i += 1
    out: list[int | None] = []
    bfs: list = [root]
    while bfs:
        node = bfs.pop(0)
        if node is None:
            out.append(None)
            continue
        out.append(node["val"])
        bfs.append(node.get("left"))
        bfs.append(node.get("right"))
    while out and out[-1] is None:
        out.pop()
    return out


def ref_serialize_deserialize(values: list[int | None]) -> list[int | None]:
    parts = ["#" if v is None else str(v) for v in values]
    while parts and parts[-1] == "#":
        parts.pop()
    data = ",".join(parts)
    if not data:
        return []
    vals = [None if t == "#" else int(t) for t in data.split(",")]
    return ref_level_order_flat(vals)


def ref_max_sliding_window(nums: list[int], k: int) -> list[int]:
    if k <= 0:
        raise ValueError("k must be positive")
    n = len(nums)
    if n == 0:
        return []
    out: list[int] = []
    for i in range(k - 1, n):
        best = nums[i - k + 1]
        for j in range(i - k + 2, i + 1):
            best = max(best, nums[j])
        out.append(best)
    return out


def ref_kmp_first(text: str, pattern: str) -> int:
    if not pattern:
        return 0
    return text.find(pattern)


def ref_trie_search(words: list[str], word: str) -> bool:
    return word in words


def ref_trie_starts_with(words: list[str], prefix: str) -> bool:
    if prefix == "":
        return True
    return any(w.startswith(prefix) for w in words)


def ref_binary_heap_extract_order(inserts: list[int]) -> list[int]:
    return sorted(inserts)


def ref_dfs_times(n: int, edges: list[list[int]], source: int, directed: bool):
    g = Graph(n, directed=directed, weighted=False)
    for u, v in edges:
        g.add_edge(u, v)
    return traverse_recursive(g, source)


def ref_priority_queue_extract_order(inserts: list[int]) -> list[int]:
    return sorted(inserts)


def ref_next_greater(nums: list[int]) -> list[int]:
    out = [-1] * len(nums)
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[j] > nums[i]:
                out[i] = nums[j]
                break
    return out


def ref_bst_state(inserts: list[list], search_key: int) -> dict:
    m = {key: value for key, value in inserts}
    in_order_keys = sorted(m.keys())
    search_value = m.get(search_key)
    return {"in_order_keys": in_order_keys, "search_value": search_value}


def ref_stack_sim(push: list[int], pop_count: int) -> dict:
    stack = list(push)
    pops = [stack.pop() for _ in range(pop_count)]
    return {
        "pops": pops,
        "empty": len(stack) == 0,
        "peek": stack[-1] if stack else None,
    }


def ref_queue_sim(enqueue: list[int], dequeue_count: int) -> dict:
    q = list(enqueue)
    dequeues = [q.pop(0) for _ in range(dequeue_count)]
    return {
        "dequeues": dequeues,
        "empty": len(q) == 0,
        "peek": q[0] if q else None,
    }


def ref_deque_sim(
    add_last: list[int], add_first: list[int], remove_first: bool, remove_last: bool
) -> dict:
    dq: list[int] = []
    dq.extend(add_last)
    for v in add_first:
        dq.insert(0, v)
    rf = dq.pop(0) if remove_first and dq else None
    rl = dq.pop() if remove_last and dq else None
    remaining = dq.pop(0) if dq else None
    return {
        "remove_first": rf,
        "remove_last": rl,
        "remaining_value": remaining,
        "empty": len(dq) == 0,
    }


def ref_rabin_first(text: str, pattern: str) -> int:
    return text.find(pattern)


def ref_fenwick_state(
    n: int, adds: list[list[int]], prefix_at: list[int], range_queries: list[list[int]]
) -> dict:
    arr = [0] * n
    for idx, delta in adds:
        arr[idx] += delta
    prefix = [sum(arr[: i + 1]) for i in prefix_at]
    ranges = [sum(arr[l : r + 1]) for l, r in range_queries]
    return {"prefix": prefix, "ranges": ranges}


def ref_graph_neighbors(
    n: int, directed: bool, weighted: bool, edges: list[list[int]]
) -> list[list[dict]]:
    adj: list[list[dict]] = [[] for _ in range(n)]
    for e in edges:
        u, v = e[0], e[1]
        w = e[2] if len(e) == 3 else 1
        adj[u].append({"to": v, "weight": w} if weighted else {"to": v})
        if not directed:
            adj[v].append({"to": u, "weight": w} if weighted else {"to": u})
    for lst in adj:
        lst.sort(key=lambda x: x["to"])
    return adj


def ref_kosaraju_component_sizes(n: int, edges: list[list[int]]) -> list[int]:
    adj: list[list[int]] = [[] for _ in range(n)]
    for u, v in edges:
        adj[u].append(v)
    visited = [False] * n
    order: list[int] = []

    def dfs1(v: int) -> None:
        visited[v] = True
        for w in adj[v]:
            if not visited[w]:
                dfs1(w)
        order.append(v)

    for v in range(n):
        if not visited[v]:
            dfs1(v)
    rev: list[list[int]] = [[] for _ in range(n)]
    for u in range(n):
        for w in adj[u]:
            rev[w].append(u)
    visited = [False] * n
    sizes: list[int] = []

    def dfs2(v: int, comp: list[int]) -> None:
        visited[v] = True
        comp.append(v)
        for w in rev[v]:
            if not visited[w]:
                dfs2(w, comp)

    for v in reversed(order):
        if not visited[v]:
            comp: list[int] = []
            dfs2(v, comp)
            sizes.append(len(comp))
    return sorted(sizes)


def ref_max_flow(n: int, edges: list[list[int]], source: int, sink: int) -> int:
    if source == sink:
        return 0
    cap = [[0] * n for _ in range(n)]
    for u, v, c in edges:
        cap[u][v] += c
    flow = 0
    while True:
        parent = [-1] * n
        parent[source] = source
        q = [source]
        qi = 0
        while qi < len(q) and parent[sink] == -1:
            u = q[qi]
            qi += 1
            for v in range(n):
                if parent[v] == -1 and cap[u][v] > 0:
                    parent[v] = u
                    q.append(v)
        if parent[sink] == -1:
            break
        add = 10**18
        v = sink
        while v != source:
            add = min(add, cap[parent[v]][v])
            v = parent[v]
        v = sink
        while v != source:
            u = parent[v]
            cap[u][v] -= add
            cap[v][u] += add
            v = u
        flow += add
    return flow


def ref_dynamic_array(values: list[int], get_pairs: list[dict]) -> dict:
    arr = values[:]
    gets = [arr[p["index"]] for p in get_pairs]
    return {"size": len(arr), "gets": gets}


def ref_z_array(text: str) -> list[int]:
    n = len(text)
    if n == 0:
        return []
    z = [0] * n
    z[0] = n
    l = r = 0
    for i in range(1, n):
        if i <= r:
            z[i] = min(r - i + 1, z[i - l])
        while i + z[i] < n and text[z[i]] == text[i + z[i]]:
            z[i] += 1
        if i + z[i] - 1 > r:
            l, r = i, i + z[i] - 1
    return z


def ref_z_index(text: str, pattern: str) -> dict:
    idx = text.find(pattern) if pattern else 0
    return {"index": idx, "z": ref_z_array(text)}


def ref_longest_palindrome_length(s: str) -> int:
    best = 0
    for i in range(len(s)):
        lo, hi = i, i
        while lo >= 0 and hi < len(s) and s[lo] == s[hi]:
            best = max(best, hi - lo + 1)
            lo -= 1
            hi += 1
        lo, hi = i, i + 1
        while lo >= 0 and hi < len(s) and s[lo] == s[hi]:
            best = max(best, hi - lo + 1)
            lo -= 1
            hi += 1
    return best


def ref_aho_hits(text: str, patterns: list[str]) -> list[int]:
    hits: set[int] = set()
    for pat in patterns:
        if not pat:
            continue
        for i in range(len(text) - len(pat) + 1):
            if text[i : i + len(pat)] == pat:
                hits.add(i)
    return sorted(hits)


def ref_tree_map_search(inserts: list[list], search_key: int) -> dict:
    m = {key: value for key, value in inserts}
    return {
        "in_order_keys": sorted(m.keys()),
        "search_value": m.get(search_key),
    }


def ref_array_list_ops(
    add_last: list[int], add_first: list[int], get_index: int, remove_index: int
) -> dict:
    arr: list[int] = []
    arr.extend(add_last)
    for v in add_first:
        arr.insert(0, v)
    get_value = arr[get_index]
    remove_value = arr.pop(remove_index)
    return {"get_value": get_value, "remove_value": remove_value, "size_after": len(arr)}


def ref_tree_traversals(inserts: list[list]) -> dict:
    tree: BST[int, str] = BST()
    for key, value in inserts:
        tree.insert(key, value)
    return {
        "in_order": tree_traversals.in_order_recursive(tree.root),
        "pre_order": tree_traversals.pre_order_recursive(tree.root),
        "post_order": tree_traversals.post_order_recursive(tree.root),
    }


def ref_hash_map_ops(ops: list[list], get_key: int, remove_key: int) -> dict:
    m: dict = {}
    for op in ops:
        m[op[1]] = op[2]
    get_val = m.get(get_key)
    had_remove = remove_key in m
    if had_remove:
        del m[remove_key]
    after_remove = m.get(get_key)
    return {"get_val": get_val, "had_remove": had_remove, "after_remove": after_remove}


def ref_suffix_array(s: str) -> list[int]:
    suffixes = list(range(len(s)))
    suffixes.sort(key=lambda a: s[a:])
    return suffixes


def ref_treap_search(inserts: list[list], seed: int, search_keys: list[int]) -> dict:
    m = {key: value for key, value in inserts}
    return {key: m.get(key) for key in search_keys}


def ref_order_statistic(inserts: list[list], select_k: int, rank_keys: list[int]) -> dict:
    m = {k: v for k, v in inserts}
    keys = sorted(m.keys())
    select_key = keys[select_k - 1] if 1 <= select_k <= len(keys) else None
    ranks: dict[int, int] = {}
    for rk in rank_keys:
        if not keys:
            ranks[rk] = 0
        else:
            ranks[rk] = sum(1 for key in keys if key <= rk)
    return {"select_key": select_key, "ranks": ranks}


def ref_interval_overlap(intervals: list[list[int]], q_low: int, q_high: int) -> list[list[int]]:
    overlaps = [[low, high] for low, high in intervals if low <= q_high and q_low <= high]
    return sorted(overlaps, key=lambda x: (x[0], x[1]))


def ref_b_tree_search(keys: list[int], t: int, search_keys: list[int]) -> dict:
    key_set = set(keys)
    return {key: key in key_set for key in search_keys}


def ref_bloom_added_keys(added: list[str]) -> set[str]:
    return set(added)


def ref_a_star_path_length(n: int, edges: list[list[int]], source: int, goal: int) -> int:
    dist = bf1.ref_dijkstra(n, edges, source)
    d = dist[goal]
    return -1 if d >= INF else d


def ref_articulation_bridges(n: int, edges: list[list[int]]) -> dict:
    norm = [[min(u, v), max(u, v)] for u, v in edges]

    def connected_without_edge(ban: list[int] | None) -> list[bool]:
        adj: list[list[int]] = [[] for _ in range(n)]
        for u, v in norm:
            if ban and u == ban[0] and v == ban[1]:
                continue
            adj[u].append(v)
            adj[v].append(u)
        seen = [False] * n
        q = [0]
        seen[0] = True
        for u in q:
            for w in adj[u]:
                if not seen[w]:
                    seen[w] = True
                    q.append(w)
        return seen

    def connected_without_vertex(skip: int) -> int:
        adj: list[list[int]] = [[] for _ in range(n)]
        for u, v in norm:
            if u == skip or v == skip:
                continue
            adj[u].append(v)
            adj[v].append(u)
        comps = 0
        seen = [False] * n
        if skip >= 0:
            seen[skip] = True
        for i in range(n):
            if seen[i]:
                continue
            comps += 1
            q = [i]
            seen[i] = True
            for u in q:
                for w in adj[u]:
                    if not seen[w]:
                        seen[w] = True
                        q.append(w)
        return comps

    base_comps = connected_without_vertex(-1)
    ap = [v for v in range(n) if connected_without_vertex(v) > base_comps]
    bridges = []
    for u, v in norm:
        seen = connected_without_edge([u, v])
        if not seen[u] or not seen[v]:
            bridges.append([u, v])
    bridges.sort(key=lambda x: (x[0], x[1]))
    return {"articulation_points": ap, "bridges": bridges}


def ref_hungarian_min_cost(cost: list[list[int]]) -> int:
    n = len(cost)
    best = 10**18
    perm = list(range(n))

    def visit(k: int) -> None:
        nonlocal best
        if k == n:
            total = sum(cost[i][perm[i]] for i in range(n))
            best = min(best, total)
            return
        for i in range(k, n):
            perm[k], perm[i] = perm[i], perm[k]
            visit(k + 1)
            perm[k], perm[i] = perm[i], perm[k]

    visit(0)
    return best


def ref_lca(parent: list[int], u: int, v: int) -> int:
    ancestors: set[int] = set()
    x = u
    while True:
        ancestors.add(x)
        if x == parent[x]:
            break
        x = parent[x]
    y = v
    while y not in ancestors:
        y = parent[y]
    return y


def ref_sparse_table_min(initial: list[int], queries: list[list[int]]) -> list[int]:
    out: list[int] = []
    for l, r in queries:
        best = initial[l]
        for i in range(l + 1, r + 1):
            best = min(best, initial[i])
        out.append(best)
    return out


def ref_reservoir_sample(stream: list[int], k: int, seed: int) -> list[int]:
    return reservoir_sample_ref(stream, k, seed)


ref_mst_weight = bf1.ref_mst_weight
