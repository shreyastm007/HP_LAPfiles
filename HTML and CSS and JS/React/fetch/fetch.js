class Title extends React.Component {
  state = {
    data: [],
  };

  fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
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
        <h1>titles</h1>
        <button onClick={this.fetchData}>click</button>
        {this.state.data.map((value) => {
          return <p>{value.title}</p>;
        })}
      </div>
    );
  }
}
ReactDOM.render(<Title />, document.getElementById("container"));
