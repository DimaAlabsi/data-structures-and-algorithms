"use strict";

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right
    }
}

class BinaryTree {
    constructor(root = null) {

        this.root = root;
    }


    preOrder() {
        let arrayOfNodes = [];

        const _walk = (node) => {
            arrayOfNodes.push(node.value);
            if (node.left) { _walk(node.left) }
            if (node.right) { _walk(node.right) }
        }
        _walk(this.root);
        return arrayOfNodes;
    }


    postOrder() {
        let arrayOfNodes = [];

        const _walk = (node) => {
            if (node.left) { _walk(node.left) }
            if (node.right) { _walk(node.right) }
            arrayOfNodes.push(node.value);
        }

        _walk(this.root);
        return arrayOfNodes;
    }


    InOrder() {
        let arrayOfNodes = [];

        const _walk = (node) => {
            if (node.left) { _walk(node.left) }
            arrayOfNodes.push(node.value);
            if (node.right) { _walk(node.right) }
        }

        _walk(this.root);
        return arrayOfNodes;
    }
}

module.exports = {Node,BinaryTree};

