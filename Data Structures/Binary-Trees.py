#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Binary Trees
Goals:
	Calculate sum of each Branch (from root node to leaf node)
	Return array that has a sum for each branch

Date: June 1, 2020
Author: EngineerID

Time Complexity: O(N)    
Space Complexity: O(N)
    

"""

# This is the class of the input root. Do not edit it.
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def branchSums(root):
	sums = []
	calculateBranchSums(root, 0, sums)
	return sums
	
def calculateBranchSums(node, runningSum, sums):
	
	# Edge case: only one child node
	# Approach: do not calculate sum for that node
	if node is None:
		return
	
	# Recursive function that appends values to the sums array
	newRunningSum = runningSum + node.value
	
	# Check if this is leaf node
	if node.left is None and node.right is None:
		sums.append(newRunningSum)
		return
	
	# Process if this is not a leaf node
	# Need to keep calculating the sum
	# Recursively call the calculateBranchSums function to each node

	calculateBranchSums(node.left, newRunningSum, sums)
	calculateBranchSums(node.right, newRunningSum, sums)
		
	
	
