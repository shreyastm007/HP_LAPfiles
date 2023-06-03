<template>
   <nav-bar /> 

   <!-- <fetch-users /> -->
  <!-- <nav-comp /> -->
    
  <router-view>

  </router-view>
</template>

<script>
  
//import FetchUsers from './components/FetchUsers.vue'


import NavBar from './components/NavBar.vue'
//import NavComp from './components/NavComp.vue'




export default {
  name: 'App',
  components: {
    NavBar,
    //FetchUsers,
   
   
    //NavComp,
   
    
  
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
  
}
</style>
