[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/mwP1qNXw)
# JavaScript Assignment 1: Rows, Columns, Diagonals.

Write a function that returns indexes for a square grid’s rows, columns, and diagonals. The grid is a single-dimension array, with indexes starting at 1. The function returns the collection of indexes in a 2D array. 

e.g., A grid size 3 is 3x3 and as follows:

    const grid = [
      "", "", "",
      "", "", "",
      "", "", "",
    ];
    
A conceptual representation would be:
    
    1 2 3
    4 5 6
    7 8 9

Grid size 4 would be 4x4 and represented as:

    const grid = [
      "", "", "", "",
      "", "", "", "",
      "", "", "", "",
      "", "", "", "",
    ];
    
And then:

     1  2  3  4
     5  6  7  8
     9 10 11 12
    13 14 15 16

For a 3x3 grid, the rows, columns, and diagonals are as follows:

    # rows
    1, 2, 3
    4, 5, 6
    7, 8, 9
    
    # columns
    1, 4, 7
    2, 5, 8
    3, 6, 9
    
    # diagonals
    1, 5, 9
    3, 5, 7

So the function would return:

    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ]

## Your Task
Given a grid size N, write a function that returns a list of all winning combinations.

**Input** N (Integer, 0 <= N <= 1000)
**Output** (2N + 2) rows with comma-separated numbers.

We will provide you with the code that prints the output to the console for your convenience. Your job is to write the function that returns the values.

e.g. For Size 3, the output will be:

    1, 2, 3
    4, 5, 6
    7, 8, 9
    1, 4, 7
    2, 5, 8
    3, 6, 9
    1, 5, 9
    3, 5, 7

For Size 2, the output will be:

    1,2
    3,4
    1,3
    2,4
    1,4
    2,3



