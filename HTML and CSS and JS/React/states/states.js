class Greet extends React.Component {
  state = {
    firstName: "Prajwal",
    age: 22,
  };
  changeName = () => {
    console.log("before setState:", this.state.firstName);
    this.setState(
      {
        firstName: "HimaGirish",
        age: 21,
      },
      () => {
        console.log("after setState", this.state.firstName);
      }
    );
  }; ///Props are immutable
  ///states are mutable
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
      </div>
    );
  }
}
ReactDOM.render(<Greet />, document.getElementById("container"));
