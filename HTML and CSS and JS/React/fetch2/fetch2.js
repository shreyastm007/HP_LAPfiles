class Users extends React.Component {
  state = {
    data: [],
  };

  fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        this.setState({ data: data });
        console.log(this.state.data);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>Users Details</h1>
        <button onClick={this.fetchData}>click</button>
        {this.state.data.map((value) => {
          return (
            <table className="table">
              <tr className="row1">
                <th>id</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
              </tr>
              <tr className="row2">
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.username}</td>
                <td>{value.email}</td>
              </tr>
            </table>
          );
        })}
      </div>
    );
  }
}
ReactDOM.render(<Users />, document.getElementById("container"));
