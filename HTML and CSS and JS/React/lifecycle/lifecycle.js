class Parent extends React.Component {
  componentDidMount() {
    //this will executed for the first time mounting to real DOM
    //used to make side effects to the component
    //you can make api calls in this method
    console.log("Parent componentDidMount executed");
  }
  constructor() {
    //1.initialization and binding
    super();
    this.state = {
      text: "mounting Phase",
      show: true,
    };
    console.log("Parent Constructor executed");
  }
  static getDerivedStateFromProps(props, state) {
    //it returns the state or if there is no change in state it will return null
    console.log("Parent  getDerivedStateFomProps executed ");
    return state;
  }
  render() {
    //in render we should not update anything or we shouldnt perform any side effects.
    //because if we try to update anything render will go to infinte loop
    console.log("Render method executed");
    return (
      <div>
        {" "}
        {this.props.age}
        <h1>{this.state.text}</h1>
        <button
          onClick={() => {
            this.updateText("updating phase");
          }}
        >
          {" "}
          Click
        </button>
        {this.state.show ? <Child /> : null}
      </div>
    );
  }
  updateText(text) {
    this.setState({
      text: text,
      show: false,
    });
  }
  shouldComponentUpdate() {
    console.log("parent shouldComponentUpdate executed ");
    return true;
  }
  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("Parent getSnapshotBeforeUpdate executed ");
    return "scrolling position";
  }
  componentDidUpdate(prevProp, prevState, snapshot) {
    console.log("Parent componentDidUpdate executed");
    console.log("previous prop", prevProp);
    console.log("previos state", prevState);
    console.log("snapshot", snapshot);
  }
}

class Child extends React.Component {
  render() {
    return <div>Child Component</div>;
  }
  componentWillUnmount() {
    console.log("Child componentWillUnmount executed ");
  }
}
ReactDOM.render(<Parent age="23" />, document.getElementById("container"));
