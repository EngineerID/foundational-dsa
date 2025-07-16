# Minimum waiting time

# Returns the minimum total waiting time for the given list of query durations.
# The optimal approach is to sort the queries and sum each query's duration multiplied by the number of queries that come after it.
# Time Complexity: O(n log n)
# Space Complexity: O(1) (in-place sort)

def minimum_waiting_time(queries):
    queries.sort()
    total_waiting_time = 0
    for i in range(len(queries)):
        queries_remaining = len(queries) - (i + 1)
        total_waiting_time += queries[i] * queries_remaining
    return total_waiting_time