"use strict"; // treat all Js code as newer version

/*
types of datatypes

numbers
bigint
string
boolean
null
undefined
symbol


object

*/ 
let n1 = 64
let n2 = "this is a string"
let n3 = true
let n4 = null
let n5;

console.log(typeof n1);
console.log(typeof n2);
console.log(typeof n3);
console.log(typeof n4);
console.log(typeof n5);





// conversions 

let score = "Yatharth"
console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


let isLoggedIn = "Yatharth"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


// 1 => true; 0 => false
// IIII => false
// "hitesh" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);