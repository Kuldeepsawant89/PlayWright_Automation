//string in javascript is a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `). Strings are used to represent text and can contain letters, numbers, symbols, and whitespace.

//Example of string declaration
let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
let backtickString = `Hello, World!`;
console.log(singleQuoteString); // Output: Hello, World!
console.log(doubleQuoteString); // Output: Hello, World!
console.log(backtickString); // Output: Hello, World!
//String concatenation: You can concatenate (combine) strings using the + operator or template literals.
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Doe
let fullNameTemplateLiteral = `${firstName} ${lastName}`;
console.log(fullNameTemplateLiteral); // Output: John Doe
//String methods: JavaScript provides several built-in methods to manipulate strings, such as length, toUpperCase(), toLowerCase(), indexOf(), slice(), substring(), replace(), and many more. These methods allow you to perform various operations on strings, such as changing case, finding substrings, extracting parts of a string, and replacing characters or substrings.
let str = "Hello, World!  ";
console.log(str.length); // Output: 13
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log(str.toLowerCase()); // Output: hello, world!
console.log(str.indexOf("World")); // Output: 7
console.log(str.slice(0, 5)); // Output: Hello
console.log(str.substring(7, 12)); // Output: World
console.log(str.replace("World", "JavaScript")); // Output: Hello, JavaScript!  
console.log(str.trim()); // Output: Hello, World! (original string remains unchanged)
console.log(str.charAt(3)); // Output: l (original string remains unchanged)
console.log(str.includes("World")); // Output: true (original string remains unchanged)
console.log(str.startsWith("Hello")); // Output: true (original string remains unchanged)
console.log(str.endsWith("!")); // Output: true (original string remains unchanged)
console.log(str.slice(3, 8)); // Output: "llo, " (original string remains unchanged)
console.log(str.substring(3, 8)); // Output: "lo, W" (original string remains unchanged)    
console.log(str.replace("llo", "JavaScript")); // Output: HeJavaScript, World! (original string remains unchanged)
console.log(str.repeat(3)); // Output: Hello, World!  Hello, World!  Hello, World!   (original string remains unchanged)

let s2 = 'Hello, World!, sass, sasa'
console.log(s2);
console.log(typeof s2); // Output: string
console.log(s2.split(", ")); // Output: ["Hello", "World!", "sass", "sasa"] (original string remains unchanged) 


let s3 = "a,sas@gmail.com, World!";
let l = s3.split(','); // Output: ["a", "sas@gmail.com", " World!"]
console.log(s3);
console.log(typeof s3);
console.log(l);
console.log('Name: ' + l[0]); // Output: Name: a
console.log('Email: ' + l[1]); // Output: Email: sas@gmail.com
console.log('Domain: ' + l[2]); // Output: Domain: World!

//trimstart and trimend
let s4 = "   Hello, World!   ";
console.log(s4.trimStart()); // Output: "Hello, World!   " (original string remains unchanged)
console.log(s4.trimEnd()); // Output: "   Hello, World!" (original string remains unchanged)    

//string is immutable in JavaScript, which means that once a string is created, it cannot be changed. Any operation that appears to modify a string actually creates a new string. For example:
let originalString = "Hello";
let modifiedString = originalString + ", World!";
console.log(originalString); // Output: Hello (original string remains unchanged)
console.log(modifiedString); // Output: Hello, World! (a new string is created) 

//backticks (template literals) allow for multi-line strings and string interpolation. You can include variables and expressions inside a template literal using the ${} syntax. For example:
let name = "Alice";
let age = 30;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: Hello, my name is Alice and I am 30 years old.    

//multi-line string using backticks
let multiLineString = `This is a multi-line string.
It can span multiple lines without the need for escape characters.
This makes it easier to read and write long strings.`;
console.log(multiLineString); // Output: This is a multi-line string. It can span multiple lines without the need for escape characters. This makes it easier to read and write long strings. (original string remains unchanged)



