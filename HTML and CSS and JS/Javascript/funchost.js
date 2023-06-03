console.log("this is outside the function ", a);
var a = 20;
var b = 30;
console.log("this is outside the function", b);

function test() {
  console.log("b is insiide the func", b);
  var b = 10; //local variable is more priror than global variable
  console.log("b is inside the func", b);
  console.log("a is inside the function", a);
  console.log(b);
}
test();

//function hositing
add(2, 4);
function add(a, b) {
  console.log(a + b);
}
greet(); //greet is taken as variable hoisting
var greet = function () {
  console.log("good moning");
};
