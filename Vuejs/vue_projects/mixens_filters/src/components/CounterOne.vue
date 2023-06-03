<template>
  <h1> Counter 1 :{{counter}}</h1>
  <button @click="increment"> Increment </button>
  <button @click="decrement"> Decrement </button>
  <button @click="reset"> reset </button>
  
  
</template>

<script>
import counterMixins from '@/mixins/CounterMixins'
export default {
   mixins:[counterMixins(0,6)]


}
</script>

<style>

</style>