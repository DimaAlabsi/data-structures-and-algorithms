"use strict";

const Node = require("./Node");
class MaxBinaryTree {
    constructor(root = null) {
        this.root = root;
    }
    preOrder() {
        let arrayOfResults = [];
        const _walk = (node) => {
            arrayOfResults.push(node.value);
            if (node.left) { _walk(node.left) };
            if (node.right) { _walk(node.right) }
        }
        _walk(this.root)
        return arrayOfResults
    }
    inOrder() {
        let arrayOfResults = [];
        const _walk = (node) => {
            if (node.left) { _walk(node.left) };
            arrayOfResults.push(node.value);
            if (node.right) { _walk(node.right) }


        }
        _walk(this.root)
        return arrayOfResults
    }
    postOrder() {
        let arrayOfResults = [];
        const _walk = (node) => {

            if (node.left) { _walk(node.left) };
            if (node.right) { _walk(node.right) }
            arrayOfResults.push(node.value);
        }
        _walk(this.root)
        return arrayOfResults;
    }
    MaxBTNode() {
        if (!this.root) {
            return 'There is NO BinaryT here 🙃'
        }
        let maxNode = this.root.value;
        const _findMaxNode = (node) => {
            if (!node)
                return 'There is NO BinaryT here 🙃';
            maxNode = node.value;
            let leftmaXNode = _findMaxNode(node.left);
            let rightMaxNode = _findMaxNode(node.right);
            if (leftmaXNode > maxNode)
                maxNode = leftmaXNode
            if (rightMaxNode > maxNode)
                maxNode = rightMaxNode;
            return maxNode
        }
        _findMaxNode(this.root);
        return maxNode;
    }

}





module.exports = MaxBinaryTree;