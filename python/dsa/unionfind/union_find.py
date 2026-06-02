# Union-Find (Disjoint Set)

"""Disjoint-set connectivity with union and find.

Technique: Union-find (path compression, union by rank)
Invariant: Parent pointers form forest; ranks approximate tree height.
find/union/connected: Time O(α(n)) amortized; Space O(n).
"""


class UnionFind:
    """Disjoint-set union-find for elements 0..n-1."""

    def __init__(self, n: int) -> None:
        """Creates a structure for n elements labeled 0..n-1.

        Time: O(n); Space: O(n).
        """
        self._parent = list(range(n))
        self._rank = [0] * n
        self._components = n

    def find(self, x: int) -> int:
        """Finds the representative of x with path compression.

        Time: ~O(α(n)); Space: O(1).
        """
        if self._parent[x] != x:
            self._parent[x] = self.find(self._parent[x])
        return self._parent[x]

    def union(self, a: int, b: int) -> None:
        """Unites the sets containing a and b (weighted by rank).

        Time: ~O(α(n)); Space: O(1).
        """
        ra = self.find(a)
        rb = self.find(b)
        if ra == rb:
            return
        if self._rank[ra] < self._rank[rb]:
            self._parent[ra] = rb
        elif self._rank[ra] > self._rank[rb]:
            self._parent[rb] = ra
        else:
            self._parent[rb] = ra
            self._rank[ra] += 1
        self._components -= 1

    def connected(self, a: int, b: int) -> bool:
        """Returns True if a and b are in the same set.

        Time: ~O(α(n)); Space: O(1).
        """
        return self.find(a) == self.find(b)

    def count_components(self) -> int:
        """Returns the number of disjoint sets.

        Time: O(1); Space: O(1).
        """
        return self._components
