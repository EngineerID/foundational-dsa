import pytest

from dsa.linear.monotonic_stack import next_greater_element


def test_next_greater_element():
    assert next_greater_element([2, 1, 2, 4, 3]) == [4, 2, 4, -1, -1]
    assert next_greater_element([5]) == [-1]
    with pytest.raises(ValueError):
        next_greater_element([])
