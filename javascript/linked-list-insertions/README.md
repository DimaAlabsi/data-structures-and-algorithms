# Challenge Summary

### Node
* Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
### Linked List
* Create a Linked List class Within your Linked List class, include a head property.
* Upon instantiation, an empty Linked List should be created.
* The class should contain the following methods:
      * insert
            Arguments: value
          Returns: nothing
            Adds a new node with that value to the head of the list with an O(1) Time performance.
      * includes
          Arguments: value
        Returns: Boolean
           Indicates whether that value exists as a Node’s value somewhere within the list.
          * to string
               Arguments: none
                   Returns: a string representing all the values in the Linked List, formatted as:
                             **"{ a } -> { b } -> { c } -> NULL"**

* append
arguments: new value
adds a new node with the given value to the end of the list
* insert before
arguments: value, new value
adds a new node with the given new value immediately before the first node that has the value specified
* insert after
arguments: value, new value
adds a new node with the given new value immediately after the first node that has the value specified

## Whiteboard Process


![white board2](/javascript/linked-list-insertions/images/whiteboard1.png)

![white board](/javascript/linked-list-insertions/images/whiteboard2.png)


![test](/javascript/linked-list-insertions/images/linkedlisttest.png)


## Approach & Efficiency

* I understood the problem domain

* I'm trying imagine the results 

* I', trying to draw the linked list on a white board then trying to writre the code and test it until it give me **passesd**


## API
 insert method : that takes a value and reurn nothing  Adds a new node with that value to the head of the list with an O(1) Time performance

 '* includes method :  that takes a value and return boolean  Indicates whether that value exists as a Node’s value somewhere within the list.

 * toString method : that takes none and Returns: a string representing all the values in the Linked List, formatted as:

   **"{ a } -> { b } -> { c } -> NULL"**


### test 
* npm run test


##### solution can be 

* successfully add a node to the end of the linked list
* Can successfully add multiple nodes to the end of a linked list
* Can successfully insert a node before a node located i the middle of a linked list
* Can successfully insert a node before the first node of a linked list
* Can successfully insert after a node in the middle of the linked list
* Can successfully insert a node after the last node of the linked list

### code

[code](/javascript/linked-list-insertions)
- [x] inseret method
- [x] include method
- [x] toString method
- [x] append method
- [x] insertBefore method
- [x] insertAfter method


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