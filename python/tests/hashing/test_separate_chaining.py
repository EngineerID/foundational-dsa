import pytest

from dsa.hashing.separate_chaining import HashTableChaining


def test_put_get_remove():
    ht = HashTableChaining()
    ht.put("a", 1)
    ht.put("b", 2)
    assert ht.get("a") == 1
    assert ht.remove("a") is True
    assert ht.get("a") is None
    assert ht.remove("missing") is False


def test_update_existing_key():
    ht = HashTableChaining()
    ht.put(1, "one")
    ht.put(1, "updated")
    assert ht.get(1) == "updated"
    assert ht.size() == 1


def test_resize_many_inserts():
    ht = HashTableChaining()
    for i in range(20):
        ht.put(i, f"v{i}")
    assert ht.size() == 20
    assert ht.get(10) == "v10"
    assert ht.get(19) == "v19"
