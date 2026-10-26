import json
from pathlib import Path

from dsa.linear.doubly_linked_list import DoublyLinkedList

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "doubly-linked-list-goldens.json").read_text()
)


def test_doubly_linked_list_shared_goldens():
    for case in GOLDENS:
        lst = DoublyLinkedList()
        for v in case["addLast"]:
            lst.add_last(v)
        for v in case["addFirst"]:
            lst.add_first(v)
        assert lst.get(case["getIndex"]) == case["getValue"]
        assert lst.remove(case["removeIndex"]) == case["removeValue"]
        assert lst.size() == case["sizeAfter"]
