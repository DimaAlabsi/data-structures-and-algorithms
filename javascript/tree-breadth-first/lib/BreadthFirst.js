"use strict";
const Node=require('./Node')
const breadthFisrt=(tree)=>{
    let arrayOfResult=[];
    arrayOfResult.push(tree.root.value);
    const _walk=(node)=>{
        arrayOfResult.push(node.left.value);
        arrayOfResult.push(node.right.value);
        if(node.left.left){_walk(node.left)}
        if(node.right.right){_walk(node.right)}

    };
    _walk(tree.root);
    return arrayOfResult
}

module.exports=breadthFisrt;