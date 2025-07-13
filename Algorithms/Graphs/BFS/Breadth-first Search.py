"""
Breadth-first Search

Date: June 15, 2020
Author: EngineerID

Time Complexity: O(v+e)
Space Complexity: O(v)
Where v are the vertices (nodes) and e are the edges
"""

class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))
        return self

	# O(v + e) time | O(v) space 
	# where v is number of vertices and e is number of edges
    def breadthFirstSearch(self, array):
		# Initialize the queue (JS Array and Python List)
		# Self is the node that we are calling the BFS on
		queue = [self]
		
		# Loop until queue is empty
		while len(queue) > 0:
			
			# Set current to be FIFO node
			current = queue.pop(0)
			
			# Append name of current node to array
			array.append(current.name)
		
			# Loop through all child nodes in the queue
			for child in current.children:
				queue.append(child)
			
        return array
