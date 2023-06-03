function Greet() {
  const myStyle = {
    backgroundColor: "red",
    color: "blue",
  };
  return (
    <div>
      <h1 style={{ backgroundColor: "pink", color: "gray", fontSize: "20px" }}>
        Hello React
      </h1>
      <h2 style={myStyle}>This is H2 with style</h2>
      <div className="main">
        <div className="main1">
          <div className="d1"></div>
          <div className="d2"></div>
        </div>
        <div className="main2">
          <div className="d3"></div>
          <div className="d4"></div>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<Greet />, document.getElementById("container"));
