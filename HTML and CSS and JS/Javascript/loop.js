//for loop//
//doesnt ignore empty elements
//doesnt work with objects
//break statements not supported
//ignore the exta properties which doesnt have proper index
let person = ["avi", 90, "30/july/2000", "", , 250000];
for (let i = 0; i < person.length; i++) {
  console.log(person[i]);
}

//for of loop same as for
for (let i of person) {
  console.log(i);
}

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
for (let i of students) {
  console.log(i);
}

let pens = [
  {
    brand: "renolds",
    color: "pink",
    Price: 3,
    type: "gel",
  },
  {
    brand: "parker",
    color: "black",
    Price: 500,
    type: "ball point",
  },
  {
    brand: "cello",
    color: "blue",
    Price: 5,
    type: "ball point",
  },
  {
    brand: "bright",
    color: "red",
    Price: 2,
    type: "ball point",
  },
];
for (let i = 0; i < pens.length; i++) {
  if (pens[i].Price < 5) {
    console.log(pens[i]);
  }
}

for (let i of pens) {
  if (i.Price < 500) {
    console.log(i);
  }
}

for (let i of pens) {
  if (i.type == "ball point" && i.Price > 5) {
    console.log(i);
  }
}

//for in loop
//works for both arryas and objects
//it ignores empty elements
//doesnt ignore extra properties which dont have index
let person1 = {
  firstName: "Avi",
  lastName: "Palerya",
  gender: "male",
  phnum: 9964647560,
};
for (let key in person1) {
  //   console.log(key);
  console.log(`${key}-${person1[key]}`);
}

//pens example
for (let value in pens) {
  if (pens[value].type == "ball point" && pens[value].Price > 5) {
    console.log(pens[value]);
  }
}

for (let value in person) {
  console.log("this is for loop ", person[value]);
}
