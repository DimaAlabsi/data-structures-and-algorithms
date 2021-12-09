# Hashtables


**Hashtables are a data structure that utilize key value pairs. This means every Node or Bucket has both a key, and a value.**

* Hash - A hash is the result of some algorithm taking an incoming string and converting it into a value that could be used for either security or some other purpose. In the case of a hashtable, it is used to determine the index of the array.

* Buckets - A bucket is what is contained in each index of the array of the hashtable. Each index is a bucket. An index could potentially contain multiple key/value pairs if a collision occurs.

* Collisions - A collision is what happens when more than one key gets hashed to the same location of the hashtable.


--------------------------------------

## Challenge

* Adding a key/value to your hashtable results in the value being in the data structure
* Retrieving based on a key returns the value stored
* Successfully returns null for a key that does not exist in the hashtable
* Successfully handle a collision within the hashtable
* Successfully retrieve a value from a bucket within the hashtable that has a collision
* Successfully hash a key to an in-range value


![hashtable](https://miro.medium.com/max/1400/1*l9eCykFTYwvLZgy62id5Ag.png)


![hash](https://miro.medium.com/max/1400/1*W4_MJgwQTobJFs8nS4wyVQ.png)

-----------------------

## Approach & Efficiency

* I understood the problem domain

* I'm trying imagine the results 

* I'm trying to draw the hash table on a white board then trying to writre the code and test it until it give me **passesd**

## API

* add
Arguments: key, value
Returns: nothing
This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
* get
Arguments: key
Returns: Value associated with that key in the table
* contains
Arguments: key
Returns: Boolean, indicating if the key exists in the table already.
* hash
Arguments: key
Returns: Index in the collection for that key

---------------------

### test 

* npm run test


![test result](/javascript/hashtable/img/hashTableTest.png)


### code

[code](/javascript/hashtable/lib/hashTable.js)



- [x] hash function
- [x] contains function
- [x] get function
- [x] set function




- [x] tests

 - [x] Top-level README “Table of Contents” is updated
 - [x] README for this challenge is complete
       - [x] Summary, Description, Approach & Efficiency, Solution
       - [x] Picture of whiteboard
       - [x] Link to code
 - [x] Feature tasks for this challenge are completed
 - [x] Unit tests written and passing
       - [x] “Happy Path” - Expected outcome
       - [x] Expected failure
       - [x] Edge Case (if applicable/obvious)