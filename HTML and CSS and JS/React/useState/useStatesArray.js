function MyApp() {
  const [bikes, setBikes] = React.useState([
    "KTM",
    "NINJA",
    "TIGER",
    "DUCCATI",
  ]);
  console.log(bikes);
  const remove = () => {
    bikes.pop();
    setBikes([...bikes]);
  };
  return (
    <div>
      {bikes.map((value, index) => {
        return <p key={index}>{value}</p>;
      })}
      <button
        onClick={() => {
          remove();
        }}
      >
        Remove
      </button>
    </div>
  );
}
ReactDOM.render(<MyApp />, document.getElementById("container"));
