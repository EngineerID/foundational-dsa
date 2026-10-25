from dsa.dp.tsp_bitmask import min_cost


def test_min_cost():
    assert min_cost([[0, 1], [1, 0]]) == 2
