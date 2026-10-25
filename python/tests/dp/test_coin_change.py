import pytest

from dsa.dp import coin_change


def test_min_coins():
    assert coin_change.min_coins([1, 2, 5], 11) == 3
    assert coin_change.min_coins([2], 3) == -1
    assert coin_change.min_coins([], 1) == -1


def test_invalid_coin():
    with pytest.raises(ValueError):
        coin_change.min_coins([0], 1)
