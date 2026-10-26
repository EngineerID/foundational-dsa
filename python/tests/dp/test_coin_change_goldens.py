import json
from pathlib import Path

from dsa.dp.coin_change import min_coins

GOLDENS = json.loads(
    (Path(__file__).resolve().parents[3] / "tools" / "coin-change-goldens.json").read_text()
)


def test_coin_change_shared_goldens():
    for case in GOLDENS:
        assert min_coins(case["coins"], case["amount"]) == case["expected"]
