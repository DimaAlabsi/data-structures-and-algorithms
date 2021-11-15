'use strict';

const Node = require('./Node');


class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insert(value) {
        const node = new Node(value);
        if (this.head) {
            node.next = this.head;
        }
        this.head = node;
    }
    // insertBefore(value, newValue) {
    //     let newNode = new Node(newValue);
    //     let currentOne = this.head;
    //   if (currentOne.value === value) {
    //         newNode.next = currentOne;
    //         this.head = newNode; }
    //     while (currentOne.next) {
    //         if (currentOne.next.value === value) {
    //             newNode.next = currentOne.next
    //             currentOne.next = newNode
    //             break;}
    //         currentOne = currentOne.next;
    //     }
    // }
    insertBefore(value, newValue) {
        if(this.length < value){
            return 'No change here 🙃';
          }
        let newNode = this.head;
        const node = new Node(newValue);
        if (newNode.value === value) {
            node.next = this.head;
            this.head = node;
        } else {
            while (newNode.next) {
                if (newNode.next.value === value) {
                    node.next = newNode.next;
                    newNode.next = node;
                    break;
                } else {
                    newNode = newNode.next;
                }
            }
        }
    }

    insertAfter(value, newValue) {
        if(this.length < value){
            return 'No change here 🙃';
          }
        let newNode = new Node(newValue);
        let currentOne = this.head;
        
        while (currentOne) {
            if (currentOne.value === value) {
                newNode.next = currentOne.next;
                currentOne.next = newNode;
                break;
            }
            currentOne = currentOne.next;
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
    append(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            let currentOneN = this.head;
            while (currentOneN.next) {
                currentOneN = currentOneN.next;
            }
            currentOneN.next = newNode;
        }
        this.length++;
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

}


module.exports = LinkedList;