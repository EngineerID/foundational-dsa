# Dijkstra's Algorithm

# You're given:
#   - An integer `start` representing the starting vertex
#   - A list `edges`, which is an adjacency list of the graph

# The graph is:
#   - Directed
#   - Weighted (only positive edge weights)
#   - Without self-loops (no edges from a node to itself)

# Each index `i` in `edges` represents vertex `i` and contains a list of outbound edges.
# Each outbound edge is a pair: [destination, distance]
#   - destination: index of the vertex the edge leads to
#   - distance: positive integer weight of the edge from vertex `i` to `destination`

# Your task:
#   Write a function that computes the shortest path distances from the `start` vertex 
#   to all other vertices using Dijkstra's algorithm.

# Return:
#   - An array `distances` where `distances[i]` is the shortest distance from `start` to vertex `i`
#   - If vertex `i` is unreachable from `start`, then `distances[i]` should be -1

# Time Complexity: O((V + E) log V)
# Space Complexity: O(V)

# Example Input:
#   start = 0
#   edges = [
#       [[1, 7], [2, 3]],     # edges from vertex 0
#       [[3, 1]],             # edges from vertex 1
#       [[1, 2], [3, 5]],     # edges from vertex 2
#       []                   # vertex 3 has no outbound edges
#   ]

# Example Output:
#   [0, 5, 3, 6]

# Explanation:
#   - Distance from 0 to 0 is 0
#   - Shortest path to 1: 0 → 2 → 1 = 3 + 2 = 5
#   - Shortest path to 2: 0 → 2 = 3
#   - Shortest path to 3: 0 → 2 → 3 = 3 + 5 = 8 or 0 → 2 → 1 → 3 = 3 + 2 + 1 = 6 → Pick 6

# If no path exists, output -1 for that vertex.

def dijkstra(start, edges):
    import heapq

    n = len(edges)
    distances = [-1] * n  # Initialize distances to -1
    distances[start] = 0   # Distance to start vertex is 0
    min_heap = [(0, start)]  # (distance, vertex)

    while min_heap:
        current_distance, current_vertex = heapq.heappop(min_heap)

        # If the popped distance is greater than the recorded distance, skip it
        if current_distance > distances[current_vertex]:
            continue

        for neighbor, weight in edges[current_vertex]:
            distance = current_distance + weight

            # If found a shorter path to neighbor
            if distances[neighbor] == -1 or distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(min_heap, (distance, neighbor))

    return distances