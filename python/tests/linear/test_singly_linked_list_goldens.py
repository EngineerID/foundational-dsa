import json
from pathlib import Path

from dsa.linear.singly_linked_list import SinglyLinkedList

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "singly-linked-list-goldens.json").read_text()
)


def test_singly_linked_list_shared_goldens():
    for case in GOLDENS:
        lst = SinglyLinkedList()
        if not case["addLast"]:
            assert lst.size() == 0
            continue
        for v in case["addLast"]:
            lst.add_last(v)
        assert lst.get(case["getIndex"]) == case["getValue"]
        assert lst.remove(case["removeIndex"]) == case["removeValue"]
        assert lst.size() == case["sizeAfter"]
