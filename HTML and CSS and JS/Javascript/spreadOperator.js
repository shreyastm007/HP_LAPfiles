// ...magical dots
// rest operator
//it will alown us to add varying arguments to function
function add(...a) {
  let sum = 0;
  for (let i of a) {
    sum = sum + i;
  }
  console.log(sum);
  return sum;
}
add(20, 30);
add(1, 2, 44, 5);
add(1, 2, 3, 34, 4, 5, 56, 3, 3, 1, 3, 13, 2, 4, 4, 2, 4, 2, 32, 3);

//primitive type copied by value
let x = 30;
let y = x + 10;
console.log(y);
console.log(x);

//reference types are copied by reference
let m = {
  name: "avi",
  age: 22,
  ph: 123456,
};
let n = { ...m };
m.name = "akash";
n.age = 24;
console.log(n);
console.log(m);

let person = {
  fName: "Nayana",
  lName: "S R",
  moreDetails: {
    bloodGroup: "A+",
    gender: "female",
  },
};
let personCopy = { ...person }; //shallow copy
person.fName = "Nuthana";
let deepCopy = {
  ...person,
  moreDetails: { ...person.moreDetails },
  moreDetails: { ...person.moreDetails.address },
};
person.moreDetails.bloodGroup = "AB+";
console.log(person);
console.log(deepCopy);
//deep copy will copy all the levels of array or object
//new object will be created with new reference

//JSON.parse():this will convert string to object
//JSON.stringify():will convert object to string
const personCopyJson = JSON.parse(JSON.stringify(person));
console.log(personCopyJson);
