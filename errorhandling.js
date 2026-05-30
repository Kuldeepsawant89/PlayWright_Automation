// error - when there is an error in the code, it will throw an error and stop the execution of the program.
// try - it is used to wrap the code that may throw an error. It allows you to handle the error gracefully without crashing the program.
// catch - it is used to handle the error that is thrown by the try block. It allows you to log the error or display a user-friendly message.
// finally - it is used to execute the code that will run regardless of whether an error was thrown or not. It is often used for cleanup tasks, such as closing database connections or releasing resources.



setTimeout(() => {
    console.log("tc1")
    
}, 2000);

try {
 
    console.log(tc1); // This will throw an error because tc1 is not defined
} catch (error) {
  console.error("Caught an error:", error.message); // Log the error message to the console
}

setTimeout(() => {
  console.log("tc2");
}, 2000);
setTimeout(() => {
  console.log("tc3");
}, 2000);
setTimeout(() => {
  console.log("tc4");
}, 2000);

//try catch finally example
try {
    console.log("tc1");
    console.log(tcs2); // This will throw an error because tc2 is not defined
    throw new Error("An error occurred!"); // Simulate an error by throwing an exception
} 
catch (error) {
    console.error("Caught an error:", error.message); // Log the error message to the console
} 
finally {
    console.log("This will always execute, regardless of whether an error was thrown or not."); // This code will run regardless of the error
}

