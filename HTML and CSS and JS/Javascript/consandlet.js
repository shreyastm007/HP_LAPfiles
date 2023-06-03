console.log(student);
var student = "AVI";
var student = 34;
console.log(student);
// to avoid these conflicts we have let and const key words
// are intoduced into ES6
var d;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
var a = 10;
var b = 20;
var c = 30;
console.log(a);
console.log(b);
console.log(c);
// let and const
//console.log(sec);
// temporal dead zone-time between var declaration and var initialization
//we cant access the var untill its assigned with some value
var sec = "b";
// console.log(sec);
const num2 = 56;
// let x=10; redeclaration not possible
// console.log(x);
let m = 20;
x = m; // reinitialization is possible
console.log(x);
const y = 50; //redec and reinit not possible in const
console.log(y);
// console.log(num);error
// const num=20;
// const num = 30;
let num = 30;
let numbr2 = 20;
num = numbr2; //error reintialization not possible in const
console.log(numbr2);
