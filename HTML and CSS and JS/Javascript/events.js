//events are some actions example:click,onClick,onHover
//event Listener:javaScript functions

function changeName(user) {
  const element = document.getElementById("name");
  element.innerText = "Himagirish";
}

//hover experiment javascript
let changeColor = () => {
  const element1 = document.getElementById("changeColor");
  element1.style.backgroundColor = "red";
};

let removeColor = () => {
  const element = document.getElementById("changeColor");
  element.style.backgroundColor = "white";
};
function setBodyAttr(attr, value) {
  console.log(value);
  console.log(attr);
  if (document.body) {
    document.body[attr] = value;
  } else {
    throw new Error("no support");
  }
}
