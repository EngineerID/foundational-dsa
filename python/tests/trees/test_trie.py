from dsa.trees.trie import Trie


def test_trie_search_and_prefix():
    trie = Trie()
    trie.insert("cat")
    assert trie.search("cat")
    assert trie.starts_with("ca")
    assert not trie.search("ca")


def test_trie_nonexistent_word():
    trie = Trie()
    trie.insert("dog")
    assert not trie.search("cat")
    assert not trie.starts_with("ca")


def test_trie_invalid_characters():
    trie = Trie()
    trie.insert("abc")
    assert not trie.search("ABC")
    assert not trie.starts_with("A")


def test_trie_prefix_not_word():
    trie = Trie()
    trie.insert("hello")
    trie.insert("help")
    assert trie.starts_with("hel")
    assert trie.search("hel") is False
