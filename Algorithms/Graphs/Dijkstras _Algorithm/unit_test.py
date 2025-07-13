import unittest
from dijkstras_algorithm import dijkstra  # Replace with your actual module name

class TestDijkstra(unittest.TestCase):

    def test_sample_graph(self):
        start = 0
        edges = [
            [[1, 7]],
            [[2, 6], [3, 20], [4, 3]],
            [[3, 14]],
            [[4, 2]],
            [],
            []
        ]
        expected = [0, 7, 13, 27, 10, -1]
        self.assertEqual(dijkstra(start, edges), expected)

    def test_linear_chain(self):
        start = 0
        edges = [
            [[1, 2]],
            [[2, 2]],
            [[3, 2]],
            []
        ]
        expected = [0, 2, 4, 6]
        self.assertEqual(dijkstra(start, edges), expected)

    def test_disconnected_node(self):
        start = 0
        edges = [
            [[1, 5]],
            [],
            []  # Vertex 2 unreachable
        ]
        expected = [0, 5, -1]
        self.assertEqual(dijkstra(start, edges), expected)

    def test_bidirectional_graph(self):
        start = 0
        edges = [
            [[1, 1], [2, 4]],
            [[2, 2], [0, 1]],
            [[3, 1]],
            []
        ]
        expected = [0, 1, 3, 4]
        self.assertEqual(dijkstra(start, edges), expected)

    def test_no_edges(self):
        start = 0
        edges = [[] for _ in range(5)]
        expected = [0, -1, -1, -1, -1]
        self.assertEqual(dijkstra(start, edges), expected)

    def test_all_edges_same_weight(self):
        start = 0
        edges = [
            [[1, 1], [2, 1], [3, 1], [4, 1]],
            [], [], [], []
        ]
        expected = [0, 1, 1, 1, 1]
        self.assertEqual(dijkstra(start, edges), expected)

    def test_large_graph_shallow(self):
        start = 0
        edges = [
            [[i, i + 1] for i in range(1, 100)],
        ] + [[] for _ in range(1, 101)]
        expected = [0] + [i + 1 for i in range(1, 100)] + [-1]
        self.assertEqual(dijkstra(start, edges), expected)

    def test_start_isolated(self):
        start = 3
        edges = [
            [[1, 10]],
            [[2, 5]],
            [],
            [],  # start = 3 is isolated
            [[3, 1]]
        ]
        expected = [-1, -1, -1, 0, -1]
        self.assertEqual(dijkstra(start, edges), expected)

    def test_cyclic_graph(self):
        start = 0
        edges = [
            [[1, 1]],
            [[2, 1]],
            [[0, 1], [3, 1]],
            []
        ]
        expected = [0, 1, 2, 3]
        self.assertEqual(dijkstra(start, edges), expected)

    def test_multiple_paths_same_dest(self):
        start = 0
        edges = [
            [[1, 2], [2, 4]],
            [[2, 1]],
            [[3, 1]],
            []
        ]
        expected = [0, 2, 3, 4]
        self.assertEqual(dijkstra(start, edges), expected)

if __name__ == '__main__':
    unittest.main()
