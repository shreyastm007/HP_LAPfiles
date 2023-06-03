//jsx
//javascript xml
//bable will convert jsx to browser understandable code
console.log("started");
const element = <h1>hello world</h1>;
console.log(element);
const d = "Nuthana";
const h1Element = (
  <h1>
    {" "}
    hello {d}
    {console.log("i am inside jsx")}{" "}
  </h1>
);

const mobiles = ["one+", "apple", "samsung", "realme", "xiaomi"];
const loopingData = mobiles.map((value) => {
  return <h1>{value}</h1>;
});
const ulElement = (
  <ul>
    {mobiles.map((value) => {
      return <li>{value}</li>;
    })}
  </ul>
);
const allItems = React.createElement(
  "div",
  null,
  ulElement,
  loopingData,
  h1Element
);
ReactDOM.render(allItems, document.getElementById("container"));
