"use strict";
const Node = require('./Node');

class LinkedList {

    constructor() {
        this.head = null;
        this.length = 0;
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
            this.length++;

        }
    }

    toString() {
        let currentNode = this.head;
        if (!currentNode) {
            throw new Error('No LinkedList here 😎')
        }

        let string = "";
        while (currentNode) {
            string += `{${currentNode.value}}-->`;
            currentNode = currentNode.next;
        }
        return (string += 'null')
    }
    zipLinkedLists(LinkedListA, LinkedListB) {

        let LinkedListResult = new LinkedList();
        if (!LinkedListA.head) {
            return LinkedListB
        }
        if (!LinkedListB.head) {
            return LinkedListA
        }
        if (!LinkedListA.head && !LinkedListB.head) {
            return ('No LinkedList here 😎');
        }
        LinkedListResult.append(LinkedListA.head.value);
        LinkedListResult.append(LinkedListB.head.value);
        let currentNodeA = LinkedListA.head;
        let currentNodeB = LinkedListB.head;
        let i = 0;
        if (LinkedListA.length >= LinkedListB.length) {
            i = LinkedListA.length
        } else {
            i = LinkedListB.length
        }
        for (let j = 0; j < i; j++) {

            if (currentNodeA.next) {
                LinkedListResult.append(currentNodeA.next.value)
                currentNodeA = currentNodeA.next
            }
            if (currentNodeB.next) {
                LinkedListResult.append(currentNodeB.next.value)
                currentNodeB = currentNodeB.next
            }
        } return LinkedListResult
    }
}


module.exports = LinkedList;