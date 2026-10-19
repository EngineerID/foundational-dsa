# Searching — Reservoir sampling

"""Uniform random sample of size k from a stream (deterministic with seed).

Technique: Reservoir sampling
Invariant: Reservoir holds uniform k-subset of items seen.
sample: Time O(n); Space O(k).
"""

from __future__ import annotations

import random


def sample(stream: list[int], k: int, seed: int = 0) -> list[int]:
    """Returns k distinct items from stream (or all if len(stream) < k).

    Time: O(n); Space O(k).
    """
    if k < 0:
        raise ValueError("k must be non-negative")
    if k == 0:
        return []
    rng = random.Random(seed)
    res = list(stream[:k])
    for i in range(k, len(stream)):
        j = rng.randrange(i + 1)
        if j < k:
            res[j] = stream[i]
    return res
