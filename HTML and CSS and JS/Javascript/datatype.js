// data type
// premitive data type-string,boolean,number,null,undefined
// reference data type-functions,objects,arrays

// premitive-they are immmutable(cant change)
var data = "AVI PALERYA S R";
var num = 2000;
var male = true;
console.log(data, num, male);

var a;
console.log(a);
var b = null;
console.log(b);

var greet = "good morning";
var greet1 = greet.toUpperCase();
console.log(greet1);

console.log(greet1.charAt(5));
console.log(greet1.indexOf("O"));

var wishing = "Good Aftenoon";
console.log(wishing.includes("Good"));
console.log(wishing.replace("Aftenoon", "morning"));
console.log(wishing);

var email = "                avi@gmail.com";
console.log(email);
console.log(email.trim());

var data = "avipaleryasr";
var sub = data.substring(5, 3);
console.log(sub);
