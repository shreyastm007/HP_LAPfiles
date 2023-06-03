<template>
    <counter-one />
    <counter-two />
    <comp-a />
</template>

<script>
import CompA from './components/CompA.vue'
import CounterOne from './components/CounterOne.vue'
import CounterTwo from './components/CounterTwo.vue'



export default {
  name: 'App',
  components: {
    CounterOne,
    CounterTwo,
    CompA
   
    
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
