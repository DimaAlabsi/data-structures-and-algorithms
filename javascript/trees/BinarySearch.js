"use strict";

const Node = require("./Node");
class BinarySearch{
    constructor(root=null){
this.root=root;
    }
    add(value) {
        let node = new Node(value);
        if(!this.root){
            this.root=node;
            return
        }
        let current=this.root
        while(current){
            if(current.value>node.value){
                if(!current.left){
                    current.left=node
                    return;
                }
                else{
                    current=current.left
                }
            }else{

                if(!current.right){
                    current.right=node
                    return;
                }
                else{
                    current=current.right
                }
            }
        }
        return this.root
      }
      Contains(value){
        if(!this.root){
            return 'there is no binary search tree'
        }
        let current=this.root
       while(current){
           if(value==current.value){
               return true
           }
          else if(value>current.value){
               current=current.right
               
           }
           else{
               current=current.left
              
           }
       }
       return false
    }
}

module.exports= BinarySearch;