<template>
    <h1>Users</h1>
  </template>
  
  <script>
  export default {
    methods: {
      async fetchData() {
        try {
          let res = await fetch("https://jsonplaceholder.typicode.com/users");
          let data = await res.json();
          console.log("data", data);
        } catch (err) {
          console.log("error", err);
        }
      },
    },
    mounted() {
      this.fetchData();
    },
  };
  </script>
  
  <style></style>