"""Seeded generators for practice property tests (25 trials, smaller inputs)."""

from __future__ import annotations

import random

from tests._property_helpers import seeded_rng

PRACTICE_PROPERTY_TRIALS = 25


def random_int_array(rng: random.Random, max_len: int = 15) -> list[int]:
    n = rng.randint(0, max_len)
    return [rng.randint(-10, 10) for _ in range(n)]


def random_sorted_array(rng: random.Random, max_len: int = 15) -> list[int]:
    arr = random_int_array(rng, max_len)
    arr.sort()
    return arr


def random_non_negative(rng: random.Random, max_len: int = 12) -> list[int]:
    n = rng.randint(0, max_len)
    return [rng.randint(0, 11) for _ in range(n)]


def random_string(rng: random.Random, max_len: int = 8) -> str:
    n = rng.randint(0, max_len)
    return "".join(chr(97 + rng.randint(0, 2)) for _ in range(n))
