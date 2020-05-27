#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Selection Sort

Date: May 25, 2020
Author: EngineerID

Time Complexity: O(n^2)

Space Complexity: O(1)
    

"""

def selectionSort(array):
    
    for i in range(0, len(array),1):
        #print("i is: " + str(i))
        min = array[i]
        #print(array[i])
        
        for j in range(i+1, len(array), 1):
            #print("j is: " + str(j))
            #print(array[j])
            if (array[j] < min):
                swap(i, j, array)

        
        #print(array)
    
    return(array)

def swap(i, j, array):
    min = array[j]
    array[j] = array[i]
    array[i] = min
    

if __name__ == "__main__":
    array = [32, 53, 7, 40, 51, 90, 64, 52]
    print(array)
    print(selectionSort(array))
