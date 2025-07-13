import unittest
from detect_arbitrage import detect_arbitrage

class TestDetectArbitrage(unittest.TestCase):

    def test_sample_case_true(self):
        rates = [
            [1.0, 0.8631, 0.5903],
            [1.1586, 1.0, 0.6849],
            [1.6939, 1.46, 1.0],
        ]
        result = detect_arbitrage(rates)
        self.assertTrue(result, f"Expected arbitrage, but got False. Rates: {rates}")

    def test_no_arbitrage(self):
        rates = [
            [1.0, 0.5, 2.0],
            [2.0, 1.0, 4.0],
            [0.5, 0.25, 1.0]
        ]
        result = detect_arbitrage(rates)
        self.assertFalse(result, f"Expected no arbitrage, but got True. Rates: {rates}")

    def test_single_currency(self):
        rates = [[1.0]]
        result = detect_arbitrage(rates)
        self.assertFalse(result, f"Expected no arbitrage with one currency, but got True.")

    def test_two_currency_arbitrage(self):
        rates = [
            [1.0, 2.0],
            [0.6, 1.0]
        ]
        result = detect_arbitrage(rates)
        self.assertTrue(result, f"Expected arbitrage, but got False. Rates: {rates}")

    def test_two_currency_no_arbitrage(self):
        rates = [
            [1.0, 0.5],
            [2.0, 1.0]
        ]
        result = detect_arbitrage(rates)
        self.assertFalse(result, f"Expected no arbitrage, but got True. Rates: {rates}")

    def test_large_with_arbitrage(self):
        rates = [
            [1.0, 0.9, 1.1, 0.95],
            [1.1, 1.0, 1.2, 0.98],
            [0.9, 0.85, 1.0, 1.1],
            [1.2, 1.02, 0.95, 1.0]
        ]
        result = detect_arbitrage(rates)
        self.assertTrue(result, f"Expected arbitrage in large case, but got False. Rates: {rates}")

    def test_large_no_arbitrage(self):
        rates = [
            [1.0, 0.5, 2.0, 1.5],
            [2.0, 1.0, 4.0, 3.0],
            [0.5, 0.25, 1.0, 0.75],
            [2/3, 1/3, 4/3, 1.0]
        ]
        result = detect_arbitrage(rates)
        self.assertFalse(result, f"Expected no arbitrage in large case, but got True. Rates: {rates}")


if __name__ == '__main__':
    unittest.main()
