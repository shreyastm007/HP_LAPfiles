<template>
    <h1>Users</h1>
  </template>
  
  <script>
    import {JSONUSERS} from '../axiosConfig'
  export default {
    methods: {
      async fetchData() {
        
          let res = await JSONUSERS.get("/users");
          console.log("user res", res);
        } 
      },
  
    mounted() {
      this.fetchData();
    },
  };
  </script>
  
  <style></style>