from dsa.graphs.word_search import word_search


def test_word_search():
    board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]]
    assert word_search([row[:] for row in board], "ABCCED") is True
    assert word_search([row[:] for row in board], "ABCD") is False
