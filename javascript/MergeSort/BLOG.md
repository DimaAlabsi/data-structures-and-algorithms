# Challenge Summary

***Merge sort uses the concept of divide-and-conquer to sort the given list of elements. It breaks down the problem into smaller subproblems until they become simple enough to solve directly.***

* Split the given list into two halves (roughly equal halves in case of a list with an odd number of elements).
* Continue dividing the subarrays in the same manner until you are left with only single element arrays.
* Starting with the single element arrays, merge the subarrays so that each merged subarray is sorted.
* Repeat step 3 unit with end up with a single sorted array.

## Whiteboard Process

![whiteBoard](/javascript/MergeSort/img/whiteBoardSort.PNG)

## Approach & Efficiency

* I understood the problem domain

* I'm trying imagine the results 

* I'm trying to draw the visualization  on a white board then trying to writre the code and test it until it give me **passesd**



### test 

* npm run test


![test result](/javascript/MergeSort/img/tests.PNG)
## Solution

![visual](/javascript/MergeSort/img/visual.PNG)

### code

[code](/javascript/MergeSort/MergeSort.js)



- [x] mergeSort function


- [x] tests

 [x] Top-level README “Table of Contents” is updated
 - [x] README for this challenge is complete
       - [x] Summary, Description, Approach & Efficiency, Solution
       - [x] Picture of whiteboard
       - [x] Link to code
 - [x] Feature tasks for this challenge are completed
 - [x] Unit tests written and passing
       - [x] “Happy Path” - Expected outcome
       - [x] Expected failure
       - [x] Edge Case (if applicable/obvious)