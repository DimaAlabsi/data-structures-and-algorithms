"use strict";
const {Node,BinaryTree}=require('../lib/BinaryTree')
const fizzBuzzTree=require('../lib/fizzBuzzTree');


        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        one.left = two;
        one.right = three;
        two.left = six;
        three.left = four;
        three.right = five;
      


       describe('Binary Tree', ()=>{ 
    

       let tree = new BinaryTree(one);
         it ('fizzBuzz()' ,()=>{
                let result=[
                    "1",
                    "buzz",
                    "fizz",
                    "fizz",
                    "4",
                    "5",
                ]
                let testTree=new BinaryTree()
                expect(fizzBuzzTree(tree)).toEqual(result)
                expect(testTree.root).toBeNull()
                expect(fizzBuzzTree(testTree)).toBe(-1)

         })

       })