// console.log is used to log (print) a message to the console

console.log("Ubaid Shah");
console.log("I Love JavaScript");

/* variable
 variables are containers for data */

// var: Variable can be re-declared & updated.
var age = 24;
var age = 98;
var age = 876;
console.log(age);
// let: Variable cannnot be re-declared but can be updated.
let fullName = "obaid";
console.log(fullName);
// const: Variable cannot be re-declared or update.
const PI = 3.142;
console.log(PI);

/* Data Types in JS  
Number, String, Boolean, Undefined, Null, BigInt, Symbol
*/
// Number
let price = 400;
// String
let myName = "obaid";
// Boolean
let isFollow = false;
// Undefined
let y;
// Null
let x = null;
// BigInt
let a = BigInt("5476669568586");
// Symbol
let b = Symbol("hello");

const profile = {
  username: "ubaid343",
  isFollow: true,
  followers: 489,
  following: 84,
};

console.log(profile);
