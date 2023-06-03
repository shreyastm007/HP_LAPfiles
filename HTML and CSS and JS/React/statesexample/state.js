class Greet extends React.Component {
  state = {
    firstName: "Avi",
    age: 22,
  };
  changeName = () => {
    console.log("before setState of name:", this.state.firstName);
    this.setState(
      {
        firstName: "HimaGirish",
      },
      () => {
        console.log("after setState of name", this.state.firstName);
      }
    );
  };
  changeAge = () => {
    console.log("before setState of age:", this.state.age);
    this.setState(
      {
        age: 21,
      },
      () => {
        console.log("after setState of age", this.state.age);
      }
    );
  };
  render() {
    return (
      <div>
        <h1>
          firstName:{this.state.firstName} age:{this.state.age}
        </h1>
        <button
          onClick={() => {
            this.changeName();
          }}
        >
          Click to Change Name
        </button>
        <button
          onClick={() => {
            this.changeAge();
          }}
        >
          Click to change Age
        </button>
      </div>
    );
  }
}
ReactDOM.render(<Greet />, document.getElementById("container"));
