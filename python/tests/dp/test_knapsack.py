import pytest

from dsa.dp import knapsack


def test_max_value():
    assert knapsack.max_value([1, 2, 3], [6, 10, 12], 5) == 22


def test_invalid():
    with pytest.raises(ValueError):
        knapsack.max_value([1], [1, 2], 3)
