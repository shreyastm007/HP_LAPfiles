let url = "https://jsonplaceholder.typicode.com/posts";

//fetch()
//it returns a promise
//it takes url as a first argument and http methods as a second argument

const fetchPosts = () => {
  fetch(url)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let postData = "";
      data.map((posts) => {
        postData += `${posts.title} `;
      });
      postData += "";

      const divElement = document.getElementById("users");
      divElement.innerText = postData;
    })
    .catch((err) => {
      console.log(err);
    });
};
fetchPosts();
