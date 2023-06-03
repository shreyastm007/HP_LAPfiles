<template>
  <user-details :userData="userData"/>
  <fruit-list />
</template>

<script>
import FruitList from './components/FruitList.vue'
import UserDetails from './components/UserDetails.vue'


export default {
  name: 'App',
  components: {
    UserDetails,
    FruitList

  },
  data(){
    return{
      userData:{
        name:"Shreyas",
        description:"software developer",
        role:"Admin"

      }
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
