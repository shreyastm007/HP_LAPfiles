var a = 12;
var b = "12";
if (a == b) {
  console.log("True");
} else {
  console.log("False");
}

var age = 40;
var Marriage = age > 21 ? "Eligible for Marriage" : "Not eligible to Marry";

console.log(Marriage);

var per = 45;

var CheckingP =
  per < 0 || per > 100
    ? "Enter Valid Percentage"
    : per < 35
    ? "Fail"
    : per < 60
    ? "Second Class"
    : per < 70
    ? "First CLass"
    : per < 80
    ? "FCD"
    : "D";
console.log(CheckingP);

