# Heaps — Indexed min-heap (for Dijkstra decreaseKey by vertex id)

"""Min-heap supporting decrease_key by vertex/id index.

insert/extract_min/decrease_key O(log n); Space: O(n).
"""


class IndexedMinHeap:
    """Indexed min-heap for integer vertex ids 0..capacity-1."""

    def __init__(self, capacity: int) -> None:
        """Creates a heap for vertex ids 0..capacity-1.

        Time: O(1); Space: O(capacity).
        """
        self._heap: list[int] = [0] * capacity
        self._pos: list[int] = [-1] * capacity
        self._keys: list[int] = [0] * capacity
        self._size = 0

    def insert(self, vertex: int, key: int) -> None:
        """Inserts or updates vertex with key.

        Time: O(log n); Space: O(1).
        """
        if self._pos[vertex] == -1:
            self._heap[self._size] = vertex
            self._pos[vertex] = self._size
            self._keys[vertex] = key
            self._size += 1
            self._sift_up(self._size - 1)
        else:
            self.decrease_key(vertex, key)

    def decrease_key(self, vertex: int, key: int) -> None:
        """Decreases key for vertex.

        Time: O(log n); Space: O(1).
        """
        i = self._pos[vertex]
        self._keys[vertex] = key
        self._sift_up(i)

    def is_empty(self) -> bool:
        """Returns true if empty.

        Time: O(1); Space: O(1).
        """
        return self._size == 0

    def extract_min(self) -> int:
        """Extracts minimum vertex id.

        Time: O(log n); Space: O(1).
        """
        minimum = self._heap[0]
        self._swap(0, self._size - 1)
        self._size -= 1
        self._pos[minimum] = -1
        if self._size > 0:
            self._sift_down(0)
        return minimum

    def _sift_up(self, i: int) -> None:
        while i > 0:
            parent = (i - 1) // 2
            if self._keys[self._heap[i]] >= self._keys[self._heap[parent]]:
                break
            self._swap(i, parent)
            i = parent

    def _sift_down(self, i: int) -> None:
        while True:
            left = 2 * i + 1
            right = 2 * i + 2
            smallest = i
            if left < self._size and self._keys[self._heap[left]] < self._keys[self._heap[smallest]]:
                smallest = left
            if right < self._size and self._keys[self._heap[right]] < self._keys[self._heap[smallest]]:
                smallest = right
            if smallest == i:
                break
            self._swap(i, smallest)
            i = smallest

    def _swap(self, i: int, j: int) -> None:
        vi = self._heap[i]
        vj = self._heap[j]
        self._heap[i] = vj
        self._heap[j] = vi
        self._pos[vi] = j
        self._pos[vj] = i
