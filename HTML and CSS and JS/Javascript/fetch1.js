let url = "https://jsonplaceholder.typicode.com/todos";

let fetchUsers = () => {
  fetch(url)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      let mappedData = "<ul>";
      data.map((value, ind, arr) => {
        mappedData += `<li>${value.title}</li>`;
        console.log(mappedData);
      });
      mappedData += "</ul>"; //=mappedData=mappedData+<li>${value.title}</li>
      const myData = document.getElementById("mydata");
      myData.innerHTML = mappedData;
      //   console.log(mappedData);
    })
    .catch((err) => {
      console.log(err);
    });
};

fetchUsers();
