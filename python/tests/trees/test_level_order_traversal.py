from dsa.trees.level_order_traversal import level_order


def test_level_order():
    assert level_order([3, 9, 20, None, None, 15, 7]) == [[3], [9, 20], [15, 7]]
