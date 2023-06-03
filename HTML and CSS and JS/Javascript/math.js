//MATH object
//Min method will accept the list of values as argument and returns the min value
let minNum = Math.min(12, 20, 1, 3, 8, 4, 100, 1, 89);
console.log(minNum);

//Max method
let maxNum = Math.max(12, 20, 1, 3, 8, 4, 100, 1, 89);
console.log(maxNum);

//Power method
let powofnum = Math.pow(2, 3);
console.log(powofnum);

//Floor method-round figure of the  number
let floornum = Math.floor(20.9);
console.log(floornum);

//ceil method-round figure to next num
let ceilnum = Math.ceil(20.4);
console.log(ceilnum);

//random mehtod-displays values between 0 and 1, refreshing the page another new number btw 0 and 1.
let ranum = Math.random();
console.log(ranum);

let students = [
  "avi",
  "akshata",
  "namana",
  "nayana",
  "nuthana",
  "prajwal",
  "vaibhav",
  "himagirish",
];
let randomIndex = Math.floor(Math.random(students) * students.length);
console.log(students[randomIndex]);
