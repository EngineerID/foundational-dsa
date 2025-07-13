#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Depth-first Search

Date: May 30, 2020
Author: EngineerID

Time Complexity: O(V+E)
Space Complexity: O(V+E)
"""

class Node:
    def __init__(self, name):
        self.children = []
        self.name = name
    
    def addChild(self, name):
        self.children.append(Node(name))
        return self
    
    def depthFirstSearch(self, array):
        array.append(self.name)
        for child in self.children:
            child.depthFirstSearch(array)
        return array
    
def depthFirstSearch(graph, node, visited):
    if node not in visited:
        visited.append(node)
        for n in graph[node]:
            depthFirstSearch(graph,n, visited)
    return visited

def addChild(self, name):
    self.children.append(Node(name))
    return self

def dfs(graph, array):
    array.append(graph.name)
    for child in graph.children:
        child.dfs(array)
    return array


if __name__ == "__main__":
    graph = {
    'A' : ['B','C'],
    'B' : ['D', 'E'],
    'C' : ['F'],
    'D' : [],
    'E' : ['F'],
    'F' : []
    }
    
    result = depthFirstSearch(graph, 'A', [])

    #print(graph)
    print(result)
    
    print(dfs(graph, []))
