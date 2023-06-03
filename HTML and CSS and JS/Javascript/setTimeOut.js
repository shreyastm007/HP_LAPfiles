function add() {
  console.log("i am inside function");
  setTimeout(() => {
    console.log("i am inside add func set timeout");
  }, 20000);
  setTimeout(() => {
    console.log("i am settime out 2");
  }, 10000);
}
add();
setTimeout(() => {
  console.log("i am set timeout side the function");
}, 0);
console.log("hello");
console.log("end");
