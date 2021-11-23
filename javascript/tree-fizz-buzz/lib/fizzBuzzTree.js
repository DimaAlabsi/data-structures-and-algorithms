"use strict";

let fizzBuzzTree = (tree) => {
  let current = tree.root;
  let nodesresults = [];
  if (!current) return -1;
  let _walk = (node) => {
    if (node.value % 3 == 0 && node.value % 5 == 0) {
      node.value = "fizzBuzz";
      nodesresults.push(node.value);
    } else if (node.value % 3 == 0) {
      node.value = "fizz";
      nodesresults.push(node.value);
    } else if ((node.value & 5) == 0) {
      node.value = "buzz";
      nodesresults.push(node.value);
    } else {
      nodesresults.push(node.value.toString());
    }

    if (node.left) _walk(node.left);
    if (node.right) _walk(node.right);
  };
  _walk(current);
  return nodesresults;
};
module.exports = fizzBuzzTree;
