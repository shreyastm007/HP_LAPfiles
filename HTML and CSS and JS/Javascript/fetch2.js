let url = "https://jsonplaceholder.typicode.com/todos";
let fetchfunc = () => {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let details = "<div>";
      data.map((value) => {});
    });
};
