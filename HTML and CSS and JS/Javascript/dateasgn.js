const date5 = new Date("sept 12 2020");
const validDate = date5.toLocaleDateString("en-us", {
  weekday: "long",
  month: "long",
  year: "numeric",
  day: "2-digit",
});
console.log(validDate);
