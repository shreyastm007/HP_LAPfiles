function MyApp() {
  const [person, setPerson] = React.useState({
    fName: "Himagirish",
    lName: "N D",
  });
  function updateName() {
    setPerson({
      ...person,
      fName: "Avi",
    });
  }
  return (
    <div>
      <p>{person.fName}</p>
      <p>{person.lName}</p>
      <button
        onClick={() => {
          updateName();
        }}
      >
        {" "}
        Click
      </button>
    </div>
  );
}
ReactDOM.render(<MyApp />, document.getElementById("container"));
