# Detect Arbitrage Opportunity
# This code implements the Bellman-Ford algorithm to detect arbitrage opportunities in currency exchange rates
# It checks for negative-weight cycles in a graph representation of exchange rates.
# The input is a 2D array where each element represents the exchange rate between two currencies
# Output is a boolean indicating whether an arbitrage opportunity exists.
# O space complexity: O(n) where n is the number of currencies
# O time complexity: O(n^3) where n is the number of currencies

import math

def detect_arbitrage(exchange_rates):
    n = len(exchange_rates)

    # Step 1: Convert rates to a graph with -log(rate) weights
    graph = [[-math.log(rate) for rate in row] for row in exchange_rates]

    EPSILON = 1e-6  # Tolerance for floating point imprecision

    # Step 2: Run Bellman-Ford for each node as the source
    for source in range(n):
        distance = [float('inf')] * n
        distance[source] = 0

        # Relax edges n-1 times
        for _ in range(n - 1):
            for u in range(n):
                for v in range(n):
                    if distance[u] + graph[u][v] < distance[v]:
                        distance[v] = distance[u] + graph[u][v]

        # Step 3: Check for negative-weight cycles
        for u in range(n):
            for v in range(n):
                if distance[u] + graph[u][v] < distance[v] - EPSILON:
                    return True  # Arbitrage detected

    return False  # No arbitrage detected
