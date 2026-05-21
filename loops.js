//loops are used to repeat a block of code until a specified condition is met. There are several types of loops in JavaScript, including for loops, while loops, and do...while loops.

//1. For Loop: A for loop is used to repeat a block of code a specific number of times. The syntax is: for (initialization; condition; increment/decrement) { // code to be executed }
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}   
//2. While Loop: A while loop is used to repeat a block of code as long as a specified condition is true. The syntax is: while (condition) { // code to be executed }
let j = 0;
while (j < 5) {
    console.log("Iteration: " + j);
    j++;
}
//3. Do...While Loop: A do...while loop is similar to a while loop, but it guarantees that the block of code will be executed at least once, even if the condition is false. The syntax is: do { // code to be executed } while (condition);
let k = 0;
do {
    console.log("Iteration: " + k);
    k++;
} while (k < 5);

//////////////Class Exercise//////////////


// WAP to print the first 10 natural numbers using a for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}       

// WAP to print the first 10 natural numbers using a while loop
let m = 1;  
while (m <= 10) {
    console.log(m);
    m++;
}
// WAP to print the first 10 natural numbers using a do...while loop
let n = 1;
do {
    console.log(n);
    n++;
} while (n <= 10);  

//WAP id number is prime or not
let num = 17;
let isPrime = true; 
if (num <= 1) {
  isPrime = false; 
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false; 
      break;
    }
  }
}
if (isPrime) {
  console.log(num + " is a prime number.");
} else {
  console.log(num + " is not a prime number.");
}   

//WAP for fabonacci series
let count = 10; 
let a = 0, b = 1, nextTerm;
console.log("Fibonacci Series:");
for (let i = 0; i < count; i++) {
  console.log(a);
  nextTerm = a + b;
  a = b;
  b = nextTerm;
}

//WAP to print reverse of a number
let number = 12345;
let reversed = 0;

while (number > 0) {
  let digit = number % 10; 
  reversed = (reversed * 10) + digit; 
  number = Math.floor(number / 10); 
}
console.log("Reversed Number: " + reversed);

//WAP to print reverse of a number using math.floor
let num1 = 12345;
let reversedNum = 0;    
while (num1 > 0) {
  let digit = num1 % 10; 
  reversedNum = (reversedNum * 10) + digit; 
  num1 = Math.floor(num1 / 10); 
}
console.log("Reversed Number: " + reversedNum);

