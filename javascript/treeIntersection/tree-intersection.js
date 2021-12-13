"use strict";

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
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
  class LinkedList {
      constructor() {
          this.head = null;
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
  
      values() {
          let values = [];
          let current = this.head;
          while (current) {
            values.push(current.value);
            current = current.next;
          }
          return values;
        }
  } 
  
  class HashMap {
  
      constructor(size) {
        this.size = size;
        this.map = new Array(size); 
      }
    
     
      getHash(key) { //gethashedkey
        const assciSum = key.split('').reduce((p, n) => p + n.charCodeAt(0), 0);
        const withPrime = assciSum * 599;
        return withPrime % this.size; 
      }
    
 


    set(key, value) {
    
        let hash;
        if (typeof key == "number") {
          hash = key;
        } else {
          hash = this.getHash(key);
        }
        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }
        let entry = { [key] : value} 
        this.map[hash].append(entry);
    }
      get(key){
          let hash=this.getHash(key);
          if(!this.map[hash]) return null 
          let index=this.map[hash];
          let current=index.head
          if(!current) return 'does not exiset'
          if(current.value[key]) return current.value[key]
          while(current.next){
              current=current.next
              if(current.value[key]) return current.value[key]
          }
      }
      contains(key){
          let hash=this.getHash(key)
          if(!this.map[hash]) return false ;
          let index=this.map[hash];
          let current=index.head;
          if(!current) return false;
          if (current.value[key]) return true;
  
        while (current.next) {
          current = current.next;
          if (current.value[key]) return true;
        }
  
      }

      treeIntersection(firstTree, secondTree) {
        let key;
        let counter = 0;
        let hash;
        let results = [];
        let _traverse = (node) => {
          key = node.value;
          this.set(key, "x");
          if (counter > 0) {
            typeof key == "number"?(hash = key) : this.getHash(key);
            if (this.map[hash].head.next) {
              results.push(hash);
            }
          }
          if (node.left) {
            _traverse(node.left);
          }
          if (node.right) {
            _traverse(node.right);
          }
        };
        _traverse(firstTree.root);
        counter++;
        _traverse(secondTree.root);
          return results;
      }
  }

  module.exports={Node,BinaryTree,HashMap}
    