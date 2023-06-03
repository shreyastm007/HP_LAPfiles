//function declaration
function add(a, b) {
  return a + b;
}

console.log(add(1, 7)); //function calling

//anonymous function
let addanony = function (a) {
  return a * a;
};

addanony(3);
console.log(addanony(3));

//arrow functions ES6 featurre
let ArrowFun = (arguments) => {
  //statements
};
ArrowFun();

let ArrFun = (a, b) => {
  return a * b;
};
console.log(ArrFun(3, 2));

//immediatelly invoked function
(function (a, b) {
  return a - b;
})();
console.log(9 - 5);

//code reusibility
function addition(a, b) {
  let sum = a + b;
  console.log(`sum of ${a} and ${b} is`, sum);
}
addition(3, 4);
addition(5, 11);

//passing a function as a argument
function findIsEligibileForVoting(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
let result = findIsEligibileForVoting(12);

function PrintEligibility(arg) {
  if (arg == true) {
    console.log("eligible fo voting");
  } else {
    console.log("not eligible fo voting");
  }
}
PrintEligibility(result);

//immediately invoked functions
(function substract(a, b) {
  let sum = a - b;
  console.log(sum);
})(5, 3);

//arrow fuc-when u have a single line in ur func no need of curly braces
let product = (a) => a * a;
console.log(product(4));

//only one argument no need of paranthesis
let square = (b) => b * b;
console.log(square(5));
//no arguments parenthesis is mandatory
let names = () => console.log("data is safe");
names();

//callback function-
function findIsEligibileForVoting(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
let result1 = findIsEligibileForVoting(12);

function PrintEligibility(arg) {
  if (arg == true) {
    console.log("eligible fo voting");
  } else {
    console.log("not eligible for voting");
  }
}
PrintEligibility(result1);
