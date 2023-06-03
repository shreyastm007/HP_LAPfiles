function Counter() {
  let [count, setCount] = React.useState(0);

  function Increment() {
    setCount(count + 1);
  }
  function Decrement() {
    setCount(count - 1);
  }
  function Reset() {
    setCount(0);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          Increment();
        }}
      >
        {" "}
        Increment
      </button>
      <button
        onClick={() => {
          Decrement();
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          Reset();
        }}
      >
        Reset
      </button>
    </div>
  );
}
ReactDOM.render(<Counter />, document.getElementById("container"));
