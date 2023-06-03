//Dom is a tree structure of Html elements
//1)create a element dynamically.
//2)delete a element dynamically
//3)we can render the Dom elements into the browser by dom methods

//DOM METHODS=
//getElementById(),getElementByClassName(),querySelector()

const element = document.getElementById("demo");
console.log(element);
element.innerText = "DOM";

//Query Selector method will return first tag which comes in the tree structure.
const tagElement = document.querySelector("h1");
console.log(tagElement);

//class Selector by query selector
const classElement = document.querySelector(".firsth1");
console.log(classElement);

//class selector
const classSelector = document.getElementsByClassName("test");
console.log(classSelector);
const elements = document.getElementsByClassName("data");
console.log(elements);
console.log(elements.length);

for (let i = 0; i < elements.length; i++) {
  if (i == 0) {
    elements[i].innerText = "nayana";
  } else if (i == 1) {
    elements[i].innerText = "s r";
  } else {
    elements[i].innerText = "banglore";
  }
}

//getElement by tag name
//it will return an aray
const tagElements = document.getElementsByTagName("p");
console.log(tagElements);

//it will return an array of elements
const dataElements = document.querySelectorAll(".data");
console.log(dataElements);

for (let i = 0; i < dataElements.length; i++) {
  dataElements[i].style.fontSize = "20px";
  dataElements[i].style.backgroundColor = "brown";
  dataElements[i].style.color = "blue";
}

//creating an element in javaScript
const h1Element = document.createElement("h1");
h1Element.innerText = "this is my h1 tag created by javascript";
console.log(h1Element);
document.body.appendChild(h1Element);
h1Element.style.fontSize = "50px";
h1Element.style.backgroundColor = "yellow";
h1Element.style.color = "green";
