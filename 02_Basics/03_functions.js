// Functions in JS: A block of code that performs a specific task and can be invoked whenever needed.

/*
-------------------1. FUNCTION DEFINITION-------------------
function functionName(parameters) {
  // do some work
}

function functionName(param1, param2, ...) {
  // do some work
}

-------------------2. FUNCTION CALL (function invoke - function ko bulana)-------------------
functionName();
*/

//-------------------EXAMPLE 1: Simple Function Definition and Call-------------------
function myFunction() {
  console.log("Hello guys :] We are learning functions and methods in JS");
}
myFunction(); // Output: Hello guys :] We are learning functions and methods in JS

//-------------------EXAMPLE 2: Function with Parameter and Argument-------------------
function myFunction1(msg) {
  // (msg) AKA parameter -> input variable
  console.log(msg); // Output: I love JS :)
}
myFunction1(); // Output: undefined (because no value is passed to msg input variable since it is blank, therefore yields undefined.)
myFunction1("I love JS :)"); // [AKA argument]

/*
Difference between 'function definition' and 'function call'?
- Inside the function definition, the variable present (msg) is called a parameter.
- Inside the function call, the value that we pass is called an argument.
*/

//-------------------EXAMPLE 3: Function with Multiple Parameters and Operations-------------------
function myFunction2(msg, n) {
  console.log(msg, n); // Output: I love JS 10
  console.log(msg + n); // Output: I love JS10
  console.log(msg - n); // Output: NaN (Not a Number)
  console.log(msg * n); // Output: NaN
}
myFunction2("I love JS", 10);

//-------------------EXAMPLE 4: Function with Return Statement-------------------
function sum(x, y) {
  // 'x' and 'y' act as the function's local variables
  // Local variables -> within the scope of the function
  let s = x + y;
  console.log("before return");
  return s; // This 's' value will be returned to where it was called by the function.
  console.log("after return"); // Unreachable code
}

// Return keyword:
// - Used to return the value from the function.
// - Used to exit the function.
// - Used to stop the execution of the function.

let val = sum(1, 2);
console.log(val); // Output: 3

/*
If we try to print the local variables of the function (like 'x' and 'y') outside the function,
it will give an 'Uncaught ReferenceError: x is not defined'.
But if we print the same inside the function, it will show the resultant output.
*/
// console.log(x, y); // Uncommenting this will throw an error

// Conclusion:
// - Function parameters are like local variables of functions.
// - They have block scope.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ARROW FUNCTION
// A compact way of writing a function.
/*
Syntax:
const functionName = (param1, param2, ...) => {
  // do some work
};
*/

//-------------------EXAMPLE 1: Arrow Function with Two Parameters-------------------
const arrowSum = (a, b) => {
  console.log(a + b);
  // return a + b;
};
arrowSum(10, 20); // Output: 30

// Note:
// - Return keyword is not needed in arrow functions when there is only one statement in the function body.
// - If there are multiple statements, you need to use the return keyword.
// - If you want to return the sum, uncomment the return keyword in the above code.
