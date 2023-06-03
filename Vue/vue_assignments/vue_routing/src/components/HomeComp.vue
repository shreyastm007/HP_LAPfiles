<template>
  <h1> Home component🏡</h1>
  <button @click="goToOffice"> Go to office</button>
</template>

<script>
export default {
    methods:{
    goToOffice(){
        this.$router.push("/office")
    }
}

}
</script>

<style>

</style>