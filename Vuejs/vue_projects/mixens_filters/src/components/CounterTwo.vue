<template>
    <h1> Counter 2 :{{counter}}</h1>
    <button @click="increment"> Increment </button>
  </template>
  
  <script>
import counterMixins from "@/mixins/CounterMixins"

  export default {

      mixins:[counterMixins(0,8)]
  
  
  }
  </script>
  
  <style>
  
  </style>