import json
from pathlib import Path

import pytest

from dsa.graphs.word_search import word_search

ROOT = Path(__file__).resolve().parents[3]
GOLDENS = json.loads((ROOT / "tools" / "word-search-goldens.json").read_text())


@pytest.mark.parametrize("case", GOLDENS, ids=lambda c: c.get("word", ""))
def test_shared_goldens(case):
    board = [row[:] for row in case.get("board", [])]
    assert word_search(board, case["word"]) is case["expected"]
