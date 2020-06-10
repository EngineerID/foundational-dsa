
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Algorithm Name: Binary Search Tree (BST) Construction
Data structure: Binary Search Tree (BST)
Goal:
	Construct BST with three methods (insertion, searching, deletion (hardest of the three))

Date: June 9, 2020
Author: EngineerID

Time Complexity: depends on method    
Space Complexity: depends on method
""" 

class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

	# Insert value into a tree (iterative implementation not recursive)
	# Average: O(log(n)) time | O(1) space
	# Worst: O(n) time | O(1) space
    def insert(self, value):
		# initialize the current location of the node
		currentNode = self
		
		while True:
			# explore left subtree
			if value < currentNode.value:
				
				# check if we are at leftmost branch
				if currentNode.left is None:
					currentNode.left = BST(value)
					break
				else:
					currentNode = currentNode.left
			
			# explore right subtree (similar to left subtree)
			else:
				if currentNode.right is None:
					currentNode.right = BST(value)
					break
				else:
					currentNode = currentNode.right
		
		# allows calling insert function multiple times (not relevant to the algorithm)
        return self

	
	# Find value in a tree (iterative implementation not recursive)
	# Average: O(log(n)) time | O(1) space
	# Worst: O(n) time | O(1) space
    def contains(self, value):
        # Initialize current node
		currentNode = self
		
		# loop through the tree
		while currentNode is not None:
			
			# explore left subtree
			if value < currentNode.value:
				currentNode = currentNode.left
				
			# explore right subtree
			elif value > currentNode.value:
				currentNode = currentNode.right
			
			# found the value
			else:
				return True
		
		# return False if the value was not found
        return False

	# Remove value from a tree (difficult method because it has several 'edge' cases)
	# Two step process: (1) find the node then (2) remove it
    def remove(self, value, parentNode = None):
		# Initialize current node
		currentNode = self
		
		# loop through the tree
		while currentNode is not None:
			
			# explore left subtree
			if value < currentNode.value:
				# keep track of the parent node
				parentNode = currentNode
				currentNode = currentNode.left
				
			# explore right subtree
			elif value > currentNode.value:
				parentNode = currentNode
				currentNode = currentNode.right
			
			# found the node we want to remove ('bread and butter of BST')
			else:
				# edge case 1: node has two children nodes
				if currentNode.left is not None and currentNode.right is not None:
					# set current value to be the smallest value using new method (getMinValue)
					currentNode.value = currentNode.right.getMinValue()
					
					# remove this smallest node
					currentNode.right.remove(currentNode.value, currentNode)
				
				# edge case 2: current node is a root node (current node does not have a parent node)
				elif parentNode is None:
					# manually replacing all of the values to the left of current node (root node)
					if currentNode.left is not None:	
						currentNode.value = currentNode.left.value
						currentNode.right = currentNode.left.right
						currentNode.left =  currentNode.left.left
					# manually replacing all of the values to the right of current node (root node)
					elif currentNode.right is not None:
						currentNode.value = currentNode.right.value
						currentNode.left = currentNode.right.left
						currentNode.right = currentNode.right.right
					# need to remove root node with no children nodes (check with interviewer)
					else: 
						#currentNode.value = None
						pass
				# edge case 3a: current node has a parent node and is on the left of the parent node
				elif parentNode.left == currentNode:
					# ressign parent node will be reassigned to left child node (if there is a node there) or right child node
					parentNode.left = currentNode.left if currentNode.left is not None else currentNode.right
				# edge case 3b: current node has a parent node and is on the right of the parent node
				elif parentNode.right == currentNode:
					parentNode.right = parentNode.left if currentNode.left is not None else currentNode.right
				
				# remember to break
				break
				
		# Allows to "chain" the method
        return self
	
	# Helper function to get min value used by remove function
	def getMinValue(self):
		currentNode = self
		while currentNode.left is not None:
			currentNode = currentNode.left
		return currentNode.value
