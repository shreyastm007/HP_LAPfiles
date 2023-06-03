<template>
  <h3> Iam Component C</h3>
  <h2> {{msg}}</h2>
  <h2> {{message}}</h2>


</template>

<script>
export default {
    props:["msg"],
   inject:['message'],
  

}
</script>

<style>

</style>