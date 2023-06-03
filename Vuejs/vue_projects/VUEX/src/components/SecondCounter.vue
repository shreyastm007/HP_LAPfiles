<template>
  <h4> Counter two: {{counter}}</h4>
</template>

<script>
export default {
    computed:{
        counter(){
           // return this.$store.state.counter*3
          //return this.$store.getters.counterThreeTimes
          return this.$store.getters.limitCounter
        }
    }

}
</script>

<style>

</style>