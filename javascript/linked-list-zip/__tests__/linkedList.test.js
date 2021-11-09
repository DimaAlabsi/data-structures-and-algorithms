"use strict";
let LinkedList = require("../lib/LinkedList");

describe("LinkedList tests", () => {
    test("constructor()", () => {
        let newLinkedList = new LinkedList();
        expect(newLinkedList.head).toBeNull();
    });
    test("append", () => {
        let newLinkedList = new LinkedList();
        let firstOne = "value A";
        newLinkedList.append(firstOne);
        expect(newLinkedList.head.value).toBe(firstOne);

        let secondValue = "value B";
        newLinkedList.append(secondValue);
        expect(newLinkedList.head.next.value).toBe(secondValue);
        expect(newLinkedList.head.next.next).toBeNull();
        expect(newLinkedList.head.value).toBe(firstOne);
    });
    test("happy case (zip ll)", () => {

        let LinkedListA = new LinkedList();
        LinkedListA.append(2);
        LinkedListA.append(4);
        LinkedListA.append(6);

        let LinkedListB = new LinkedList();
        LinkedListB.append(1);
        LinkedListB.append(3);
        LinkedListB.append(5);
        let newLinkedList = new LinkedList();
        expect(newLinkedList.zipLinkedLists(LinkedListA, LinkedListB).toString()).toBe(
            "{2}-->{1}-->{4}-->{3}-->{6}-->{5}-->null"
        );
    });


    test("empty ll (zipll)", () => {
        let newLinkedList = new LinkedList();
        let LinkedListA = new LinkedList();
         let LinkedListB = new LinkedList();
        LinkedListB.append(2);
        LinkedListB.append(4);
        LinkedListB.append(6);
        LinkedListB.append(8);
        LinkedListB.append(10);
        expect(newLinkedList.zipLinkedLists(LinkedListA, LinkedListB).toString()).toBe(
            "{2}-->{4}-->{6}-->{8}-->{10}-->null"
        );
    });
test("length not equal(ziplinkedlist)", () => {
        let newLinkedList = new LinkedList();
        let LinkedListA = new LinkedList();
        LinkedListA.append(10);
        LinkedListA.append(8);
        LinkedListA.append(6);
        LinkedListA.append(4);
        LinkedListA.append(2);
        let LinkedListB = new LinkedList();
        LinkedListB.append(9);
        LinkedListB.append(7);
        LinkedListB.append(5);
        expect(newLinkedList.zipLinkedLists(LinkedListA, LinkedListB).toString()).toBe(
            "{10}-->{9}-->{8}-->{7}-->{6}-->{5}-->{4}-->{2}-->null"
        );
    });





});