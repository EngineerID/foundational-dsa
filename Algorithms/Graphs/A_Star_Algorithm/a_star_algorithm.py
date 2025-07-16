# A* Algorithm Implementation in Python

# This implementation finds the shortest path in a grid from a start point to an end point.
# The grid is represented as a 2D list where 0 indicates a walkable cell and 1 indicates an obstacle.
# The heuristic used is the Manhattan distance, which is suitable for grid-based pathfinding.
# Input:
# - graph: 2D list representing the grid (0 for walkable, 1 for obstacles)
# - start_row, start_col: starting cell coordinates
# - end_row, end_col: ending cell coordinates
# Output:
# - List of coordinates representing the path from start to end, or an empty list if no path exists.
# O space complexity is O(n) where n is the number of cells in the grid.
# O time complexity is O(n log n) due to the priority queue operations.


def a_star_algorithm(graph, start_row, start_col, end_row, end_col):
    from heapq import heappush, heappop

    def heuristic(r1, c1, r2, c2):
        # Manhattan distance
        return abs(r1 - r2) + abs(c1 - c2)

    rows, cols = len(graph), len(graph[0])
    start = (start_row, start_col)
    end = (end_row, end_col)

    open_set = []
    heappush(open_set, (0, start))

    came_from = {}

    g_score = {(r, c): float('inf') for r in range(rows) for c in range(cols)}
    g_score[start] = 0

    f_score = {(r, c): float('inf') for r in range(rows) for c in range(cols)}
    f_score[start] = heuristic(start_row, start_col, end_row, end_col)

    visited = set()

    while open_set:
        _, current = heappop(open_set)
        if current in visited:
            continue
        visited.add(current)

        if current == end:
            # Reconstruct path
            path = []
            while current in came_from:
                path.append([current[0], current[1]])
                current = came_from[current]
            path.append([start[0], start[1]])
            path.reverse()
            return path

        r, c = current
        # right, down, left, up (deterministic order)
        for dr, dc in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
            nr, nc = r + dr, c + dc
            neighbor = (nr, nc)
            if 0 <= nr < rows and 0 <= nc < cols and graph[nr][nc] == 0:
                tentative_g = g_score[current] + 1
                if tentative_g < g_score[neighbor]:
                    came_from[neighbor] = current
                    g_score[neighbor] = tentative_g
                    f_score[neighbor] = tentative_g + heuristic(nr, nc, end_row, end_col)
                    heappush(open_set, (f_score[neighbor], neighbor))

    return []  # No path found
