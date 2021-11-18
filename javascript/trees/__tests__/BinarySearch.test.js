"use strict";
const Node = require('../Node');
const BinarySearch = require('../BinarySearch');


describe("BinarySearch tests", () => {
  test("Can successfully instantiate an empty tree", () => {
    let BStree = new BinarySearch();
    expect(BStree.root).toBe(null);
  });

  test(" add one root value", () => {
    let BStree = new BinarySearch();
    BStree.add("6");
    expect(BStree.root.value).toBe("6");
    expect(BStree.root.left).toBe(null);
    expect(BStree.root.right).toBe(null);
  });





test("create tree using add ()", () => {
  let tree = new BinarySearch();
  tree.add(8);
  tree.add(99);

  expect(tree.root.value).toBe(8);
  expect(tree.root.right.value).toBe(99);
  expect(tree.root.left).toBeNull();
 

});

test("add multiple nodes using add ()", () => {
  let binarySearchTree = new BinarySearch();
  binarySearchTree.add("50");
  binarySearchTree.add("35");
  binarySearchTree.add("65");

  expect(binarySearchTree.root.value).toBe("50");
  expect(binarySearchTree.root.left.value).toBe("35");
  expect(binarySearchTree.root.right.value).toBe("65");
  expect(binarySearchTree.root.left.left).toBeNull;
  expect(binarySearchTree.root.left.right).toBeNull;
  expect(binarySearchTree.root.right.left).toBeNull;
  expect(binarySearchTree.root.right.right).toBeNull;
});
test(" Contains()", () => {
  let BStree;
  BStree = new BinarySearch();
  BStree.add(1);
  BStree.add(2);
  BStree.add(3);
  BStree.add(4);
  expect(BStree.Contains(4)).toBe(true);
  expect(BStree.Contains(70)).toBe(false);
  expect(BStree.Contains(11)).toBe(false);
  expect(BStree.Contains(1)).toBe(true);
  expect(BStree.Contains(77)).toBe(false);
});})