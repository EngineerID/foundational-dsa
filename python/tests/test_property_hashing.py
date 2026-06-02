"""Property tests: hash tables match dict oracle (100 trials)."""

from dsa.hashing.open_addressing import HashTableOpenAddressing, ProbingStrategy
from dsa.hashing.separate_chaining import HashTableChaining

from _property_helpers import PROPERTY_TRIALS, seeded_rng


def _run_table_property(table_factory):
    rng = seeded_rng()
    for _ in range(PROPERTY_TRIALS):
        table = table_factory()
        ref: dict[int, int] = {}
        for _ in range(rng.randint(20, 80)):
            op = rng.randint(0, 2)
            key = rng.randint(0, 30)
            if op == 0:
                val = rng.randint(0, 100)
                table.put(key, val)
                ref[key] = val
            elif op == 1:
                assert table.get(key) == ref.get(key)
            else:
                table.remove(key)
                ref.pop(key, None)
            for k, v in ref.items():
                assert table.get(k) == v


def test_separate_chaining_property():
    _run_table_property(HashTableChaining)


def test_open_addressing_property():
    """Put/get vs dict; deletes omitted (tombstone paths covered by unit tests)."""
    rng = seeded_rng()
    for _ in range(PROPERTY_TRIALS):
        table = HashTableOpenAddressing(ProbingStrategy.LINEAR)
        ref: dict[int, int] = {}
        for _ in range(rng.randint(30, 100)):
            if rng.random() < 0.7:
                key = rng.randint(0, 40)
                val = rng.randint(0, 100)
                table.put(key, val)
                ref[key] = val
            else:
                key = rng.randint(0, 40)
                assert table.get(key) == ref.get(key)
        for k, v in ref.items():
            assert table.get(k) == v
