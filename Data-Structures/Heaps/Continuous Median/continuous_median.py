# ContinuousMedianHandler Class
# Purpose: Efficiently track the median of a stream of integers.

# Functionality:
# - Accepts a stream of integers one at a time.
# - After each insertion, provides the current median.

# Example:
# Input Stream: [1, 5, 2, 4, 3]
# Output Medians: [1, 3.0, 2, 3.0, 3]

# Performance:
# - Insertion: O(log n) using two heaps
# - Median Retrieval: O(1)
# - Space Complexity: O(n)

import heapq

class ContinuousMedianHandler:
    def __init__(self):
        self.lower_half = []  # Max-heap (inverted min-heap)
        self.upper_half = []  # Min-heap
        self.median = None

    def insert(self, number):
        # Insert into the max-heap (lower half)
        if not self.lower_half or number <= -self.lower_half[0]:
            heapq.heappush(self.lower_half, -number)
        else:
            heapq.heappush(self.upper_half, number)

        # Balance the heaps
        if len(self.lower_half) > len(self.upper_half) + 1:
            moved_value = -heapq.heappop(self.lower_half)
            heapq.heappush(self.upper_half, moved_value)
        elif len(self.upper_half) > len(self.lower_half):
            moved_value = heapq.heappop(self.upper_half)
            heapq.heappush(self.lower_half, -moved_value)

        # Calculate the median
        if len(self.lower_half) > len(self.upper_half):
            self.median = -self.lower_half[0]
        else:
            self.median = (-self.lower_half[0] + self.upper_half[0]) / 2

    def get_median(self):
        return self.median