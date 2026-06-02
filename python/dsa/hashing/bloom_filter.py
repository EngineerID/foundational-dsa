# Hashing — Bloom Filter

"""Probabilistic set membership: no false negatives, possible false positives.

add/might_contain O(k) where k is the number of hash functions.
"""

from __future__ import annotations

import math


class BloomFilter:
    """Bloom filter for string keys."""

    def __init__(self, expected_items: int, false_positive_rate: float) -> None:
        """Creates a bloom filter with capacity and false-positive rate target.

        Time: O(m); Space: O(m).
        """
        self._size = _optimal_size(expected_items, false_positive_rate)
        self._num_hashes = _optimal_hashes(self._size, expected_items)
        self._bits = [False] * self._size

    def add(self, item: str) -> None:
        """Adds an element (string key).

        Time: O(k); Space: O(1).
        """
        for i in range(self._num_hashes):
            self._bits[self._hash(item, i)] = True

    def might_contain(self, item: str) -> bool:
        """Returns True if the item might be present (false positives possible).

        Returns False if definitely absent.
        Time: O(k); Space: O(1).
        """
        return all(self._bits[self._hash(item, i)] for i in range(self._num_hashes))

    def _hash(self, item: str, seed: int) -> int:
        h = hash(item) ^ (seed * 0x9E3779B9)
        return h % self._size


def _optimal_size(n: int, p: float) -> int:
    return max(8, math.ceil(-n * math.log(p) / (math.log(2) ** 2)))


def _optimal_hashes(m: int, n: int) -> int:
    return max(1, round(m / n * math.log(2)))
