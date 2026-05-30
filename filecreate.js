const fs = require('fs'); // Import the built-in 'fs' module for file system operations

// Create a new file named 'example.txt' and write some content to it
fs.writeFileSync('./example.txt', 'Hello, World!');   
console.log('File created successfully!'); // Log a message to the console indicating that the file was created

