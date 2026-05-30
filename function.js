// function in JavaScript is a block of code designed to perform a particular task. It is executed when "something" invokes it (calls it). Functions are one of the fundamental building blocks in JavaScript and are used to structure and organize code, promote reusability, and manage complexity.

// There are several ways to define a function in JavaScript, including function declarations, function expressions, and arrow functions. Here are examples of each:    
//1. Function Declaration: This is the most common way to define a function. It consists of the "function" keyword followed by the function name, a list of parameters enclosed in parentheses, and a block of code enclosed in curly braces.
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Output: Hello, Alice!

//2. Function Expression: This is another way to define a function, where the function is assigned to a variable. The syntax is similar to a function declaration, but the function does not have a name (it is anonymous).
const greetExpression = function(name) {
  return "Hello, " + name + "!";
}
console.log(greetExpression("Bob")); // Output: Hello, Bob!

//3. Arrow Function: This is a more concise way to define a function, introduced in ES6. It uses the "=>" syntax and does not have its own "this" context.      
const greetArrow = (name) => {
  return "Hello, " + name + "!";
}
console.log(greetArrow("Charlie")); // Output: Hello, Charlie!

// Arrow functions can also be written in a more concise form when there is only one parameter and a single expression:
const greetConcise = name => "Hello, " + name + "!";
console.log(greetConcise("Dave")); // Output: Hello, Dave!




//types of functions in JavaScript
//1. Built-in Functions: These are functions that are provided by the JavaScript language itself. Examples include "alert()", "console.log()", "Math.max()", etc.
//2. User-defined Functions: These are functions that you create yourself to perform specific tasks in your code. They can be defined using any of the function definition methods mentioned above.
//3. Anonymous Functions: These are functions that do not have a name and are often used as arguments to other functions or assigned to variables. They can be defined using function expressions or arrow functions.
//4. Recursive Functions: These are functions that call themselves in order to solve a problem. They typically have a base case to prevent infinite recursion and a recursive case that breaks the problem into smaller subproblems.    
function factorial(n) {
  if (n === 0) {
    return 1; // Base case: factorial of 0 is 1
  } else {
    return n * factorial(n - 1); // Recursive case: n! = n * (n-1)!
  }
}
console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)




//four ways to define a function in JavaScript
//1. Function Declaration
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Output: 5
//2. Function Expression
const subtract = function(a, b) {
  return a - b;
}
console.log(subtract(5, 2)); // Output: 3
//3. Arrow Function
const multiply = (a, b) => {
    return a * b;
}
console.log(multiply(4, 6));
//4. Anonymous Function (used as a callback)
setTimeout(function() {
  console.log("This is an anonymous function used as a callback.");
}, 1000);



/* 
Class Exercise

4 ways to define a function in JavaScript

1. without parameter(arguments) and without return type
2. with parameter(arguments) and without return type
3. without parameter(arguments) and with return type
4. with parameter(arguments) and with return type

*/

//1. without parameter(arguments) and without return type
function greet() {
  console.log("Hello, World!");
}
greet(); // Output: Hello, World!

//2. with parameter(arguments) and without return type  
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Alice"); // Output: Hello, Alice!

//3. without parameter(arguments) and with return type
function getGreeting() {
  return "Hello, World!";
}
console.log(getGreeting()); // Output: Hello, World!

//4. with parameter(arguments) and with return type
function getPersonalGreeting(name) {
  return "Hello, " + name + "!";
}
console.log(getPersonalGreeting("Bob")); // Output: Hello, Bob!

// Keywords: var, let, const
//1. Scope
//2. Declaration/value assignment
//3. re-declaration
//4. re-initialization
//5. Hoisting

//var:-- we dont use var in modern JavaScript because of its function scope and hoisting behavior, which can lead to bugs and unintended consequences. It is generally recommended to use let and const instead for better code clarity and maintainability.
//scope: var is function-scoped, meaning it is accessible within the function it is declared in and any nested functions. It is not block-scoped, so it can be accessed outside of loops or conditional statements.
function varScope() {
  if (true) {
    var x = 10; // x is declared inside the if block
  }
    console.log(x); // Output: 10 (x is accessible outside the if block)
}
varScope();


//let:-- let is block-scoped, meaning it is only accessible within the block it is declared in (e.g., inside a loop or conditional statement). It is not hoisted like var, so it cannot be accessed before it is declared.
function letScope() {
  if (true) {
    let y = 20; // y is declared inside the if block
    console.log(y); // Output: 20 (y is accessible inside the if block)
  }
    // console.log(y); // Error: y is not defined (y is not accessible outside the if block)
}
letScope(); 

//const:-- const is also block-scoped like let, but it is used to declare variables that cannot be reassigned after they are initialized. It must be initialized at the time of declaration and cannot be left uninitialized.
function constScope() {
  if (true) {   
    const z = 30; // z is declared inside the if block
    console.log(z); // Output: 30 (z is accessible inside the if block)
  } 
    // console.log(z); // Error: z is not defined (z is not accessible outside the if block)
}
constScope();

// variable declaration and value assignment
var a = 10; 
let b = 20;
const c = 30;
//scenarios of re-declaration and re-initialization
var a = 15; // Re-declaration and re-initialization of var is allowed
console.log(a); // Output: 15
// let b = 25; // Error: Identifier 'b' has already been declared (re-declaration of let is not allowed)
b = 25;
console.log(b); // Output: 25 (re-initialization of let is allowed)
// const c = 35; // Error: Identifier 'c' has already been declared (re-declaration of const is not allowed)
// c = 35; // Error: Assignment to constant variable (re-initialization of const is not allowed)    


