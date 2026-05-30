//object in javaScript: An object is a collection of properties, where each property is a key-value pair. Objects can represent real-world entities and can have methods (functions) associated with them. The syntax for creating an object is: let objectName = { key1: value1, key2: value2, ... };
// Example of creating an object

let person = {
    name: "Alice",
    age: 30,
    isStudent: true
    };
let person1 = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
person1.greet(); // Output: Hello, my name is Alice  

console.log(person1.name); // Output: Alice
console.log(person1.age); // Output: 30
console.log(person1.isStudent); // Output: true  
console.log(typeof person1); // Output: object

//changing the value of a property
person1.age = 31;
console.log(person1.age); // Output: 31
//adding a new property
person1.city = "New York";
console.log(person1.city); // Output: New York
//deleting a property
delete person1.isStudent;
console.log(person1.isStudent); // Output: undefined

//adding a function ot method in an object
person1.greet = function() {
    console.log("Hello, my name is " + this.name);
};
person1.greet(); // Output: Hello, my name is Alice


//json object: JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is often used to transmit data between a server and a web application as an alternative to XML. The syntax for JSON is similar to JavaScript objects, but it has some differences, such as using double quotes for keys and string values, and not allowing functions or undefined values. The syntax for JSON is: let jsonString = '{"key1": "value1", "key2": "value2", ...}';
let jsonString = '{"name": "Alice", "age": 30, "isStudent": true}';
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject); // Output: { name: 'Alice', age: 30, isStudent: true }
console.log(jsonObject.name); // Output: Alice
console.log(jsonObject.age); // Output: 30
console.log(jsonObject.isStudent); // Output: true
console.log(typeof jsonObject); // Output: object

const kuldeep = '{"name": "Bob", "age": 25, "isStudent": false}';
const jsonObject1 = JSON.parse(kuldeep);
console.log(jsonObject1); // Output: { name: 'Bob', age: 25, isStudent: false }
console.log(jsonObject1.name); // Output: Bob
console.log(jsonObject1.age); // Output: 25
console.log(jsonObject1.isStudent); // Output: false
console.log(typeof jsonObject1); // Output: object  

//client to server --> change the format from json to string 
//  JSON.stringify() method is used to convert a JavaScript object into a JSON string, which can be sent to a server or stored in a file. The syntax is: let jsonString = JSON.stringify(object);

const jsonString1 = JSON.stringify(kuldeep);
console.log(jsonString1); // Output: "{"name": "Bob", "age": 25, "isStudent": false}" 

// to transfer data from server to client --> change the format from string to json
// JSON.parse() method is used to parse a JSON string and convert it into a JavaScript object. The syntax is: let jsonObject = JSON.parse(jsonString);  

const jsonObject2 = JSON.parse(jsonString1); // Output: { name: 'Bob', age: 25, isStudent: false }
console.log(jsonObject2); // Output: { name: 'Bob', age: 25, isStudent: false }



