"use strict";
const Node = require('./Node');

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    // Depth fisrt traversal
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


module.exports = BinaryTree;