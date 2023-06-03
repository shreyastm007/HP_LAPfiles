<template>
  <h1> Hey, This is my component...</h1>
  <h2>  {{name}}  {{greeting}} ,my hobby is {{hobby}} </h2>
  <h3> {{userName}} is {{rollNo}}</h3>
</template>

<script>
export default {
  //props:['greeting','userName','hobby'],
props:{
 rollNo:{
  type:Number,
 },
 userName:{
  type:String
 },
 hobby:{
  type:String
 },

 },
  data(){
    return {
      name:"Shreyas",
      greeting:" good morning "
    }
  }

}
</script>

<style>

</style>