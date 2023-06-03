<template>
  <h3> Counter:{{counter}}</h3>
  <button @click="addOne"> Increment </button>
  <button @click="noDelay"> increment(nodelay) </button>
  <button @click="decrease"> Decrement </button>
  <button @click="reset"> reset </button>
</template>

<script>
export default {

// data(){
//     return{
//         counter:0
//     }
// },

computed:{
 counter(){  
    return this.$store.state.counter;// to access store and get data
 }
},
methods:{
    
    // addOne(){
    //    this.$store.commit('increment') // calling functions in mutations
    // },
    // deleteOne(){
    //    this.$store.commit('decrement')
    // },
    // reset(){
    //    this.$store.commit('reset')
    // }
    // increase(){
    // this.$store.commit('increase',{value:20})
    // },

     addOne(){// dispatching action
       this.$store.dispatch({type:'increase',value:10})
     },
    
    decrease(){
    this.$store.commit('decrease',{value:30})
    },
    noDelay(){
    this.$store.dispatch("increment")
    }
}
}
</script>

<style>

</style>