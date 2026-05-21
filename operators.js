//Operators are predefined functions that perform operations on values and variables. They are used to manipulate data and perform calculations. Here are some common types of operators in JavaScript:
//Oprands are the values on which the operators perform operations. They can be variables, constants, or expressions. For example, in the expression "a + b", "a" and "b" are operands, and "+" is the operator.
//1. Arithmetic Operators: These operators are used to perform mathematical operations on numbers. They include addition (+), subtraction (-), multiplication (*), division (/), modulus (%), increment (++), and decrement (--).

a= 10;
b= 5;
console.log('Addition: ' + (a + b)); // Addition
console.log('Subtraction: ' + (a - b)); // Subtraction
console.log('Multiplication: ' + (a * b)); // Multiplication
console.log('Division: ' + (a / b)); // Division
console.log('Modulus: ' + (a % b)); // Modulus
console.log('Increment: ' + (a++));   // Increment
console.log(a--);   // Decrement            

//2. Assignment Operators: These operators are used to assign values to variables. They include the simple assignment operator (=) and compound assignment operators (+=, -=, *=, /=, %=).
let x = 10; // Simple assignment
x += 5; // Compound assignment (x = x + 5)
console.log(x); // Output: 15   
x -= 3; // Compound assignment (x = x - 3)
console.log(x); // Output: 12
x *= 2; // Compound assignment (x = x * 2)
console.log(x); // Output: 24
x /= 4; // Compound assignment (x = x / 4)
console.log(x); // Output: 6
x %= 5; // Compound assignment (x = x % 5)
console.log(x); // Output: 1        

//logical operators: These operators are used to perform logical operations on boolean values. They include AND (&&), OR (||), and NOT (!).
let a = true;
let b = false;
console.log('AND: ' + (a && b)); // Output: false (AND)
console.log('OR: ' + (a || b)); // Output: true (OR)   
console.log('NOT a: ' + (!a)); // Output: false (NOT)
console.log('NOT b: ' + (!b)) ; // Output: true (NOT)

//conparison operators: These operators are used to compare two values and return a boolean result. They include equal to (==), not equal to (!=), strict equal to (===), strict not equal to (!==), greater than (>), less than (<), greater than or equal to (>=), and less than or equal to (<=).
let x = 10;
let y = 20;
console.log('Equal to: ' + (x == y)); // Output: false (Equal to)
console.log('Not equal to: ' + (x != y)); // Output: true (Not equal to)
console.log('Strict equal to: ' + (x === y)); // Output: false (Strict equal to)
console.log('Strict not equal to: ' + (x !== y)); // Output: true (Strict not equal to)
console.log('Greater than: ' + (x > y)); // Output: false (Greater than)
console.log('Less than: ' + (x < y)); // Output: true (Less than)
console.log('Greater than or equal to: ' + (x >= y)); // Output: false (Greater than or equal to)
console.log('Less than or equal to: ' + (x <= y)); // Output: true (Less than or equal to)      

//conditional (ternary) operator: This operator is a shorthand for an if-else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false. The syntax is: condition ? value_if_true : value_if_false.
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.     

//unary operators: These operators operate on a single operand. They include the unary plus (+), unary minus (-), logical NOT (!), and typeof operator.
let a = 5;
console.log('Unary plus: ' + (+a)); // Output: 5 (Unary plus)
console.log('Unary minus: ' + (-a)); // Output: -5 (Unary minus)
console.log('Logical NOT: ' + (!a)); // Output: false (Logical NOT)
console.log('Type of a: ' + (typeof a)); // Output: number (Type of operator)       

//ternary operator: This operator is a shorthand for an if-else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false. The syntax is: condition ? value_if_true : value_if_false.
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.     


