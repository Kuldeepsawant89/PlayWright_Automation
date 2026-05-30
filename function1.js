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


alert("This is an alert message!"); // This will display an alert box with the specified message

let number = prompt("Please enter your Number to check even or Odd:"); // This will display a prompt box asking the user to input their number

if (number % 2 === 0) {
  //console.log(number + " is an even number.");
  confirm(number + " is an even number."); // This will display a confirmation box with the specified message"); 
} else {
 // console.log(number + " is an odd number.");
 confirm(number + " is an odd number.");
}
confirm("Do you want to proceed?"); // This will display a confirmation box asking the user to confirm their action 


//local and global variable in JavaScript using var, let and const function testVar() {
    var x = 10; 

    if (true) {
        var x = 20;
        console.log("Inside if block: " + x); // Output: 20
    }
    console.log("Outside if block: " + x); // Output: 20
}
testVar();
function testLet() {
    let y = 10;
    if (true) {
        let y = 20;
        console.log("Inside if block: " + y); // Output: 20
    }
    console.log("Outside if block: " + y); // Output: 10
}
testLet();
function testConst() {
    const z = 10;
    if (true) {
        const z = 20;
        console.log("Inside if block: " + z); // Output: 20
    }
    console.log("Outside if block: " + z); // Output: 10
}
testConst();

//anonymous function: This is a function that does not have a name. It is often used as a callback function or assigned to a variable. The syntax is: function() { // code to be executed }
// Example of an anonymous function assigned to a variable
const anonymousFunction = function() {
  console.log("This is an anonymous function.");
};
anonymousFunction(); // Output: This is an anonymous function.

// Example of an anonymous function used as a callback
setTimeout(function() {
  console.log("This is an anonymous function used as a callback.");
}, 1000); // This will execute the anonymous function after a delay of 1000 milliseconds (1 second)

//arrow function: This is a shorter syntax for writing functions in JavaScript. It is often used for writing concise functions, especially when using higher-order functions like map, filter, and reduce. The syntax is: (parameters) => { // code to be executed }
// Example of an arrow function
const greet = (name) => {
  return "Hello, " + name + "!";
};
console.log(greet("Alice")); // Output: Hello, Alice!
// Example of a concise arrow function
const greetConcise = name => "Hello, " + name + "!";
console.log(greetConcise("Bob")); // Output: Hello, Bob!

//lambda function: This is a term often used interchangeably with anonymous functions, especially in the context of functional programming. In JavaScript, lambda functions are typically implemented using arrow functions. They are used to create small, unnamed functions that can be passed as arguments to other functions or used as callbacks.
// Example of a lambda function using an arrow function
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num); // Using a lambda function to square each number in the array
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

/* 
class comments
Arrow functin / labda function are modern js or ES6 2016

* Lambda refers to an anonymous function  programming a
* Arrow functions are compact or concise mechanism to represent anonymous functions in JavaScript. 

*=> Arrow notation 


*Syntax 

let variable = (parameters) => 
{
    // function body}
}
    variable(parameters); // function call

*/

//Arrow function with no parameter and no return

let js = () => {
    console.log("This is an arrow function with no parameter and no return type.");
}   
js(); // Output: This is an arrow function with no parameter and no return type.

//Arrow function with parameter and         return type
let greet = name => {
    return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Output: Hello, Alice!

//Arrow function with parameter and concise return type
let greetConcise = name => "Hello, " + name + "!";
console.log(greetConcise("Bob")); // Output: Hello, Bob!

 //callback function: This is a function that is passed as an argument to another function and is executed after some operation has been completed. Callback functions are commonly used in asynchronous programming to handle events or perform actions after a certain task is finished.
 //class notes on callback function
 // synchronous -
// Example of a callback function
function fetchData(callback) {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
        const data = "Sample data";
        callback(data); // Calling the callback function with the fetched data
    }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
}

fetchData((data) => {
    console.log("Data received: " + data); // Output: Data received: Sample data
});

// class example of callback function
//POST --> token or ID
//GET --> token or ID
//POST --> token or ID
//DELETE --> token or ID

// console.log("SignUp");
// console.log("Login");
// console.log("add to cart");
// console.log("OrderPlace");

function great(name, saybye) {
  console.log(name);
  saybye();
}

function saybye() //callback function
{
  console.log("Bye.");
}
great("Alice", saybye);


//application of this callback function in automation testing
//1. Handling asynchronous operations: In automation testing, you often need to perform actions that involve waiting for certain conditions to be met, such as waiting for an element to be visible or waiting for a page to load. Callback functions can be used to handle these asynchronous operations and ensure that your test code executes in the correct order.
//2. Event handling: In automation testing, you may need to simulate user interactions with the application, such as clicking a button or filling out a form. Callback functions can be used to handle events triggered by these interactions and perform assertions or further actions based on the event outcomes.
//3. Data processing: In automation testing, you may need to process data retrieved from the application or perform calculations based on test results. Callback functions can be used to handle data processing tasks and ensure that the necessary operations are performed after the data is available.

// console.log("SignUp");
// console.log("Login");
// console.log("add to cart");
// console.log("OrderPlace");
console.log("SignUp");
setTimeout(() => {
  console.log("Login");
}, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
setTimeout(() => {
  console.log("add to cart");
}, 4000); // Simulating a delay of 4000 milliseconds (4 seconds)
setTimeout(() => {
  console.log("OrderPlace");
}, 6000); // Simulating a delay of 6000 milliseconds (6 seconds)

// nested callback functions: In automation testing, you may encounter situations where you need to perform multiple asynchronous operations in a sequence. Nested callback functions can be used to handle these scenarios and ensure that each operation is executed after the previous one has completed. However, it's important to manage nested callbacks carefully to avoid callback hell and maintain code readability.

//class notes on nested callback functions

/*nesting of call back --> call back hell
//callback hell is resolved by using promises and async await in JavaScript
//nesting of promises --> promise hell
// promise hell is resolved by using async await in JavaScript
*/


console.log("SignUp");
setTimeout(() => {
  console.log("Login");
    setTimeout(() => {
        console.log("add to cart");
        setTimeout(() => {
            console.log("OrderPlace");
        }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
    }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
}, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)



