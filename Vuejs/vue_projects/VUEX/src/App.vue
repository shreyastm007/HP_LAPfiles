<template>
  
  <my-counter />
  <second-counter />
  

    

</template>

<script>
import MyCounter from './components/MyCounter.vue'
import SecondCounter from './components/SecondCounter.vue'



export default {
  name: 'App',
  components: {
    MyCounter,
    SecondCounter
   
   
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
