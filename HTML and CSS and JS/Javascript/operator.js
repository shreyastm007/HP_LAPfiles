//arthimetic operators
console.log(30 + 30);
console.log(30 - 20);
//incremental operators
let a = 20;
let b = a++; // the inc operator increments and returns the value before increment
// let c = ++a;(o/p=22 it increments and return the values)
console.log(b);
console.log(a);

//comparison operatos

let num = 10;
let num2 = "10";
console.log(num == num2);
console.log(num === num2);

let num3 = 20;
let num4 = "20";
console.log(num3 == num4, "this is boolean");

let x = 30;
let y = 40;
console.log(x < y); //weird javascript
console.log(x != y); //x!==y true
console.log(x === y); //x==y true

//turnery operator
let age = 12;
console.log(age >= 18 ? "eligible for voting and dating" : "not eigible");

let marks = 85;
console.log(
  marks > 80
    ? "DISTINCTION"
    : marks > 70
    ? "FIRST CLASS"
    : marks > 35
    ? "SECOND CLASS"
    : "FAIL"
);

//typeof operator
const name = "avi";
console.log(typeof name);
const data = {
  name: "avi",
  sec: "a",
  salary: "208083",
};
console.log(typeof data);

//concatination operator
console.log("HELLO" + " " + "world");
console.log(5 + 5 + "hello");
console.log("5" + 5 + "hi");
console.log(5 + "5" + "good afternoon");
console.log("Number" + "10" + 30 + 40 + "are not correct");
