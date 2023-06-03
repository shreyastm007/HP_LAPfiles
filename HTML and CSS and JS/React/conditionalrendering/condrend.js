class MyApp extends React.Component {
  state = {
    adminName: "Namana",
    user: "Avi",
    isAdmin: true,
  };
  changeView() {
    if (this.state.isAdmin) {
      this.setState({
        isAdmin: false,
      });
    } else {
      this.setState({
        isAdmin: true,
      });
    }
  }
  render() {
    let { adminName, user, isAdmin } = this.state;
    let renderedData = null;
    if (isAdmin) {
      renderedData = (
        <div>
          <h1>Admin is {adminName}</h1>
          <h2>Home</h2>
          <h2>Add Products</h2>
        </div>
      );
    } else {
      renderedData = (
        <div>
          <h1>UserName is {user}</h1>
          <h2>Home</h2>
          <h2>Products</h2>
        </div>
      );
    }
    return (
      <div>
        {renderedData}
        <button
          onClick={() => {
            this.changeView();
          }}
        >
          {isAdmin ? "see user view" : "see admin view"}
        </button>
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("container"));
