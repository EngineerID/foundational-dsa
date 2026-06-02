import pytest

from dsa.hashing.open_addressing import HashTableOpenAddressing, ProbingStrategy


@pytest.mark.parametrize(
    "strategy",
    [
        ProbingStrategy.LINEAR,
        ProbingStrategy.QUADRATIC,
        ProbingStrategy.DOUBLE_HASHING,
    ],
)
def test_put_get_remove(strategy):
    table = HashTableOpenAddressing(strategy)
    table.put("a", 1)
    table.put("b", 2)
    assert table.get("a") == 1
    assert table.remove("a") is True
    assert table.get("a") is None


def test_update_and_probe_collision():
    table = HashTableOpenAddressing(ProbingStrategy.LINEAR)
    table.put("x", 10)
    table.put("x", 20)
    assert table.get("x") == 20


def test_remove_then_reinsert():
    table = HashTableOpenAddressing(ProbingStrategy.LINEAR)
    for i in range(12):
        table.put(i, i * 10)
    assert table.remove(5) is True
    assert table.get(5) is None
    table.put(5, 99)
    assert table.get(5) == 99
