//to create a component you should follow the pascle case
//jsx rules
//if we have more than 2 elements we have to wrap it inside the paranthesis
//if we have more than 1 element in component then we have to wrap it inside a parent element

class Header extends React.Component {
  render() {
    console.log(this.props.firstName);
    console.log(this.props.lastName);
    return (
      <div>
        <div>
          <h1>I am a new header</h1>
          <p>hi there i am skjhdsgfjkbsacjbasfbashfbsbfjsfsfjshfjks</p>
          <h1>
            hello {this.props.firstName}
            {this.props.lastName}
          </h1>
        </div>
        <div></div>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return <h1>Hello i am content page</h1>;
  }
}
ReactDOM.render(
  <div>
    <Header firstName="avi" lastName="palerya" /> <Content />
  </div>,
  document.getElementById("container")
);

class Footer extends React.Component {
  render() {
    console.log(this.props.PageDetails);
    return (
      <div>
        <h1>This is footer page</h1>
        <p> another footer page</p>
        <h1> This the page details line </h1>
      </div>
    );
  }
}
ReactDOM.render(
  <div>
    <Footer PageDetails />
  </div>,
  document.getElementById("container")
);
