from dsa.trees.serialize_binary_tree import deserialize, serialize


def test_round_trip():
    values = [1, 2, 3, None, None, 4, 5]
    assert deserialize(serialize(values)) == values
    assert serialize(values) == "1,2,3,#,#,4,5"
