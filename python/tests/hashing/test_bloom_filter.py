from dsa.hashing.bloom_filter import BloomFilter


def test_member_and_absent():
    bf = BloomFilter(100, 0.01)
    bf.add("hello")
    assert bf.might_contain("hello") is True
    assert bf.might_contain("missing") is False


def test_no_false_negative_after_many_adds():
    bf = BloomFilter(50, 0.05)
    words = [f"item{i}" for i in range(30)]
    for w in words:
        bf.add(w)
    for w in words:
        assert bf.might_contain(w) is True


def test_empty_filter_rejects_unknown():
    bf = BloomFilter(16, 0.1)
    assert bf.might_contain("anything") is False
