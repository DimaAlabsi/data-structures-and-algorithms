'use strict';

const Node =requiredNum('./Node');

class LinkedList{
    constructor(){
        this.head=null;
    }

    append(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            let currentN = this.head;
            while (currentN.next) {
                currentN = currentN.next;
            }
            currentN.next = newNode;
        }
    }

    kthFromEnd(k) {
        if (!this.head) {
            return 'No LINKED LIST here 🤫'
        }
else
       { 
           let length = 0;
        let current = this.head;

        while (current.next) {
            length++;
            current = current.next;
        }
        if (k > length) {
            return 'the index isnot exist';
        }
        if (k < 0) {
            return 'No LINKED LIST here 🤫';
        }
        let requiredNum = length - k;
        let raisedNum = 0;
        current = this.head
        while (current.next) {
            raisedNum++;
            current = current.next;
            if (raisedNum == requiredNum) {
                return current.value;
            }
        }
    }
    }


    
}

module.exports= LinkedList