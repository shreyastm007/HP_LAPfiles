function Parent(props) {
  let data = ["Chocolates", "Mango", "Apple", "Strawberry", "banana"];
  let data2 = [
    { firstName: "Megha", lName: "T A", Phone: 9964647560 },
    { firstName: "Avi", lName: "T A", Phone: 9964647560 },
    { firstName: "Nayana", lName: "T A", Phone: 9964647560 },
    { firstName: "Akshatha", lName: "T A", Phone: 9964647560 },
  ];
  return (
    <div>
      <h1>Welcome to Parent Component</h1>
      <Child data={data} data2={data2} />
    </div>
  );
}

function Child(props) {
  console.log(props.data);
  console.log(props.data2);
  return (
    <div>
      <h1> This is my Child Component</h1>
      {props.data.map((value, index) => {
        return <p key={index}>{value}</p>;
      })}
      {props.data2.map((value) => {
        return <p>{value.firstName}</p>;
      })}
    </div>
  );
}

ReactDOM.render(<Parent />, document.getElementById("container"));
