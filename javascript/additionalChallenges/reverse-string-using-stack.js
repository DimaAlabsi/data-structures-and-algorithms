// reverse-string-using-stack

function reverse(str){
    //Creates a new stack
    let stack = new Stack();
     
    let i = 0;
    let reversedStr = "";
    //Adds all the characters to the stack.
    while (i !== str.length) {
        stack.push(str.charAt(i));
        i++;
    }
  
    //Creates a reversed string by popping the stack.
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }
    //returns the reversed string.
    return reversedStr;
}