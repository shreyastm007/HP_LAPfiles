<template>
 <h1> Movie App</h1>
 <movie-app />
 <fetch-users />
 
</template>

<script>
import FetchUsers from './components/FetchUsers.vue'
import MovieApp from './components/MovieApp.vue'


export default {
  name: 'App',
  components: {
    MovieApp,
    FetchUsers
    
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
