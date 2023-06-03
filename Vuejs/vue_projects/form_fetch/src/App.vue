<template>
  <my-modal />
   <request-fetch /> 
  
</template>

<script>
import MyModal from './components/MyModal.vue'


//import GymForm from './components/gymForm.vue'
 import RequestFetch from './components/requestFetch.vue'



export default {
  name: 'App',
  components: {
    
   
   // GymForm,
    RequestFetch,
    
    
 
    MyModal   
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
