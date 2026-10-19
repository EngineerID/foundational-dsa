from dsa.linear.lru_cache import LRUCache


def test_get_put():
    c = LRUCache(1)
    c.put(1, 1)
    assert c.get(1) == 1
