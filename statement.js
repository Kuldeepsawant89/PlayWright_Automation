//if, if else, nested if, switch case
//WAP to check whether the given number is positive, negative or zero
let number = 0; // You can change this value to test with different numbers
if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

//WAP to check whether the given number is divisible by 2, 3 and 5
let num = 30;
if (num % 2 === 0) {
  console.log(num + " is divisible by 2.");
}
if (num % 3 === 0) {
  console.log(num + " is divisible by 3.");
}
if (num % 5 === 0) {
  console.log(num + " is divisible by 5.");
}

//WAP to check whether the given number is even or odd
let number1 = 15;
if (number1 % 2 === 0) {
  console.log(number1 + " is an even number.");
} else {
  console.log(number1 + " is an odd number.");
}

//WAP to check whether the given year is a leap year or not
let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}

//WAP to check if person age is 18 or above then he is eligible for voting otherwise not
let age = 20;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

//Switch case: This is a control flow statement that allows you to execute different blocks of code based on the value of a variable or expression. It is often used as an alternative to multiple if-else statements when you have a large number of conditions to check. The syntax is:
//switch (expression) {
//  case value1:

//    // code to be executed if expression === value1
//    break;
//  case value2:
//    // code to be executed if expression === value2
//    break;
//  ...
//  default:
//    // code to be executed if expression doesn't match any case
//}

//WAP using switch case to check the day of the week based on the given number (1 for Monday, 2 for Tuesday, etc.)
let dayNumber = 3; // You can change this value to test with different numbers
switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number.");
}

//WAP to check if number is palindrome or not
let num1 = 12321;
let strNum = num1.toString();
let reversedStrNum = strNum.split("").reverse().join("");
if (strNum === reversedStrNum) {
  console.log(num1 + " is a palindrome number.");
} else {
  console.log(num1 + " is not a palindrome number.");
}

//let kuldeep;
kuldeep = 10;
console.log(kuldeep);