<template>

  <h1> Hello Vue</h1>
  <!-- rendering MyComponent-->
  <my-component  :userName="userName"
  :rollNo= rollNo :hobby="hobby"/> 

</template>

<script>
import MyComponent from './components/MyComponent.vue'

export default {
  
  name: 'App',

  components: {
    
    MyComponent
  },

  //data
  data() {
return {
  userName: "avi",
  hobby:"cricket",
  rollNo:10
 
}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
