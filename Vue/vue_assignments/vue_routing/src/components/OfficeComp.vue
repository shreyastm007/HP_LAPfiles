<template>
  <h1> Office component🏢</h1>
  <button @click="goToHome"> Go to Home</button>
</template>

<script>
export default {
    methods:{
    goToHome(){
        this.$router.push("/")
       // this.$router.back()
       // this.$router.forward()
    }
}

}
</script>

<style>

</style>