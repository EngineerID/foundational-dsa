import pytest

from dsa.searching.reservoir_sampling import sample


def test_sample():
    assert sample([1, 2, 3], 2, seed=1) == sample([1, 2, 3], 2, seed=1)
    assert len(sample([1, 2, 3], 2, seed=1)) == 2


def test_edge_themes():
    assert sample([], 3, seed=0) == []
    assert sample([1, 2, 3], 0, seed=0) == []
    assert sample([7], 1, seed=0) == [7]
    assert sample([1, 1, 2], 2, seed=0) == [2, 1]
    assert sample([1, 2, 3], 5, seed=0) == [1, 2, 3]
    with pytest.raises(ValueError):
        sample([1], -1, seed=0)
