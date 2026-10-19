from dsa.dp.matrix_chain import min_multiplications


def test_min_multiplications():
    assert min_multiplications([1, 2, 3]) == 6
