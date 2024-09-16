console.log("Hello World!");

// JS is a loose-type means (di maselan) programming language
console.log("Hello World!")
console  .   log       ("Hello World!")
console  
.   
log       
("Hello World!")

// Best practice
console.log("Hello World!");


// Variable declaration
// Syntax: let variableName = value;
let number = 20;
console.log(number);

let name = "John Lazy";
console.log(name);

let isLegal = true;
console.log(isLegal);

let average = 96.75;
console.log(average);

// to check data type of a variable
console.log(typeof number);
console.log(typeof isLegal);
console.log(typeof name);

//Math Operators
let num1 = 20;
let num2 = 10;

let sum = num1 + num2;
console.log(sum);

let diff = num1 - num2;
console.log(diff);

let prod = num1 * num2;
console.log(prod);

let quo = num1 / num2;
console.log(quo);

let mod = num1 % num2;
console.log(mod);

// Equality  Operator
let num3 = 5, num4 = 3;
let stringNum = "5"

// EQUAL
console.log(num3 == num4);
console.log(num3 == stringNum);

// Strict Equality (checking data type)
console.log(num3 === stringNum);

// Not Equal
console.log(num3 != num4);

// Stricly Not Equal
console.log(num3 !== stringNum);

// Realational Operator
console.log(num3 < num4);
console.log(num3 > num4);

// Logical Operators
let isMarried = true;
let isEmployed = true;
let isVoter = false;

// AND Operators
console.log(isMarried && isEmployed)
console.log(isMarried && isEmployed && isLegal);
console.log(isMarried && isEmployed && isLegal && isVoter)

// OR Operators
console.log(isMarried || isEmployed || isLegal || isVoter)

// Selection Control Structure
// 1. if, else, else if
// 2. switch-case

// Conditional Statement
if(num3 > num4){
    console.log("Hello UA")
}else{
    console.log("Hello Again!")
}
