"""Shared helpers for seeded property tests (reproducible, no external deps)."""

from __future__ import annotations

import random
from collections import Counter, deque
from typing import Callable, Iterable

PROPERTY_TRIALS = 100
PROPERTY_SEED = 42


def seeded_rng() -> random.Random:
    return random.Random(PROPERTY_SEED)


def is_sorted(arr: list[int]) -> bool:
    return all(arr[i] <= arr[i + 1] for i in range(len(arr) - 1))


def is_permutation(original: list[int], result: list[int]) -> bool:
    return Counter(original) == Counter(result)


def random_int_array(rng: random.Random, max_len: int = 50) -> list[int]:
    n = rng.randint(0, max_len)
    return [rng.randint(-20, 20) for _ in range(n)]


def heap_min_invariant(heap: list[int]) -> bool:
    for i in range(len(heap)):
        left = 2 * i + 1
        right = 2 * i + 2
        if left < len(heap) and heap[left] < heap[i]:
            return False
        if right < len(heap) and heap[right] < heap[i]:
            return False
    return True


def bfs_components(n: int, edges: list[tuple[int, int]]) -> list[set[int]]:
    adj: list[list[int]] = [[] for _ in range(n)]
    for u, v in edges:
        adj[u].append(v)
        adj[v].append(u)
    seen = [False] * n
    comps: list[set[int]] = []
    for start in range(n):
        if seen[start]:
            continue
        comp: set[int] = set()
        q: deque[int] = deque([start])
        seen[start] = True
        while q:
            u = q.popleft()
            comp.add(u)
            for v in adj[u]:
                if not seen[v]:
                    seen[v] = True
                    q.append(v)
        comps.append(comp)
    return comps


def brute_mst_weight(n: int, edges: list[tuple[int, int, int]]) -> int:
    """Kruskal on small graphs for oracle."""
    parent = list(range(n))

    def find(x: int) -> int:
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    total = 0
    used = 0
    for w, u, v in sorted((w, u, v) for u, v, w in edges):
        pu, pv = find(u), find(v)
        if pu != pv:
            parent[pu] = pv
            total += w
            used += 1
            if used == n - 1:
                break
    return total if used == n - 1 else 10**9
