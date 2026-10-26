import json
from pathlib import Path

from dsa.trees.segment_tree import SegmentTree

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "segment-tree-goldens.json").read_text()
)


def test_segment_tree_shared_goldens():
    for case in GOLDENS:
        st = SegmentTree(case["initial"])
        for q in case["rangeSum"]:
            assert st.range_sum(q["left"], q["right"]) == q["sum"]
        upd = case["update"]
        st.update(upd["index"], upd["value"])
        for q in case["rangeSumAfter"]:
            assert st.range_sum(q["left"], q["right"]) == q["sum"]
