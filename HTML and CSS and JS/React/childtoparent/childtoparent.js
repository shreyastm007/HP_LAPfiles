class MyApp extends React.Component {
  state = {
    text: "",
  };
  getDataFromChild(childData) {
    console.log(childData);
    this.setState(
      {
        text: childData,
      },
      () => {
        console.log(this.state);
      }
    ); //hey say hello
  }
  render() {
    return (
      <div>
        <h1>This is parent Component</h1>
        <h2>{this.state.text}</h2>
        <Child callback={this.getDataFromChild.bind(this)} />
      </div>
    );
  }
}
class Child extends React.Component {
  render() {
    const str = "I am precious Data";
    return (
      <div>
        <h1>This is child Component</h1>
        <button
          onClick={() => {
            this.props.callback(str);
          }}
        >
          Send data from Child
        </button>
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("container"));
