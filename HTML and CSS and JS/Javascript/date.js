//date object
const systemDate = new Date();
console.log(systemDate);
console.log(systemDate.getDay());
console.log(systemDate.getMonth());
console.log(systemDate.getTime());
console.log(systemDate.getFullYear());
console.log(systemDate.getMinutes());

const dateString = new Date("dec/21/2021");
console.log(dateString);
console.log(dateString.getDay());

const date1 = new Date("dec/22/2021");
let Month = date1.getMonth();
console.log(Month);
let dateVal = date1.getDate();
console.log(dateVal);
let year = date1.getFullYear();
console.log(year);

const fullYear = `${Month + 1}/${dateVal}/${year}`;
console.log(fullYear);

//("Tuesday/August/2022");
const fullDate = systemDate.toLocaleDateString("en-in", {
  weekday: "long",
  month: "long",
  year: "numeric",
  day: "numeric",
});
console.log(fullDate);
