//module in javascript is a reusable piece of code that encapsulates related functionality and can be imported and used in other parts of a JavaScript application. Modules help in organizing code, promoting code reusability, and maintaining a clean and modular codebase. In JavaScript, there are two main types of modules: CommonJS modules (used in Node.js) and ES6 modules (used in modern JavaScript environments).
//1. CommonJS Modules: In CommonJS, modules are created using the `module.exports` object to export functionality and the `require()` function to import modules. This is commonly used in Node.js applications.
//Example of a CommonJS module (math.js)



export function add1(a,b) { 
    return a + b;
}
console.log(add1(2,3)); // Output: 5

export function add(a,b) { 
    return a + b;
}
//console.log(add(2,3)); // Output: 5

export function sub(a,b) { 
    return a - b;
}
//console.log(sub(5,2)); // Output: 3