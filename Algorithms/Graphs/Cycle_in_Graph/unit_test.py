import unittest
from cycle_in_graph import cycle_in_graph  # Make sure this matches your actual file name

class TestCycleInGraph(unittest.TestCase):
    def test_multiple_cycles(self):
        edges = [
            [1, 3],
            [2, 3, 4],
            [0],
            [],
            [2, 5],
            [],
        ]
        self.assertTrue(cycle_in_graph(edges))  # Multiple cycles exist

    def test_no_cycle(self):
        edges = [
            [1],
            [2],
            [3],
            [],
        ]
        self.assertFalse(cycle_in_graph(edges))  # Linear chain, no cycle

    def test_single_node_self_loop(self):
        edges = [
            [0],
        ]
        self.assertTrue(cycle_in_graph(edges))  # Self-loop is a cycle

    def test_disconnected_graph_with_cycle(self):
        edges = [
            [],
            [2],
            [1],
            [],
        ]
        self.assertTrue(cycle_in_graph(edges))  # 1 -> 2 -> 1 is a cycle

    def test_disconnected_graph_no_cycle(self):
        edges = [
            [],
            [],
            [3],
            [],
        ]
        self.assertFalse(cycle_in_graph(edges))  # All components acyclic

if __name__ == '__main__':
    unittest.main()
