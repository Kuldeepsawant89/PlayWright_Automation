//array in javaScript: An array is a data structure that can hold multiple values at once. It is a type of object and can store any type of data, including other arrays. Arrays are ordered, meaning that the elements are stored in a specific order and can be accessed using their index. The syntax for creating an array is: let arrayName = [element1, element2, ...];
// Example of creating an array
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]


let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Accessing array elements using index
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Cherry   
console.log(numbers[0]); // Output: 1
console.log(numbers[1]); // Output: 2
console.log(numbers[2]); // Output: 3
console.log(numbers[3]); // Output: 4
console.log(numbers[4]); // Output: 5   

//length of an array
console.log(fruits.length); // Output: 3
console.log(numbers.length); // Output: 5

let mixedArray = ["Hello", 42, true, [1, 2, 3]];
console.log(mixedArray); // Output: ["Hello", 42, true, [1, 2, 3]]
console.log(mixedArray.length); // Output: 4
console.log(mixedArray[3]); // Output: [1, 2, 3]
console.log(mixedArray[3][0]); // Output: 1
console.log(mixedArray[3][1]); // Output: 2
console.log(mixedArray[3][2]); // Output: 3

// for loop to iterate through an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//for of loop to iterate through an array
for (let fruit of fruits) {
  console.log(fruit);
}
for (let number of numbers) {
    console.log(number);
}

// array methods: There are several built-in methods in JavaScript that can be used to manipulate arrays, such as push(), pop(), shift(), unshift(), splice(), slice(), indexOf(), and many more. These methods allow you to add, remove, and modify elements in an array, as well as perform various operations on the array.
fruits.push("Durian");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Durian"]

fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

fruits.shift();
console.log(fruits); // Output: ["Banana", "Cherry"]

fruits.unshift("Apple");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

fruits.splice(1, 1, "Blueberry");
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

let citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ["Blueberry", "Cherry"] it will not change the original array and make copy of the array

console.log(fruits.indexOf("Cherry")); // Output: 2 


//for each function to iterate through an array
fruits.forEach(function(fruit) {
  console.log(fruit);
});
numbers.forEach(function(number) {
    console.log(number);
});

fruits.forEach(fruit => console.log(fruit));
numbers.forEach(number => console.log(number));     

//filter function to filter elements in an array
let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

let oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(oddNumbers); // Output: [1, 3, 5]


//map function to create a new array by applying a function to each element in an array
let squaredNumbers = numbers.map(function(number) {
  return number * number;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

let cubedNumbers = numbers.map(number => number * number * number);
console.log(cubedNumbers); // Output: [1, 8, 27, 64, 125]


