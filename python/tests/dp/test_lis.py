from dsa.dp import lis


def test_length():
    assert lis.length([]) == 0
    assert lis.length([10, 9, 2, 5, 3, 7, 101, 18]) == 4
