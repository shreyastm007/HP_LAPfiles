//functional COMPONENT
function Header(props) {
  return (
    <div>
      <h1>
        I am in Header Component <br />
        {props.logo}-{props.brand}
      </h1>
      <img src={props.logo} />
    </div>
  );
}
function Content({ fName, lName }) {
  return (
    <div>
      <h2>I am inside Content Component</h2>
      <p>
        {fName}
        {lName}
      </p>
    </div>
  );
}
function Footer(props) {
  let { name, age } = props;
  return (
    <div>
      <h3>I am inside Footer Component</h3>
      <h1>
        name:{name} age:{age}
      </h1>
    </div>
  );
}
ReactDOM.render(
  <div>
    <Header logo="car.avif" heigth="100px" width="100px" brand="audi" />
    <Content fName="avi" lName="palerya" />
    <Footer name="Avi" age="22" />
  </div>,
  document.getElementById("container")
);
