// Infix notation (operators come in between operands like normal usage)

// Prefix notation (operators come before operands)

// Postfix notation (operators are placed on the left of their operands)


// Algorithm :
// Format the input expression and create an empty array to add those numbers

// Check for expression is empty or not before looping through.

// Loop through expression and push the numbers to stack array. Once we are out of numbers, that means we have stepped up on operators, hence pop out the last two numbers and perform corresponding operations

// Add the result to stack again.

// If the stack has more than one number and we are out of operators, we return "ERROR" to the console, else return the result to console
function reversePolish(newExpr) {
    let expr = newExpr.split(" ");
    let stack =[];
     if(expr === ''){
      return 0;
    }
  
    for(let i=0; i<expr.length; i++) {
      if(!isNaN(expr[i]) && isFinite(expr[i])) {
        stack.push(expr[i]);
  
      }else {
        let a = stack.pop();
        let b = stack.pop();
        if(expr[i] === "+") {
          stack.push(parseInt(a) + parseInt(b));
        } else if(expr[i] === "-") {
            stack.push(parseInt(b) - parseInt(a));
          } else if(expr[i] === "*") {
              stack.push(parseInt(a) * parseInt(b));
          } else if(expr[i] === "/") {
              stack.push(parseInt(b) / parseInt(a));
          } else if(expr[i] === "^") {
              stack.push(Math.pow(parseInt(b), parseInt(a)));
          }
      }
    }
  
    if(stack.length > 1) {
      return "ERROR";
    }else {
      return stack[0];
    }
  
  }
  
  console.log(reversePolish('1 3 5 * -'));  // Result: -14
