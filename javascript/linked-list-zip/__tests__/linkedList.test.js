"use strict";
let LinkedList = require("../lib/LinkedList");

describe("LinkedList tests", () => {
  it("constructor()", () => {
    let newList = new LinkedList();
    expect(newList.head).toBeNull();
  });

  it("append", () => {
    let newList = new LinkedList();
    let initialValue = "First Item";
    newList.append(initialValue);
    expect(newList.head.value).toEqual(initialValue);

    let anotherOne = "Second Item";
    newList.append(anotherOne);
    expect(newList.head.next.value).toEqual(anotherOne);
    expect(newList.head.next.next).toBeNull();
    expect(newList.head.value).toEqual(initialValue);
  });

  it("happy case (zip ll)", () => {
    
    let list1 = new LinkedList();
    list1.append(2);
    list1.append(4);
    list1.append(6);

    let list2 = new LinkedList();
    list2.append(1);
    list2.append(3);
    list2.append(5);
    let newList = new LinkedList();
    expect(newList.zipLists(list1, list2).toString()).toEqual(
        "{2}-->{1}-->{4}-->{3}-->{6}-->{5}-->null"
    );
  });


  it("empty ll (zipll)", () => {
    let newList = new LinkedList();
    let list1 = new LinkedList();

    let list2 = new LinkedList();
    list2.append(2);
    list2.append(4);
    list2.append(6);
    list2.append(8);
    list2.append(10);
    expect(newList.zipLists(list1, list2).toString()).toEqual(
      "{2}-->{4}-->{6}-->{8}-->{10}-->null"
    );
  });


  it("length not equal(ziplinkedlist)", () => {
    let newList = new LinkedList();
    let list1 = new LinkedList();
    list1.append(10);
    list1.append(8);
    list1.append(6);
    list1.append(4);
    list1.append(2);
    let list2 = new LinkedList();
    list2.append(9);
    list2.append(7);
    list2.append(5);
    expect(newList.zipLists(list1, list2).toString()).toEqual(
      "{10}-->{9}-->{8}-->{7}-->{6}-->{5}-->{4}-->{2}-->null"
    );
  });





});