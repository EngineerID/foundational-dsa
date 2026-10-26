import pytest

from dsa.searching.two_sum_ii import two_sum_sorted


def test_two_sum_sorted():
    assert two_sum_sorted([2, 7, 11, 15], 9) == [1, 2]
    with pytest.raises(ValueError):
        two_sum_sorted([], 0)
