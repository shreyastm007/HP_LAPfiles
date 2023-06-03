<template>
  <h1>userName in uppercase: local filter => {{upperCaseFilter}} </h1>
  <h2> Currency in Rs :{{renumeration}}</h2>
  <h2> Global filter => Currency in USD:{{$filters.currencyUSD(renumeration)}}</h2>
</template>

<script>
export default {
    data(){
        return {
            userName:"akshay kumar",
            renumeration:60000000
        }
    },
    computed:{
        upperCaseFilter(){
            return this.userName.toUpperCase()
                 
            
        }
    }

}
</script>

<style>

</style>