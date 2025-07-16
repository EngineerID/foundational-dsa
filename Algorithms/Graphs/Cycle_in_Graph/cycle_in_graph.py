# Cycle in Graph

# Write a function that determines whether a directed graph contains a cycle.
# The graph is represented as an adjacency list called `edges`, where each index `i`
# contains a list of vertices to which vertex `i` has outgoing edges.
# The graph can contain self-loops and disconnected components.

# Return True if the graph contains any cycle (including self-loops), otherwise return False.
# Time Complexity: O(v + e), where v is the number of vertices and e is the number of edges.
# Space Complexity: O(v), for the recursion stack and visited sets.

def cycle_in_graph(edges):
    def dfs(node, visiting, visited):
        if node in visited:
            return False
        if node in visiting:
            return True  # found a cycle

        visiting.add(node)
        for neighbor in edges[node]:
            if dfs(neighbor, visiting, visited):
                return True
        visiting.remove(node)
        visited.add(node)
        return False

    visited = set()
    for node in range(len(edges)):
        if node not in visited:
            if dfs(node, set(), visited):
                return True
    return False
