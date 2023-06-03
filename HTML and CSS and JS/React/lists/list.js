const listElement = React.createElement(
  "ul",
  null,
  React.createElement(
    "li",
    { className: "car", style: { color: "blue" } },
    "Car"
  ), //second argument is a attribute
  React.createElement("li", { className: "Jeep" }, "Jeep")
);

//looping by map method
const mobiles = ["one+", "apple", "samsung", "realme", "xiaomi"];
const mobilesLoop = mobiles.map((mobile, index) => {
  return React.createElement("li", { key: mobile + index }, mobile);
});

const allItems = React.createElement("div", null, listElement, mobilesLoop);

ReactDOM.render(allItems, document.getElementById("container"));
