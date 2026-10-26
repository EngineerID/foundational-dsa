from dsa.searching.trapping_rain_water import trap


def test_trap():
    assert trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) == 6
    assert trap([]) == 0
