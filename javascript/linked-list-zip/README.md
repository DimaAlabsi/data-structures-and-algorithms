# Challenge Summary

### Node

* Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
### Linked List

* Create a Linked List class Within your Linked List class, include a head property.
* Upon instantiation, an empty Linked List should be created.
* The class should contain the following methods:

* named zipLists 
recieved two arguements 
(linkedlistA, linkedlistB)
and return a new linked list with anew
order of those linked lists
so so that the nodes alternate
 between the two
 lists and return a reference to 
the head of the zipped list.

          * to string
               Arguments: none
                   Returns: a string representing all the values in the Linked List, formatted as:
                             **"{ a } -> { b } -> { c } -> NULL"**

                   * append
arguments: new value
adds a new node with the given value to the end of the list


## Whiteboard Process

![white board1](/javascript/linked-list-zip/img/whiteboard.png)

![white board2](/javascript/linked-list-zip/img/whiteboard3.png)

![white board](/javascript/linked-list-zip/img/whiteboard2.png)



![test](/javascript/linked-list-zip/img/test.png)


## Approach & Efficiency

* I understood the problem domain

* I'm trying imagine the results 

* I', trying to draw the linked list on a white board then trying to writre the code and test it until it give me **passesd**
*


### test 

* npm run test


##### solution can be 

* successfully add a node to the end of the linked list
* Can successfully add multiple nodes to the end of a linked list
* zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list.

### code

[code](/javascript/linked-list-zip/lib/LinkedList.js)


- [x] toString method
- [x] append method
- [x] zip linkedlist method


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