let weight = 45;
let height = 1.5;
let bmi = weight / (height * height);
console.log(bmi);
console.log(
  bmi < 18.5
    ? "underweight"
    : bmi < 25
    ? "normal"
    : bmi < 30
    ? "overweight"
    : "obese"
);

if (bmi < 18.5) {
  console.log("underweight");
} else if (bmi < 25) {
  console.log("normal");
} else if (bmi < 30) {
  console.log("overweight");
} else {
  console.log("obese");
}
