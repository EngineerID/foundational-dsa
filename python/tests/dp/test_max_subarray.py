import pytest

from dsa.dp import max_subarray


def test_max_subarray():
    assert max_subarray.max_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) == 6
    assert max_subarray.max_subarray([-2, -1]) == -1
    with pytest.raises(ValueError):
        max_subarray.max_subarray([])
