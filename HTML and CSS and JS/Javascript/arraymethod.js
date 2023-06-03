let myArray = [20, 30, 40, 2, 4, 7, 1];
//push method
//push method will add an element at the end
//it will take a value and return a new array
//it will change the length of the array
myArray.push(50, 60, 70);
console.log(myArray);
console.log(myArray.push());

//pop method- it will delete the last element of the array
//doesnt take any arguments
//it will return the removed items
console.log(myArray.pop());
console.log(myArray);
console.log(myArray.pop());
console.log(myArray);

//unshift method is used to add an element inthe begininng of an array
//it will take an element to add to the aray as a argument
//unshift method will return the length of an array
let fruits = ["apple", "grap", "mango", "orange"];
fruits.unshift("lemon");
console.log(fruits);
console.log(fruits.unshift());

//shift method-remove element at the beginning
//it wont take any parameters
//it will return the removed elements
console.log(fruits.shift());
console.log(fruits.shift());
console.log(fruits);

//concat method-it concates/merges multiple arrays
//it will take arrays as parameters and return the concated array
let a = [1, 2, 3, 4];
let b = [10, 20, 30, 40];
let c = [5, 6, 7, 8];
let res = a.concat(b, c);
console.log(res);

const arr1 = [1, 2, [3, 4]];
const arr2 = [[5, 6], 7, 8, [9, 10]];
const arr3 = arr1.concat(arr2);
console.log(arr3);

//flat-it will make nested arrays as a single array
console.log(arr3.flat());

//join-it will return array as a string
const city = ["bglre", "tmkr", "klr", "hsn"];
let string = city.join("/"); //default-(,)will be there
console.log(string);

//findIndex and indexof
//findIndex will take a callback func and returns the index of the element
let arrayData = [3, 10, 18, 20, 21];
let x = arrayData.findIndex((age) => {
  return age > 18;
});
console.log(x); //3

let arrD = [20, 2, 3, 19, 28, 20];
function VotingElg(age) {
  return age > 18;
}
let x1 = arrD.findIndex(VotingElg);
console.log(x1);

//indexof-returns the first index of specified value
//it will return -1 if it doesnt have the specified value.
console.log(arrD.indexOf(2)); //4
console.log(arrD.indexOf(35)); //-1
console.log(typeof arrD);
console.log(Array.isArray(arrD));
let n = 78;
console.log(Array.isArray(n));

// split method-converts string to array
let data = "hello java script";
let arr1D = data.split("");
console.log(arr1D);

//reveresing a string
let lamda = "before a good leader be a good human";
let lamda1 = lamda.split(" ");
console.log(lamda1);
let reverse = " ";
for (let i = lamda1.length - 1; i--; ) {
  reverse += lamda1[i];
}
console.log(reverse);

let lamd = "before a good leader be a good human";
let ba = lamda.split(" ");
ba.reverse();
console.log(ba);

//IsArray
let a1 = [1, 2, 3, 4];
let a2 = 1;
console.log(Array.isArray(a1));
console.log(Array.isArray(a2));

//map();-to loop an array
//forEach();
//filter();
//all these 3 used to loop arrays
//map takes a call back function(value,index,original array)
lamda1.map((value, index, arr) => {
  console.log(value, index);
});
lamda1.filter((value, index, arr) => {
  console.log(value, "filter");
});

let filterArr = [20, 30, 50, 60, 80, 12, 17];
filterArr.filter((value, index, arr) => {
  if (value > 20) {
    console.log(value);
  }
});

let filtered = filterArr.filter((value) => {
  return value + 10;
}); //no change in the output
let mapped = filterArr.map((value) => {
  return value + 10;
}); //10 will be added to the values
console.log(filtered);
console.log(mapped);

//foreach-loop for every array once it  will looped
let hobbies = [
  "cricket",
  "badmitton",
  "carrom",
  "cooking",
  "gardening",
  "shuttle",
];
hobbies.forEach(function (val, index, arr) {
  console.log(`${val}-${index}`);
});

//includes
console.log(hobbies.includes("cricket"));
console.log(hobbies.includes("swimming"));

//find method
//find method will take one callback function
//it returns the  first element tat matches the condition if not returns undefined
let arryFind = [11, 6, 7, 1, 2];
const found = arryFind.find((value) => value > 10);
console.log(found);

//sort method
//it will arrange element either in ascending or decending order
//it will return a sorted array
const sorting = arryFind.sort();
console.log(sorting);
console.log(arryFind.sort());

//splice method-add/remove elements in the middle of the array
//arrayData.splice(start-index,no-of-ele-to-be-removed,new-elem-to-be-added)
//it will affect the original array
//it will return the removed ele if any ele are removed

let spliceArray = [2, 4, 7, 3, 5, 6, 8, 9, 10];
let splicedArry = spliceArray.splice(3, 2, 56, 78);
console.log(spliceArray); //new array with added elements
console.log(splicedArry); //it will return the deleted elements

let noDelete = spliceArray.splice(2, 0, 25, 60);
console.log(spliceArray);
console.log(noDelete);

//slice method-only remove element works here
//it returns the new array with new reference
//it will take only 2 arguments(start(left-0 and right=-1))
//to delete a ele in the mid of the array
let sliceArray = ["cit", "ssit", "kit", "nist", "christ"];
const data2 = sliceArray.slice(1);
const data3 = sliceArray.slice(2);
const data4 = sliceArray.slice(2, 4);
const data5 = sliceArray.slice(2, -1);
const data6 = sliceArray.slice(-2);
console.log(data2);
console.log(data3);
console.log(data4);
console.log(data5);
console.log(data6);
console.log(sliceArray);
