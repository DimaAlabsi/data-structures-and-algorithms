'use strict';

const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // insert(value) {
    //     const node = new Node(value);
    //     if (this.head) {
    //         node.next = this.head;
    //     }
    //     this.head = node;
    // }
    insert(value) {

        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }


    }

    includes(value) {
        let result = false;
        let nodes = this.head;
        while (nodes) {
            if (nodes.value == value) {
                return (result = true);
            }
            nodes = nodes.next;
        }
        return result;
    }


    toString() {
        let string = "";
        let temNode = this.head;
        while (temNode) {
            string += `{ ${temNode.value} } -> `;
            temNode = temNode.next;
        }
        string += `NULL`;
        return string;
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
        if (this.head) {
            if (k < this.length && k >= 0) {
                let raisedNum = this.length - 1;
                  let current = this.head;
                while (raisedNum !== k) {
                    current = current.next;
                    raisedNum--;
                }
                return current.value;

            } else { return 'k is invalid'; }
        } else { return 'No LINKED LIST here 🤫'; }
    }



}

module.exports = LinkedList