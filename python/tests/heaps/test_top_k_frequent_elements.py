import pytest

from dsa.heaps.top_k_frequent_elements import top_k_frequent


def test_top_k_frequent():
    assert top_k_frequent([1, 1, 1, 2, 2, 3], 2) == [1, 2]
    with pytest.raises(ValueError):
        top_k_frequent([], 1)
