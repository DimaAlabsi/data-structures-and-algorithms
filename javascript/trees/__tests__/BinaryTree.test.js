"use strict";

const Node = require('../Node');
const BinaryTree = require('../BinaryTree');
// const BinarySearch= require ('./BinarySearch');
let testTree = null;

describe('Binarytree test', () => {

    beforeAll(() => {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        three.left = four;
        three.right = five;
         testTree = new BinaryTree(one);
    });

    test('constructor', () => {
        const newTree = new BinaryTree();
        expect(newTree.root).toBeNull();
        expect(testTree.root.value).toBe(1);
    });

    test('preOrder ()', () => {
        let expectedOutput = [1, 2, 6, 7, 3, 4, 5];
        let preOrder = testTree.preOrder();
        expect(preOrder).toEqual(expectedOutput);
    });

    test('postOrder', () => {
        let expectedOutput = [7, 6, 2, 4, 5, 3, 1];
        let postOrder = testTree.postOrder();

        expect(postOrder).toEqual(expectedOutput);
    });
    test('inOrder', () => {
        let expectedOutput = [6, 7, 2, 1, 4, 3, 5];
        let inOrder = testTree.InOrder();

        expect(inOrder).toEqual(expectedOutput);
    });


});