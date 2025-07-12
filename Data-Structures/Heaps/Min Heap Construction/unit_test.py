import unittest

from min_heap import MinHeap  # Make sure your MinHeap class is in `min_heap.py`

class TestMinHeap(unittest.TestCase):
    def test_sample_usage(self):
        # Initial array
        array = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]

        # Instantiate MinHeap (should call buildHeap internally)
        heap = MinHeap(array)
        self.assertEqual(heap.heap, [-5, 2, 6, 7, 8, 8, 24, 391, 24, 56, 12, 24, 48, 41])

        # Insert 76
        heap.insert(76)
        self.assertEqual(heap.heap, [-5, 2, 6, 7, 8, 8, 24, 391, 24, 56, 12, 24, 48, 41, 76])

        # Peek: -5
        self.assertEqual(heap.peek(), -5)

        # Remove -5
        self.assertEqual(heap.remove(), -5)
        self.assertEqual(heap.heap, [2, 7, 6, 24, 8, 8, 24, 391, 76, 56, 12, 24, 48, 41])

        # Peek: 2
        self.assertEqual(heap.peek(), 2)

        # Remove 2
        self.assertEqual(heap.remove(), 2)
        self.assertEqual(heap.heap, [6, 7, 8, 24, 8, 24, 24, 391, 76, 56, 12, 41, 48])

        # Peek: 6
        self.assertEqual(heap.peek(), 6)

        # Insert 87
        heap.insert(87)
        self.assertEqual(heap.heap, [6, 7, 8, 24, 8, 24, 24, 391, 76, 56, 12, 41, 48, 87])

if __name__ == '__main__':
    unittest.main()
