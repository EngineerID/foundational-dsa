from dsa.dp import edit_distance


def test_distance():
    assert edit_distance.distance("kitten", "sitting") == 3
    assert edit_distance.distance(None, "") == 0
